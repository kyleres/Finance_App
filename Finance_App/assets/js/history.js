let history = []
$(document).ready(function(){
    let limit = 6
    let currentCount = 0
    $(".search-button").on("submit", function() {
        event.preventDefault();
        var stockName = $("#searchStock").val();
        // history.unshift(stockName)
        $("#searchHistory").html("")
        for(var i = 0; i < limit; i++){
            if(history.length == i){
                break;
            }
            $("#searchHistory").append(`<div class = "col s6 historyItem" id = "${history[i]}">${history[i]}</div>`)
        }
    })
})