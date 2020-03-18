document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true
    });
});
$(document).ready(function() {

    $("#searchBtn").on("click", function() {
        event.preventDefault();

        var stock = $("#searchStock").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=${stock}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "ce81aca087msh56dfbd45fc61707p19827bjsnb24f7ca049eb"
            }
        };

        $.ajax(settings).done(function(response) {
            console.log(response);

            // $("#news").empty();
            // $("#news").append(`<h1>Stock Headlines</h1>`);
            // $("#news").append(`</br>`);

            // for (var i = 0; i < response.items.result.length; i++) {
            for (var i = 0; i < 4; i++) {
                $(`#${i}`).html(`
                    <h2>${ response.items.result[i].title}</h2>
                    <p>Published by: ${ response.items.result[i].publisher} </p>
                    <p> ${response.items.result[i].summary} </p>
                `)    
            //     $("#news").append(`
            //         <a href=${response.items.result[i].link}>
            //             <h2>${response.items.result[i].title}</h2>
            //         </a>`);
            //     $("#news").append(`<p>Published by: ${ response.items.result[i].publisher} </p>`);
            //     $("#news").append(`<p> ${response.items.result[i].summary} </p>`);
            //     $("#news").append(`</br>`);
            };
        });

    });
});
