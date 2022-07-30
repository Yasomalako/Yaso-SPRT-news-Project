async function getGames() {
    let img = ["/imgs/shopping iphone cards.png"]
//     try {

//         let resulte = await fetch(`https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso`, {
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
//                     Away team: ${element.away_team} ;<br>
//                     Home team: ${element.home_team} ;<br>
//                     Category: ${element.Soprt_key} ;<br>
//                 </p>
//                 <button id="del_btn" onclick="deletObject(id)">dellete</button>
//              </div>
//              </div>`
//         }
//     }
//     catch (err) { }
//     finally { }



// }
// getGames()