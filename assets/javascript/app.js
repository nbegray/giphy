$(document).ready(function () {

    var gifs = ["kittens", "dogs"];
    // kittens === gifs[0]
    // dogs === gifs[1]
    renderBtns();

    $("#add-tacos").on("click", function (e) {
        e.preventDefault();
        
        var btnTxt = $("#text-box").val().trim();
        gifs.push(btnTxt);
        
        // var $btn = $("<button>"); // <button></button>
        // $btn.text(btnTxt); // <button>kittens</button>
        // $("#gif-buttons").append($btn);
        renderBtns();
        $("#text-box").val("");
    })

    function renderBtns() {
        $("#gif-buttons").empty();
        for (var i = 0; i < gifs.length; i++) {
            var $btn = $("<button>"); // <button></button>
            $btn.addClass('taco');
            $btn.addClass("btn btn-outline-dark");
            $btn.text(gifs[i]); // <button>kittens</button>
            $("#gif-buttons").append($btn);
        }
    }

});



$(document).on('click', '.taco', function(){
    var tacoName = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    tacoName + "&api_key=eXqnotQ2JPHmZ84RXN92zcNRkXomTCqD&limit=10";
    $('#content').empty();
    $.get(queryURL, function(response){
       
        for(var i =0; i < response.data.length; i++){
            console.log(response.data[i])
           var gif = '<img class="gifs" style="width: 200px; height:200px; margin:10px" src='+ response.data[i].images.original.url+' />'

           $('#content').append(gif);

        }
    })
})

$(document).on('click', '.gifs', function(){
    alert("gifs work")
})

var name = "sally"

function hello() {

    console.log("hello " + name)
}

//hello()


var characters = ["superman", "batman", "robin", "joker"];

characters.push("spider man")

for (var i = 0; i < characters.length; i++) {
    console.log("hello " + characters[i])
}

