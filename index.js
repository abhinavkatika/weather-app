var inputvalue = document.getElementById('cityinput');
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var appid = "95fd58ff44ddd12c3c0143219f1ecfb5";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener("click", function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + appid)
    .then(res => res.json())
    .then(data => {
        var namevalue = data['name'];
        var description = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];
        city.innerHTML = `Weather of <span>${namevalue}</span>`;
        temp.innerHTML = `Temperature : <span> ${convertion(temperature)} C </span>`;
        wind.innerHTML = `Wind Speed : <span>${windspeed} km/hr </span>`;
        descrip.innerHTML = `Sky conditions : <span>${description}</span>`;
    })
    .catch(err => alert("You entered wrong city name"));
});
