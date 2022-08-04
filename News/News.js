//חדשות כדורגל להדפיס לכרטיסיות צודות יפה להכניס גיף טעינההה
// const SPORTAPI = ``





// const newscard = document.getElementById("newsCard")
//      fetch( `https://nba-latest-news.p.rapidapi.com/news/team/lakers`,{method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
//             'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
//         }
//      } )
//     .then(res => res.json())
//     .then(data => data.forEach(element => {
//         newscard.innerHTML +=
//         ` <div class="card-body">
// < h5 class="card-title" > ${ element.title }</h5 >
//     <p class="card-text"><small class="text-muted">${element.source}</small></p>
// </div > `
//         }))

// let printerNews = document.getElementById("newsPrint")
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
//         'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
//     }
// };
// async function getNEWSdata() {
//     try {
//         fetch('https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//     }
//     catch (err) {
//         console.log(err)
//     };

// }
// getNEWSdata()

/////33333////
// let users = 'https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1'
// async function  getNEWSdata() {
//     try {
//       return await fetch(users, options).then(result => (result.json())).then(data => console.log(data))    
    
//     }  
//     catch (err) {
//         alert("sory we got error")
//     }
//     finally { }
// }getNEWSdata()


// async function usersTable() {
//     getNEWSdata()
//         .then(result => {
//             for (let i = 0; i < 12; i++) {
//                 printerNews.innerHtml += `  < div class="card-body" >
//                 <h5 class="card-title">${result.topStories[i]}</h5>
//                 <p class="card-text"><small class="text-muted">${result.source}</small></p>
//                 </div > `
//             }})
//         }

// usersTable();

// {
                // for (let i = 0; i < 12; i++) {
                //     printerNews.innerHtml += `  < div class="card-body" >
                //     <h5 class="card-title">${response.topStories[i]}</h5>
                //     <p class="card-text"><small class="text-muted">${element.source}</small></p>
                //     </div > `

