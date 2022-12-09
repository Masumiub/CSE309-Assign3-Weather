// JavaScript source code
console.log("Hello weather");
$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=22.341900&lon=91.815536&units=imperial&appid=e94ca0be26609f28422f7a878294760a",
    function (data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/50d.png";
        var temp = data.main.temp;
        var weather = data.weather[0].main;
        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
    }
);