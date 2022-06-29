import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Holiday from './date';
//Service Logic
function clearFields() {
  $('.date').val("");
  $('.showNames').append("");
  $('.showCountry').text("");
  $('.showDescription').text("");
}

function getElements(response) {
  console.log(response);
  console.log(`${response.name}`);
  for (let i = 0; i <= 4; i ++) {
    console.log(i);
    if (response[i]) {
      $('.showName').append("<p>" + `Holiday Name: ${response[i].name}` 
       + "<br>" + `Holiday Type: ${response[i].type}` + "<br>" + `Country: ${response[i].country}` + "</p>");
    }
  }
}
//UI Logic

$(document).ready(function () {
  $('#selector').submit(function(event) {
    event.preventDefault();
    const inputDate = $("input#date").val();
    let date = inputDate.split('-');
    clearFields();
    Holiday.getHoliday(date)
      .then(function(response) {
        getElements(response);
      });
  });
});