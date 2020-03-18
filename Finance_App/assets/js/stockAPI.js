$(document).ready(function(){
    let data = []
      $("#searchBtn").on("click", function() {
        event.preventDefault();
        let stock = $("#searchStock").val();
        let queryURL = `https://sandbox.iexapis.com/stable/stock/${stock}/chart/1m?token=Tpk_fdd55ae4ce7241a583109376b956b80f`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)

            for ( let i = 0; i < response.length; i++){
                data.push({
                    x: response[0].label,
                    y: response[i].close
                })
            }
            console.log(data)

        })

      })
})
