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