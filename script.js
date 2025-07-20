let Btn = document.querySelector(".search-box button");
let weatherData = document.querySelector(".weather-data") 

Btn.addEventListener("click" , async (e)=>{
e.preventDefault()
let city = document.getElementById("city").value;
const apiKey ="cf0f574c5d07dbcd6838021f15c3d1fb"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let res = await fetch(url)
let data = await res.json()

console.log(data)

return showData(data)
})

function showData(d){
    if(d.cod === "404"){
weatherData.innerHTML = `<h2>Not found</h2>`
    }
    else{
        let tem = d.main.temp
    let hum = d.main.humidity
    let win = d.wind.speed
    let sts = d.weather[0].description
     weatherData.innerHTML = `<img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png">
            <h2>${tem} &deg;C</h2>
            <p>${sts}</p>
            <div class="other-data">
                <div class="humidity">
                    <p>${hum} %</p>
                    <h3></h3>
                </div>
                <div class="wind">
                    <p>${win}m/s</p>
                    <h3></h3>
                </div>
            </div>`

    }
     

}