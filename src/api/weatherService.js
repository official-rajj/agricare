import axios from "axios";

const API_KEY = "843520248abcec172dd7200ccaedb117";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
