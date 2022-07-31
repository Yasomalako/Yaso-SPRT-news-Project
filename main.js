// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
// 		'X-RapidAPI-Host': 'spotify-tracks.p.rapidapi.com'
// 	},
// 	body: '{"tracks":{"Green day":"Basket Case","Three days grace ":"Animal i have become","Judas priest":"breaking the law","The killers":"Mr brightside","Pantera":"Cemetery Gates","Depeche mode":"Personal Jesus","Iron Maiden":"The Trooper","Slipknot":"Psychosocial","Marilyn Manson":"Sweet Dreams","ZZ Top":"La Grange","Linkin Park":"In The End","Scorpions":"No One Like You"},"n":20}'
// };

// fetch('https://spotify-tracks.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// async function cardPrinter() {
//     try {
//         await fetch(url).then(res => res.json())
//     }
//     catch (err) {
//         console.log(err);
//     }
//     finally { }
// }

// cardPrinter()
// async function getDevice() {
//     let img = ["/imgs/shopping iphone cards.png"]
//     try {

//         let resulte = await fetch(`https://odds.p.rapidapi.com/v4/sports?all=true`, {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
//                 'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//             }
//         }
//         )
//             .then(res => res.json())
//         for (let element in resulte) {

//             console.log(resulte);
//             rows.innerHTML += `<div class="col">
//             <div class="card h-100">
//             <img src="${img}" style="width:150px; heigth:150px">    <div class="card-body">
//                 <h5 class="card-title">Title: ${element.title} </h5>
//                 <p class="card-text">
//                     League: ${element.description} ;<br>
//                     Group: ${element.group} ;<br>
//                 </p>
//                 <button id="del_btn" onclick="deletObject(id)">dellete</button>
//              </div>
//              </div>`
//         }
//     }
//     catch (err) { }
//     finally { }



// }
// getDevice()
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
// 		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
// 	}
// };

// fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
// 	.then(response => response.json())
// 	.then(response => {console.log(response)
//         response.forEach(element => {
//             console.log(element);            
//         });
    
//     })
// 	.catch(err => console.error(err));


///כרטיס של מזג האוייר
let weather = {
    apiKey: "b89e3d3d0f065b9a6e90d11da9ef3714",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");