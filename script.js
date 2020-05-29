'use strict';

$(document).ready(function(){
  console.log("Waiting for submit!")
  processInput();
});


function findImages(userBreed){
    fetch('https://dog.ceo/api/breed/' + userBreed + '/images/random')
    .then(response => response.json())
    .then(responseJson => 
    displayImages(responseJson));
}

function displayImages(responseJson){
  console.log(responseJson);
    $('.results-img').replaceWith((`<img src="${responseJson.message}" class="results-img">`))
    $('.images-set').removeClass('hidden')
}


function processInput(){
  $('.btn').click(event => {
    event.preventDefault();
    findImages()
    let userBreed = $('#picValue').val();
    findImages(userBreed);
  });
}
