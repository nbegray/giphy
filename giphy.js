$(document).ready(function () {
    //=====Array======//
    var taco = ["street taco", "taco bell", "del taco", "crunchy taco", "soft taco", "taco tuesday", "taco time", "chicken taco", "taco cat", "taco llama"];

    // ==== adds event listener to entire page ====//
    $(document).on("click", "#taco-button", function () {

        

        // checked if html and js were linked - it worked!//
        console.log(taco);
    });
    //tells application where to find the gif images for the application

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        taco + "&api_key=eXqnotQ2JPHmZ84RXN92zcNRkXomTCqD&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // known as an anonymous call back function 
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var tacoDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var tacoImage = $("<img>");
                tacoImage.attr("src", results[i].images.fixed_height.url);

                tacoDiv.prepend(p);
                tacoDiv.prepend(tacoImage);
                $("#tacos-here").prepend(tacoDiv);

            }
        });

});




