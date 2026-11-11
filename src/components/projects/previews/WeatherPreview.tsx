'use client';

import React, { useState } from 'react';
import { CloudRain } from 'lucide-react';

type CityKey = 'San Francisco' | 'Tokyo' | 'London';

interface CityWeather {
  temp: string;
  condition: string;
  aqi: number;
  wind: string;
  pressure: string;
}

const WEATHER_DATA: Record<CityKey, CityWeather> = {
  'San Francisco': {
    temp: '64°F',
    condition: 'Partly Cloudy · Humidity 68%',
    aqi: 42,
    wind: '14 mph North Gusts',
    pressure: '1014 hPa'
  },
  'Tokyo': {
    temp: '18°C',
    condition: 'Clear Sky · Humidity 52%',
    aqi: 28,
    wind: '8 km/h South East',
    pressure: '1018 hPa'
  },
  'London': {
    temp: '14°C',
    condition: 'Overcast · Light Drizzle 85%',
    aqi: 35,
    wind: '18 km/h West',
    pressure: '1009 hPa'
  }
};

export const WeatherPreview: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityKey>('San Francisco');
  const weather = WEATHER_DATA[selectedCity];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <CloudRain className="w-5 h-5 text-[#57D6C5]" />
          <span className="font-bold text-white">WeatherFlow Radar</span>
        </div>

        {/* City Selector */}
        <div className="flex items-center gap-1 bg-[#171C26] p-1 rounded-lg">
          {(['San Francisco', 'Tokyo', 'London'] as const).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`text-xs px-3 py-1 rounded-md transition-colors ${
                selectedCity === city
                  ? 'bg-[#059669] text-white font-semibold'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
          <span className="text-xs text-[#A1A1AA]">Current Temp</span>
          <div className="text-4xl font-extrabold text-white">
            {weather.temp}
          </div>
          <span className="text-xs text-[#57D6C5]">{weather.condition}</span>
        </div>
        <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
          <span className="text-xs text-[#A1A1AA]">Air Quality Index</span>
          <div className="text-4xl font-extrabold text-emerald-400">
            {weather.aqi}
          </div>
          <span className="text-xs text-[#A1A1AA]">Good · Micro-sensors active</span>
        </div>
        <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
          <span className="text-xs text-[#A1A1AA]">Wind Radar</span>
          <div className="text-4xl font-extrabold text-[#10B981]">
            {weather.wind}
          </div>
          <span className="text-xs text-[#A1A1AA]">{weather.pressure}</span>
        </div>
      </div>
    </div>
  );
};
