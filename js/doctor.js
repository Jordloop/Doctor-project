const apiKey = require('./../.env').apiKey;

function Doctor(id, first_name, last_name, image_url){
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.img_url = image_url;
}

Doctor.prototype.getDoctors = function(medicalIssue, display) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {

      for (let i = 0; i < result.data.length; i++) {
        let first = result.data[i].profile.first_name;
        let last = result.data[i].profile.last_name;
        let image = result.data[i].profile.image_url;
        let newDoctor = new Doctor(i + 1, first, last, image);

        console.log(newDoctor);
        display(first, last, image);

      }
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
