
//  function getUsersApi() {
//     try {
//       const result= await fetch(users)
//     return result.json()    

//     }  
//     catch (err) {
//         alert("sory we got error")
//     }
//     finally { }
// }getUsersApi().then(res => {for(let key in res){
//     tablebody.innerHTML += `<tr>
//     <td>${item.hometeame}</td>
//     <td>${item.hometeame}</td>
//     <td>${item.hometeame}</td>
//     <td>${item.hometeame}</td>
//     <td>${item.hometeame}</td>
//     <td>${item.hometeame}</td>
//     </tr>`

// }})
// getUsersApi



const tablebody = document.getElementById("nba_players_data");


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
//         'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//     }
// };
// async function nbaFun() {
//     try {
//         fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3', options)
//             .then(response => response.json())
//             .then(response=>response.forEach(element => {
//                 console.log(response)
//             }))
//     }
//     catch(err){}
//     finally{}
// }
// nbaFun()



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
		'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
	}
};

fetch('https://nba-latest-news.p.rapidapi.com/news/team/lakers', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
                    // tablebody.innerHTML += `<tr>
                    //     <td>${item.hometeame}</td>
                    //     <td>${item.hometeame}</td>
                    //     <td>${item.hometeame}</td>
                    //     <td>${item.hometeame}</td>
                    //     <td>${item.hometeame}</td>
                    //     <td>${item.hometeame}</td>
                    //     </tr>`

                    // }