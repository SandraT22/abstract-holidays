import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Holiday from './date';
import Drinks from './drinksService.js';


//Service Logic
function clearFields() {
  $('.showNames').append("");
  $('.showCountry').text("");
  $('.showDescription').text("");
}

function getElements(response) {
  for (let i = 0; i <= 4; i ++) {
    if (response[i]) {
      console.log(response[i]);
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
  $('#randomDrink').click(function() {
    let promise = Drinks.getDrinks();
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      $('.showDrink').text(`Your drink for the day is ${body.drinks[0].strDrink} 
      ` + <br>);
      $('.showDrink').append(`Your drink for the day is ${body.drinks[0].strInstructions} 
      `);
    }, function(error) {
      $('.showErrors').text(`there was an error processing your request: ${error}`);
    });
  });
});