const WeatherIcon=({condition})=>{
    let iconSrc;
    switch (condition) {
        case "Thunderstorm":
            iconSrc="src/assets/Thunderstorm.png"
            break;
        case "Drizzle":
            iconSrc="src/assets/Drizzle.png"
            break;
        case "Rain":
            iconSrc="src/assets/Rain.png"
            break;
        case "Snow":
            iconSrc="src/assets/Snow.png"
            break;
        case "Clear":
            iconSrc="src/assets/Clear.png"
            break;
        case "Clouds":
            iconSrc="src/assets/Clouds.png"
            break;
        default:
            iconSrc="src/assets/others.png"
            break;
    }
    return(
        
        <div className="flex justify-center items-center"><img src={iconSrc} alt={condition} className="w-48 h-48" /></div>
    )
}

export default WeatherIcon;