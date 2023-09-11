// Remplacez 'VOTRE_CLE_API' par votre clé d'API OpenWeather
let maCle = "2344b7a4e136da4efdeddfc341e67a3a";
// Remplacez 'NOM_DE_LA_VILLE' par le nom de la ville dont vous souhaitez obtenir les données météorologiques
let cityName = "amiens";

// URL de l'API OpenWeather
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${maCle}&q=${cityName}&units=metric&lang=fr`;

// Sélectionnez l'élément HTML où vous souhaitez afficher les données météorologiques
let weatherData = document.getElementById('weather-data');

// Fonction pour récupérer les données météorologiques
function getWeatherData(){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data=>{
            let temperature = data.main.temp;
            let nomVille = data.name;
            weatherData.innerHTML = `La température de ${nomVille} est : ${temperature}°C`;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données météorologiques :',error);
        });
}

// Appelez la fonction pour obtenir les données météorologiques
getWeatherData();