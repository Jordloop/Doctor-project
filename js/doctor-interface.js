const Doctor = require('./../js/doctor.js').doctorModule;

//Called if API request was fruitful
const displayDoctors = function(doctor, address) {
  $("#output").append(` <div class="col-sm-6 col-md-4">
                          <div class="thumbnail">
                            <img src="${doctor.image_url}" alt="Doctor's mug">
                            <div class="caption">
                              <h3>${doctor.first_name} ${doctor.last_name}</h3>
                              <hr>
                              <h5>Address:</h5>
                              <p>${address.street}, ${address.city}, ${address.state} ${address.zip}</p>
                              <h5>Phone:</h5>
                              <p>${doctor.phone}</p>
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
