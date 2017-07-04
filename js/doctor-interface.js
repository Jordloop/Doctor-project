const Doctor = require('./../js/doctor.js').doctorModule;

const displayDoctors = function(first_name, last_name, image_url) {
  $("output").append(`<div class="row">
                        <div class="col-sm-6 col-md-4">
                          <div class="thumbnail">
                            <img src="${image_url}" alt="Doctor's image">
                            <div class="caption">
                              <h3>${first_name} ${last_name}</h3>
                              <p>Esse alterum insolens vis no. Vis an sint propriae prodesset, viris legimus ei mei, ea persius adipisci qui.</p>
                            </div>
                          </div>
                        </div>
                      </div>`);
};

$(document).ready(function(symptom){
  $('#symptom-form').submit(function(event){
    event.preventDefault();
    const newDoctor = new Doctor();
    const symptom = $('#symptom').val();
    newDoctor.getDoctors(symptom, displayDoctors);
  });
});
