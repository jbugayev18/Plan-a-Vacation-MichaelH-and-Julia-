'use strict'

function getParks(searchTerm, limit=10){
fetch(
`https://developer.nps.gov/api/v1/parks?q=${searchTerm}&limit=${limit}&api_key=yEQDlJRh9YfjdZG9J5hGLQO1Qsb1LJXwSX2jQxKU`
)
.then((res)=> res.json)
.then((users) => users(searchTerm))

}

function submit(e){
    $('form').on(submit, function(e){
        let searchTerm = $('#park').val(); 

    })
    e.preventDefault();
    getParks(searchTerm, 10)


}

function render(users){
    let park= searchTerm.map((ul).append('<li>users.state</li><li>users.contacts</li>'))

}