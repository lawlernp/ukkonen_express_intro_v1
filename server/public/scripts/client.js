$(document).ready(onReady)

function onReady(){
    console.log('hi from jq');
    getRandomQuote();
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
        ${dataToAppend.quote}</br><i>from: ${dataToAppend.author}</i>
    `)
}
console.log("hello from JS");