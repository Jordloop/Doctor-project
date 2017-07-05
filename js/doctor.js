const apiKey = require('./../.env').apiKey;

function Doctor(id, first_name, last_name, image_url, phone) {
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.image_url = image_url;
  this.phone = phone;
}

function Address(city, state, street, zip) {
  this.city = city;
  this.state = state;
  this.street = street;
  this.zip = zip;
}

//Sends request to API. Depending on result of request one of two callback functions is executed.
Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors, noResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=21&user_key=' + apiKey)
   .then(function(result) {
     if (result.data.length === 0) {
       noResults(medicalIssue);
     }
     else {
        for (let i = 0; i < result.data.length; i++) {
          let newDoctor = new Doctor(i + 1, result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.image_url, result.data[i].practices[0].phones[0].number);
          let newDoctorAddress = new Address (result.data[i].practices[0].visit_address.city, result.data[i].practices[0].visit_address.state, result.data[i].practices[0].visit_address.street, result.data[i].practices[0].visit_address.zip);
          displayDoctors(newDoctor, newDoctorAddress);
        }
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
