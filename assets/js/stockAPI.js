$(document).ready(function(){
    let labels = []
    let data = []
      $(".search-button").on("submit", function() {
        event.preventDefault();
        let stock = $("#searchStock").val();
        if (stock === "") {
            displayMessage("error", "Stock name cannot be blank");
        }
        let queryURL = `https://sandbox.iexapis.com/stable/stock/${stock}/chart/1m?token=Tpk_fdd55ae4ce7241a583109376b956b80f`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            if (!history.includes(stock)){
                history.unshift(stock)
                localStorage.setItem("history", JSON.stringify(history));
                console.log(localStorage.getItem("history"))
            }
            $("#searchHistory").html("")
            for(var i = 0; i < limit; i++){
                if(history.length == i){
                    break;
                }
                $("#searchHistory").append(`<div class = "historyItem col s6" id = "${history[i]}">${history[i]}</div>`)
            }
            for ( let i = 0; i < response.length; i++){
                labels.push(response[i].label)
                data.push(response[i].close)
            }
            var ctx = $('#myChart');
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'StockPrice',
                        data: data
                    }]
                },
                options: {}
            });
            historyItemClick()

        })

      })
})
