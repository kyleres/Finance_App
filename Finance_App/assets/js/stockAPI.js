$(document).ready(function(){
    let labels = []
    let data = []
      $("button").on("click", function() {
        event.preventDefault();
        let stock = $("#searchStock").val();
        let queryURL = `https://sandbox.iexapis.com/stable/stock/${stock}/chart/1m?token=Tpk_fdd55ae4ce7241a583109376b956b80f`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)

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

        })

      })
})
