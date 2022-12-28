const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '23125d53e1msh3e7b51b869661dep19a61cjsne67f2c7342cf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getwether = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getwether(city.value)
})

getwether("Jaipur")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct1.innerHTML = response.cloud_pct
        feels_like1.innerHTML = response.feels_like
        humidity1.innerHTML = response.humidity
        max_temp1.innerHTML = response.max_temp
        min_temp1.innerHTML = response.min_temp
        sunrise1.innerHTML = response.sunrise
        sunset1.innerHTML = response.sunset
        temp1.innerHTML = response.temp
        wind_speed1.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct2.innerHTML = response.cloud_pct
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        max_temp2.innerHTML = response.max_temp
        min_temp2.innerHTML = response.min_temp
        sunrise2.innerHTML = response.sunrise
        sunset2.innerHTML = response.sunset
        temp2.innerHTML = response.temp
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct3.innerHTML = response.cloud_pct
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
        temp3.innerHTML = response.temp
        wind_speed3.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Himachal pradesh', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct4.innerHTML = response.cloud_pct
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
        temp4.innerHTML = response.temp
        wind_speed4.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
