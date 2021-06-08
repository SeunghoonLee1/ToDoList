const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "13932c96e3a45b7faab8608c876dd489";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).
    then(function(response){
        return response.json();
    }).then(function(json){
        const temperature =  json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;  
    });
    //'then' calls the function once data is completed
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);    //calling API
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords); 
        getWeather(parseCoords.latitude, parseCoords.longitude);
        //getWeather
    }
}

function init(){
    loadCoords();
}


init();