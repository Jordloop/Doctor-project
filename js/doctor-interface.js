const Doctor = require('./../js/doctor.js').doctorModule;

//Called if API request was fruitful
const displayDoctors = function(doctor) {
  $("#output").append(`<div class="col-sm-12 col-md-12">
                        <div class="thumbnail">
                          <img src="${doctor.image_url}" alt="Doctor's image">
                          <div class="caption">
                            <h3>${doctor.first_name} ${doctor.last_name}</h3>
                            <hr>
                            <h4>Bio:</h4>
                            <p>${doctor.bio}</p>
                          </div>
                        </div>
                      </div>`);
};
//Called if API request was not fruitful
const noResults = function(symptom) {
  $("#output").append(`<h3>No results to display for "${symptom}".</h3>`);
};

$(document).ready(function(symptom){
  $('#symptom-form').submit(function(event){
    event.preventDefault();
    const newDoctor = new Doctor();
    const symptom = $('#symptom').val();
    $("#output").empty();
    newDoctor.getDoctors(symptom, displayDoctors, noResults);
  });
});
