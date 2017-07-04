const sayHi = require('./../js/doctor.js').sayHiModule;

$(() => {
  $('#symptom-form').submit((event) => {
    console.log('hello');
    event.preventDefault();
    const name = $("#symptom").val();
    $("#output").text(sayHi(name));
  });
});







// var Doctor = require('./../js/doctor.js').doctorModule;
// var newDoctor = new Doctor();
//
// $(document).ready(function(symptom){
//
//
//     // $('#doctor-search').submit(function(event){
//     //   event.preventDefault();
// });
