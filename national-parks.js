'use strict'
let url = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=yEQDlJRh9YfjdZG9J5hGLQO1Qsb1LJXwSX2jQxKU"
const parks = () => {

const parksPromise= fetch(url)
.then(response =>response.json())
;
    return parksPromise
};

$('form').on('click', "button", function(e){
    parks().then(data => {
        let nationalParks= data.data; 
        for (let i=0; i<nationalParks.length; i++ ){
            console.log(nationalParks[i]);
        }
    })
    e.preventDefault(); 
    $('.renderParks').html(
        'Hello'
    ); 

}); 
