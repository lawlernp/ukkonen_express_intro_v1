$(document).ready(onReady)

function onReady(){
    console.log('hi from jq');
    getRandomQuote();
    $('#submit').on('click', submitQuote);
};

function submitQuote() {
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log(quote, author);
    $.ajax({
        method: 'post',
        url: '/quotes',
        data:{
            quote: quote,
            author: author
        }
    }).then(function(response){
        console.log('response', response);
        
    }).catch(function(error){
        alert(error);
    });
};


function getRandomQuote() {
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    })
};

function appendToDom(dataToAppend) {
    $('#output').append(`
        <p>${dataToAppend.quote}</p><i>from: ${dataToAppend.author}</i>
    `)
}
console.log("hello from JS");