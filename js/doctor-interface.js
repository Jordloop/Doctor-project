var SearchDoctors = require('./../js/doctor.js').doctorModule;
var newDoctor = new SearchDoctors();

$(document).ready(function(symptom){
  $('#symptom-form').submit(function(event){
    event.preventDefault();

    var symptom = $('#symptom').val();
    console.log(newDoctor.getDoctors(symptom));

  });
});
