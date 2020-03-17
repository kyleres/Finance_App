$(document).ready(function(){
  
    $('.search-button').on('keyup', function(){
        event.preventDefault();
        var options = {
            function: 'SYMBOL_SEARCH',
            keywords: $("#searchStock").val().trim(),
            apikey: 'UFFJ7WKZ66L741SG'
        }
        console.log(options)
        var queryURL = "https://www.alphavantage.co/query?" + $.param(options);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            let block = ''
            for( let i = 0; i < 4; i++){
                block += `<li data-name="${ response['bestMatches'][i]['1. symbol']}">${ response['bestMatches'][i]['2. name']} (${ response['bestMatches'][i]['1. symbol']}) </li>`
            }
            $('#results').html(block)
            $('li').on('click', function(){
                let searchKey = $(this).attr('data-name')
                $('#searchStock').val(searchKey)
            })
        })
    })
    })
