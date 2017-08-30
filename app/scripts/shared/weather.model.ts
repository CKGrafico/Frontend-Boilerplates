interface WeatherAstronomy { 
    sunrise: string; 
    sunset: string;
}

export interface WeatherForecast {
    date: Date;
    high: number;
    low: number;
    text: string;
}

interface WeatherItem {
    forecast: WeatherForecast[];
}

export interface Weather {
    astronomy?: WeatherAstronomy;
    item?: WeatherItem;
}