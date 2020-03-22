$(document).ready(function(){
    //var labels and data are used for chart js to draw line chart
    let labels = []
    let data = []
    //on submit event to get data from IEX cloud to show on line chart
      $(".search-button").on("submit", function() {
        event.preventDefault();
        let stock = $("#searchStock").val();
        let queryURL = `https://sandbox.iexapis.com/stable/stock/${stock}/chart/1m?token=Tpk_fdd55ae4ce7241a583109376b956b80f`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            //if statement to check if searched stock has already been searched. If it has it will not add stock to history array
            if (!history.includes(stock)){
                history.unshift(stock)
                localStorage.setItem("history", JSON.stringify(history));
                console.log(localStorage.getItem("history"))
            }
            //clear searchHistory array and display latest history array
            $("#searchHistory").html("")
            for(var i = 0; i < limit; i++){
                if(history.length == i){
                    break;
                }
                $("#searchHistory").append(`<div class = "historyItem col s6" id = "${history[i]}">${history[i]}</div>`)
            }
            //with the respone from ajax, get the date and add it to labels array and get stock price and add it to data array
            for ( let i = 0; i < response.length; i++){
                labels.push(response[i].label)
                data.push(response[i].close)
            }
            //create line graph with data retrieved from ajax call
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
