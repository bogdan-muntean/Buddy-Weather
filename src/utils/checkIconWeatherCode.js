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
            description = "Depositing rime fog";
            icon = "Atmosphere-fog";
        break;
        case 51:
            description = "Drizzle light";
            icon = "Rain-light_intensity_shower_rain";
        break;
        case 53:
            description = "Drizzle moderate";
            icon = "Rain-shower_rain";
        break;
        case 55:
            description = "Drizzle dense intensity";
            icon = "Rain-heavy_intensity_shower_rain";
        break;
        case 56:
            description = "Freezing Drizzle light ";
            icon = "Snow-light_shower_sleet";
        break;
        case 57:
            description = "Freezing Drizzle dense intensity";
            icon = "Snow-shower_sleet";
        break;
        case 61:
            description = "Rain slight";
            icon = "Rain-light_rain";
        break;
        case 63:
            description = "Rain moderate ";
            icon = "Rain-moderate_rain";
        break;
        case 65:
            description = "Rain heavy intensity";
            icon = "Rain-extreme_rain";
        break;
        case 66:
            description = "Freezing Rain light ";
            icon = "Snow-light_rain_and_snow";
        break;
        case 67:
            description = "Freezing Rain heavy intensity";
            icon = "Snow-rain_and_snow";
        break;
        case 71:
            description = "Snow fall slight";
            icon = "Snow-light_snow";
        break;
        case 73:
            description = "Snow fall moderate";
            icon = "Snow-snow";
        break;
        case 75:
            description = "Snow fall heavy intensity";
            icon = "Snow-heavy_snow";
        break;
        case 77:
            description = "Snow grains";
            icon = "Snow-heavy_snow";
        break;
        case 80:
            description = "Rain showers slight";
            icon = "Rain-light_intensity_shower_rain";
        break;
        case 81:
            description = "Rain showers moderate";
            icon = "Rain-shower_rain";
        break;
        case 82:
            description = "Rain showers violent";
            icon = "Rain-heavy_intensity_shower_rain";
        break;
        case 85:
            description = "Snow showers slight ";
            icon = "Snow-light_shower_snow";
        break;
        case 86:
            description = "Snow showers heavy";
            icon = "Snow-heavy_shower_snow";
        break;
        case 95:
            description = "Thunderstorm slight or moderate";
            icon = "Thunderstorm-thunderstorm";
        break;
        case 96:
            description = "Thunderstorm slight ";
            icon = "Thunderstorm-light_thunderstorm";
        break;
        case 99:
            description = "Thunderstorm heavy hail";
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