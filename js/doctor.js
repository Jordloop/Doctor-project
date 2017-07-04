const apiKey = require('./../.env').apiKey;

function Doctor(id, first_name, last_name, image_url, bio){
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.image_url = image_url;
  this.bio = bio;
}

//Sends request to API. Depending on result of request one of two callback functions is executed.
Doctor.prototype.getDoctors = function(medicalIssue, successFunction, failFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     if (result.data.length === 0) {
       failFunction(medicalIssue);
     }
     else {
        for (let i = 0; i < result.data.length; i++) {
          let first = result.data[i].profile.first_name;
          let last = result.data[i].profile.last_name;
          let image = result.data[i].profile.image_url;
          let bio = result.data[i].profile.bio;
          let newDoctor = new Doctor(i + 1, first, last, image, bio);
          successFunction(newDoctor);
        }
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
