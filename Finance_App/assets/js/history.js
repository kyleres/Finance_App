$(document).ready(function(){
    let limit = 6
    let currentCount = 0
    var history = []
    $("#searchBtn").on("click", function() {
        event.preventDefault();
        var stockName = $("#searchStock").val();
        history.unshift(stockName)
        $("#searchHistory").html("")
        for(var i = 0; i < limit; i++){
            if(history.length == i){
                break;
            }
            $("#searchHistory").append(`<div class = "col s2" id = "${history[i]}">
            <button>${history[i]}</button></div>`)
        }
    })
})