$(document).ready(function () {
    var taco = ["lettuce", "taco shells", "taco", "taco cat", "crazy taco", "taco time", "taco tuesday", "taco bell", "taco dog", "techno taco"];

    $("button").on("click", function (event) {
        event.preventDefault();


        // Grabbing and storing the data-animal property value from the button
        var taco = $(this).attr("data-taco");

        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            taco + "&api_key=eXqnotQ2JPHmZ84RXN92zcNRkXomTCqD&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                // Looping through each result item
                for (var i = 0; i < results.length; i++) {

                    // Creating and storing a div tag
                    var tacoDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    // Creating and storing an image tag
                    var tacoImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item
                    tacoImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and image tag to the animalDiv
                    tacoDiv.append(p);
                    tacoDiv.append(tacoImage);

                    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                    $("#tacoBar").prepend(tacoDiv);
                }
            });





        // function buildTaco() {
        //     for (i = 0; i < taco.length; i++) {
        //         var newArr = taco[i];
        //         var tacoButton = $("<button>" + taco[i] + "</button>");
        //         // tacoButton.addClass("btn btn-primary");
        //         // tacoButton.attr("taco-button", newArr);
        //         // tacoButton.attr("type", "button");
        //         // tacoButton.append(newArr);
        //         $("taco-bar").append(tacoButton);
        //     }

        // };
        // $("#add-tacos").on("click", function (event) {
        //     event.preventDefault();
        //     var newTaco = $("#add-tacos").val().trim();
        //     taco.push(newTaco);
        //     $("#add-tacos").val("");
        //     buildTaco();
        // console.log("This is working");
        // buildTaco();

        // });
        })




    });