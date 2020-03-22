//history array to store searched stocks. Has a limit of 8 to display
let history = []
let limit = 8
//function to retrive history array from local storage
function init(){
    var retrive = JSON.parse(localStorage.getItem("history"))
    if (retrive !== null){
        history = retrive
    }
}
//function for on click event to for the history items to look up clicked item
function historyItemClick(){
    $(".historyItem").on("click", function() {
        let clickVal = $(this).attr('id')
        $('#searchStock').val(clickVal).submit()
    })
}
init()
//display history array onto page
for(var i = 0; i < limit; i++){
    if(history.length == i){
        break;
    }
    $("#searchHistory").append(`<div class = "historyItem col s6" id = "${history[i]}">${history[i]}</div>`)
}
historyItemClick()
$(document).ready(function(){
    //event listener to display recommend stock based on what user is typing
    $('.search-button').on('keyup', function(){
        event.preventDefault();
        var options = {
            function: 'SYMBOL_SEARCH',
            keywords: $("#searchStock").val().trim(),
            apikey: 'UFFJ7WKZ66L741SG'
        }
        var queryURL = "https://www.alphavantage.co/query?" + $.param(options);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            let block = ''
            //for loop will display 4 best matches to what user has typed
            for( let i = 0; i < 4; i++){
                block += `<li data-name="${ response['bestMatches'][i]['1. symbol']}">${ response['bestMatches'][i]['2. name']} (${ response['bestMatches'][i]['1. symbol']}) </li>`
            }
            $('#results').html(block)
            //onclick event to grab the users selected stock
            $('li').on('click', function(){
                let searchKey = $(this).attr('data-name')
                $('#searchStock').val(searchKey).submit()
            })
        })
    })
})
