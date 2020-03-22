document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});
$(document).ready(function() {

    $(".search-button").on("submit", function() {
        event.preventDefault();

        var stock = $("#searchStock").val();

        //for stock detail summary
        var settingsSumm = {
            "async": true,
            "crossDomain": true,
            "url": `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=${stock}`,
            "method": "GET",
            "headers": {
                // DISABLED TO AVOID GOING OVER LIMIT
                // "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                // "x-rapidapi-key": "376342ab4cmsh4d978446e46bd45p1c3fccjsn474152d15e96"
            }
        }
        
        // for stock summary
        $.ajax(settingsSumm).done(function (responseSumm) {
            console.log(responseSumm);
            $(`#symbolDiv`).html(`
                <p class="center-align">
                    <b><span id="symbol">${responseSumm.symbol}</span></b>
                </p>
            `)
            $(`#countryDiv`).html(`
                <p class="center-align">
                    <span class="label"><b>Country:</b></span>
                    </br>
                    <span id="country">${responseSumm.assetProfile.country}</span>
                </p>
            `)
            $(`#industryDiv`).html(`
                <p class="center-align">
                    <span class="label"><b>Industry:</b></span>
                    </br>
                    <span id="country">${responseSumm.assetProfile.industry}</span>
                </p>
            `)
        });


        //for stock news headlines
        var settingsNews = {
            "async": true,
            "crossDomain": true,
            "url": `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=${stock}`,
            "method": "GET",
            "headers": {
                // DISABLED TO AVOID GOING OVER LIMIT
                // "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                // "x-rapidapi-key": "376342ab4cmsh4d978446e46bd45p1c3fccjsn474152d15e96"
            }
        };

        $.ajax(settingsNews).done(function(responseNews) {
            console.log(responseNews);

            for (var i = 0; i < 4; i++) {
                $(`#${i}`).html(`
                    <a href=${responseNews.items.result[i].link}>
                        <h2 class="newsTitle">${responseNews.items.result[i].title}</h2>
                    </a>
                    <p class="newsStory left-align"> ${responseNews.items.result[i].summary} </p>
                `)    
            };
        });
    });
});
