$(document).ready(function () {

    var owKey = "617174b2d02db17f395c4094274d17ed";

    $("#mainForm").submit(function (e) { 
        e.preventDefault();

        var city = document.getElementById("cityField");
        var owCity = city.value;
        var owUrl = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + owCity + "&units=imperial&appid=" + owKey;

        // localStorage.setItem("searchHistory", owCity);

        console.log(owUrl)

        $.ajax({
            type: "GET",
            url: owUrl,
            success: function (response) {
                console.log(response);
                weatherNow(response);
                weatherFive(response);
            }
        })

        function searchBoi() {
            // $("#buttonField").prepend("<a class=\'button is-white\'>" + cityName + "</a>");
            var historyButtons = $("#buttonField");
            var a = $("<a>")
            a.text(owCity)
            a.addClass("button is-white")
            historyButtons.prepend(a);
        };

        searchBoi();

        // Current Weather Function including Classed Element appends 
        function weatherNow(response) {
            var a = $("<h1>")
            a.text(response.city.name);
            $("#weatherNow").append(a);
            $(a).addClass("is-size-3 has-text-centered");

            var b = $("<h1>")
            b.text(Math.floor(response.list[0].main.temp) + "°f");
            $("#weatherNow").append(b);
            $(b).addClass("is-size-4 has-text-centered");
            
            var c = $("<img>")
            var cImg = response.list[0].weather[0].icon
            c.attr("src", `http://openweathermap.org/img/w/${cImg}.png`);;
            $("#weatherIcon").append(c);
            $(c).addClass("is-centered is-capitalized");

            var d = $("<h1>")
            d.text(response.list[0].weather[0].description);
            $("#weatherNow").append(d);
            $(d).addClass("has-text-centered is-capitalized");

            var e = $("<h1>")
            e.text(response.list[0].main.humidity + "% Humidity");
            $("#weatherNow").append(e);
            $(e).addClass("has-text-centered");
        }

        // function weatherFive (response) {
        //     for (i = 0; i < 40; i + 5) {
        //         var a = $("<h1>")
        //         a.text(response.city.name);
        //         $("#weatherNow").append(a);
        //         $(a).addClass("is-size-3 has-text-centered");

        //         var b = $("<h1>")
        //         b.text(Math.floor(response.list[i].main.temp) + "°f");
        //         $("#weatherNow").append(b);
        //         $(b).addClass("is-size-4 has-text-centered");
                
        //         var c = $("<img>")
        //         var cImg = response.list[i].weather[0].icon
        //         c.attr("src", `http://openweathermap.org/img/w/${cImg}.png`);;
        //         $("#weatherIcon").append(c);
        //         $(c).addClass("is-centered is-capitalized");

        //         var d = $("<h1>")
        //         d.text(response.list[i].weather[0].description);
        //         $("#weatherNow").append(d);
        //         $(d).addClass("has-text-centered is-capitalized");

        //         var e = $("<h1>")
        //         e.text(response.list[i].main.humidity + "% Humidity");
        //         $("#weatherNow").append(e);
        //         $(e).addClass("has-text-centered");
        //     }
        // }
    });


    $("#clearBtn").click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        console.log("localStorage cleared")        
    });



});