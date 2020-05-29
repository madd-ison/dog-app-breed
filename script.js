'use strict';

$(document).ready(function(){
  console.log("Waiting for submit!")
  processInput();
});


function findImages(userBreed){
    fetch('https://dog.ceo/api/breed/' + userBreed + '/images/random')
    .then(response => response.json())
    .then(responseJson => 
    displayImages(responseJson))
    .catch(error => alert("Sorry, there's been an error!"))
}

function displayImages(responseJson){
  console.log(responseJson);
  if (responseJson.status === 'error') {
    $('.results-img').replaceWith('.sorry')
    $('.error').removeClass('hidden')
  } else {
    $('.results-img').replaceWith((`<img src="${responseJson.message}" class="results-img">`))
    $('.images-set').removeClass('hidden')}
}


function processInput(){
  $('.btn').click(event => {
    event.preventDefault();
    let userBreed = $('#picValue').val();
    findImages(userBreed);
  });
}
