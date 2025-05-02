async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "6f5cba513d7c6efde08b7ee4a805bd0c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].main;
    const humidity = data.main.humidity;

    document.getElementById("result").innerHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${weather}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}