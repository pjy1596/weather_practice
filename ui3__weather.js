class UI {
  constructor() {
    this.country = document.getElementById("w-country");
    this.city = document.getElementById("city");
    this.desc = document.getElementById("desc");
    this.img = document.getElementById("img");
    this.humidity = document.getElementById("humidity");
    this.temp = document.getElementById("temp");
    this.feelslike = document.getElementById("feels-like");
    this.wind = document.getElementById("wind");
  }
  paint(info) {
    this.country.textContent = info.sys.country;
    this.city.textContent = info.name;
    this.desc.textContent = info.weather[0].description;
    this.img.setAttribute("src", "info.weather[0].icon");
    this.humidity.textContent = info.main.humidity;
    this.temp.textContent = info.main.temp;
    this.feelslike.textContent = info.main.feels_like;
    this.wind.textContent = info.wind;
  }
}
