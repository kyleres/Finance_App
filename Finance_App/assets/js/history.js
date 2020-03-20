let history = []
let limit = 6
let currentCount = 0
$(document).ready(function(){
    // $(".historyItem").on("click", function() {
    //     console.log('clicked')
        // event.preventDefault();
        // var stockName = $("#searchStock").val();
        // history.unshift(stockName)
        // $("#searchHistory").html("")
        // for(var i = 0; i < limit; i++){
        //     if(history.length == i){
        //         break;
        //     }
        //     $("#searchHistory").append(`<div class = "col s6 historyItem" id = "${history[i]}">${history[i]}</div>`)
        // }
    // })
})
function historyItemClick(){
    $(".historyItem").on("click", function() {
        let clickVal = $(this).attr('id')
        $('#searchStock').val(clickVal).submit()
    })
}
