"use strict";

const api = 'h6FnVWOybjmPd1awcytwbqWIlNsxfzv8FM7YrC8v';
const parkSearch = 'https://developer.nps.gov/api/v1/parks';

function getParks(state, limit=10){
  const params = {
    stateCode:state,
    limit,
    apiKey:api
  };

  const parkStr = userFormatParks(params);

  const url = parkSearch + '?' + parkStr;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => display(responseJson))
    .catch(err => {
      console.log(err.message);
    });
}

function userFormatParks(params){
  const items = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  return items.join("&");
}

function display(responseJson){
  $('.parks').empty();
  console.log(responseJson);

  for(let i = 0; i < responseJson.data.length; i++){
    $('.parks').append(`'
   <li>
   <h4>${responseJson.data[i].fullName}</h4>
   <p>${responseJson.data[i].description}</p>
   <a href="${responseJson.data[i].url}">For more info pleas click Here</a>
   <address> 
   ${responseJson.data[i].addresses[1].line1}<br>
   ${responseJson.data[i].addresses[1].city}<br>
   ${responseJson.data[i].addresses[1].stateCode}<br>
   ${responseJson.data[i].addresses[1].postalCode}<br>
   </address>
   </li>`);
  }
}

function imWatchingYou(){
  $('form').submit(e => {
    e.preventDefault();
    const state = $('#search').val();
    const limit = $('number').val();
    getParks(state, limit);
  });
}
$(imWatchingYou);