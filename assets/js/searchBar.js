let history = []
let limit = 8
let currentCount = 0
function init(){
    var retrive = JSON.parse(localStorage.getItem("history"))
    if (retrive !== null){
        history = retrive
    }
}
function historyItemClick(){
    $(".historyItem").on("click", function() {
        let clickVal = $(this).attr('id')
        $('#searchStock').val(clickVal).submit()
    })
}
init()
for(var i = 0; i < limit; i++){
    if(history.length == i){
        break;
    }
    $("#searchHistory").append(`<div class = "historyItem col s6" id = "${history[i]}">${history[i]}</div>`)
}
historyItemClick()
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
