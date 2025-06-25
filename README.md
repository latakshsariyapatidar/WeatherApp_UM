
# 🌤️ Weather App

A sleek and responsive weather forecast web app built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**, with real-time data fetched from the [WeatherAPI](https://www.weatherapi.com/).

## 🔍 Features

- 🔎 Search weather by city name
- 🌡️ Displays:
  - Temperature (in °C)
  - Weather condition (e.g., Sunny, Rainy)
  - Weather icon
- 📱 Fully responsive for desktop and mobile
- 🖼️ Background image from Unsplash

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (ES6)
- WeatherAPI (for fetching live weather data)

## 📁 File Structure

```
📦 weather-app/
├── index.html        # Main HTML structure
├── style.css         # Custom and Tailwind styling
├── script.js         # JavaScript logic (API call and DOM updates)
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/latakshsariyapatidar/WeatherApp_UM.git
cd weather-app
```

### 2. Open in browser

Just open `index.html` in your preferred browser.

> ⚠️ Due to CORS policy restrictions, direct fetch requests from local files may get blocked. To avoid this:
> - Deploy using GitHub Pages or Vercel

## 🧪 API Key

This project uses the [WeatherAPI](https://www.weatherapi.com/).


> ✅ You can sign up on WeatherAPI to get your own free API key.

## ✨ Screenshots

![Weather UI](https://images.unsplash.com/photo-1583562334499-cbf0b14e9b72?q=80&w=1974&auto=format&fit=crop)

## 📌 Known Issues

- ❌ City names with typos or unrecognized by the API throw an error alert.
- ❗ Weather icons are loaded via external URLs — slow internet may delay them.


> Developed with ❤️ by Lataksh Sariya
