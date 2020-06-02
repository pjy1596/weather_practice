const weather = new Weather("Edmonton", "CA");
const ui = new UI();

document.addEventListener("DOMContentLoaded", showWeather);
function showWeather() {
  weather
    .getWeather()
    .then((res) => ui.paint(res))
    .catch((err) => console.log(err));
}
