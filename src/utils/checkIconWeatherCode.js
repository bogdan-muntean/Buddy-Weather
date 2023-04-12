const checkIconWeatherCode = (code, day) => {
    //night va fi bool, 1 = day, 0 = night
    if(day){
        day = "day";
    } else {
        day = "night";
    }
    //voi returna obiect cu properties pe care le folosesc in UI in acel moment.
    let icon, description;
    switch(code){
        case 0:
            description = "Clear sky";
            icon = "Clear-clear_sky";
        break;
        case 1:
            description = "Mainly clear";
            icon = "Clouds-few_clouds";
        break;
        case 2:
            description = "Partly cloudy";
            icon = "Clouds-scattered_clouds";
        break;
        case 3:
            description = "Overcast";
            icon = "Clouds-broken_clouds";
        break;
        case 45:
            description = "Fog";
            icon = "Atmosphere-fog";
        break;
        case 48:
            description = "Depositing Rime Fog";
            icon = "Atmosphere-fog";
        break;
        case 51:
            description = "Light Drizzle";
            icon = "Rain-light_intensity_shower_rain";
        break;
        case 53:
            description = "Moderate Drizzle";
            icon = "Rain-shower_rain";
        break;
        case 55:
            description = "Dense intensity Drizzle";
            icon = "Rain-heavy_intensity_shower_rain";
        break;
        case 56:
            description = "Light Freezing Drizzle";
            icon = "Snow-light_shower_sleet";
        break;
        case 57:
            description = "Dense intensity Freezing Drizzle";
            icon = "Snow-shower_sleet";
        break;
        case 61:
            description = "Light Rain";
            icon = "Rain-light_rain";
        break;
        case 63:
            description = "Moderate Rain";
            icon = "Rain-moderate_rain";
        break;
        case 65:
            description = "Heavy intensity Rain";
            icon = "Rain-extreme_rain";
        break;
        case 66:
            description = "Light Freezing Rain";
            icon = "Snow-light_rain_and_snow";
        break;
        case 67:
            description = "Heavy intensity Freezing Rain";
            icon = "Snow-rain_and_snow";
        break;
        case 71:
            description = "Light Snow";
            icon = "Snow-light_snow";
        break;
        case 73:
            description = "Moderate Snow";
            icon = "Snow-snow";
        break;
        case 75:
            description = "Heavy Intensity Snow";
            icon = "Snow-heavy_snow";
        break;
        case 77:
            description = "Snow grains";
            icon = "Snow-heavy_snow";
        break;
        case 80:
            description = "Light Rain showers";
            icon = "Rain-light_intensity_shower_rain";
        break;
        case 81:
            description = "Moderate Rain Showers";
            icon = "Rain-shower_rain";
        break;
        case 82:
            description = "Violent Rain Showers";
            icon = "Rain-heavy_intensity_shower_rain";
        break;
        case 85:
            description = "Light Snow";
            icon = "Snow-light_shower_snow";
        break;
        case 86:
            description = "Heavy Snow";
            icon = "Snow-heavy_shower_snow";
        break;
        case 95:
            description = "Thunderstorm moderate";
            icon = "Thunderstorm-thunderstorm";
        break;
        case 96:
            description = "Light Thunderstorm";
            icon = "Thunderstorm-light_thunderstorm";
        break;
        case 99:
            description = "Heavy Thunderstorm";
            icon = "Thunderstorm-heavy_thunderstorm";
        break;
    }

    return {
        description,
        icon,
        day
    }
}

export default checkIconWeatherCode