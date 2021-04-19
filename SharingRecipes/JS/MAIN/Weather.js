const weather = document.querySelector("#js-weather");
const weather1 = document.querySelector("#js-weather1");
const weather2 = document.querySelector("#js-weather2");
const API_KEY = "c13f40978e5aeaf76792cac87a6b3de6";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;

        let icon = null
        switch (json.weather[0].main) {

            case 'Clear': 
                icon = '<i class="fas fa-sun"></i>'
            break;

            case 'Clouds': 
                icon ='<i class="fas fa-cloud"></i>'
            break;

            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                icon = '<i class="fas fa-smog"></i>'
            break;

            case 'Snow':
                icon = '<i class="fas fa-snowflake"></i>'
            break;

            case 'Rain':
                icon = '<i class="fas fa-cloud-showers-heavy"></i>'
            break;

            case 'Drizzle':
                icon = '<i class="fas fa-cloud-rain"></i>'
            break;

            case 'Thunderstorm':
                icon = '<i class="fas fa-bolt"></i><i class="fas fa-cloud-showers-heavy"></i>'
            break;

            default:
            break;
        };

        weather1.innerHTML = `${icon}`;
        weather2.innerHTML = `${json.weather[0].description}`;
        weather.innerHTML = `${temperature}℃ , ${place}`;
        console.log(json)
    })
};

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

function handleGeoSuccess(position){
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
};

function handleGeoError(){
    weather.textContent = `정보를 받아올 수 없습니다.`;
};

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); 
    /* 로컬 스토리지에 coords라는 이름으로 저장 */
    if(loadedCoords === null){
        askForCoords();
    } 
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);   
    }
};

function init(){
loadCoords();
}

init();