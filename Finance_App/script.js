// $('#submit').click(function() {


// $(document).ready(function(){
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=MSFT",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//             "x-rapidapi-key": "ce81aca087msh56dfbd45fc61707p19827bjsnb24f7ca049eb"
//         }
//     }
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//         for (var i = 0; i < response.items.result.length; i++) {
//             $("#news").append(`<h1> ${response.items.result[i].title} </h1>`)
//             $("#news").append(`<p>Published by: ${ response.items.result[i].publisher} </p>`)
//             $("#news").append(`<p> ${response.items.result[i].summary} </p>`)
//             $("#news").append(`<p>Link: ${response.items.result[i].link} </p>`)
//             $("#news").append(`</br>`)
//         }
//     });
//  });
// });