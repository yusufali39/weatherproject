const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  .listen(3000, () => {
    console.log("Srever is running on 3000");
  });

app.post("/", (req, res) => {
    const name = req.body.yourName;
    const query = req.body.cityName;
    const apiKey = "72a19cac68f67bf62ddd1bfafdc05364";
    const units = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid="+ apiKey + "&units=" + units;

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;
        const imageURL = " https://openweathermap.org/img/wn/" + icon + "@2x.png";
        const weatherDescription = weatherData.weather[0].description;

      // Render the appIndex.html with the dynamic data
      const appIndexHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Weather Report</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <p>Hey ${name}</p>
        <p>The weather is currently ${weatherDescription}</p>
        <h1>The temperature in ${query} is ${temp} degrees celsius.</h1>
        <img src="${imageURL}" alt="Weather Icon">
      </body>
      </html>
    `;

    // Send the appIndex.html as the response
    res.send(appIndexHTML);
  });
});
});
