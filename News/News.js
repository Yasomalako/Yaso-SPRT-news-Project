//חדשות כדורגל להדפיס לכרטיסיות צודות יפה להכניס גיף טעינההה
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
// 		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
// 	}
// };

// fetch('https://football98.p.rapidapi.com/premierleague/news', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
//     //טבלה עם נתונים של קבוצות
//     const optionsTABLE = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
//             'X-RapidAPI-Host': 'football98.p.rapidapi.com'
//         }
//     };
    
    // fetch('https://app.sportdataapi.com/api/v1/soccer/leagues', optionsTABLE)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
        //תוצאות משחק 
        // const optionsRESULT = {
        //     method: 'GET',
        //     headers: 
        //         'apikey: d789d810-0fe9-11ed-afaa-5d205f36e140'
            
        // };
        
        // fetch('https://app.sportdataapi.com/api/v1/soccer/leagues', optionsRESULT)
        //     .then(response => response.json())
        //     .then(response => { rows.innerHTML += `<div class="col">
        //     <div class="card h-100">
        //     <img src="${img}" style="width:150px; heigth:150px">    <div class="card-body">
        //         <h5 class="card-title">brand: ${element.brand} </h5>
        //         <p class="card-text">
        //             price: ${element.price} ;<br>
        //             isAvailable: ${element.isAvailable} ;<br>
        //             createdAt: ${element.createAt} ;<br>
        //             color:  ${element.color} ;<br>
        //             ram:  ${element.ram};<br>
        //         </p>
        //         <button id="del_btn" onclick="deletObject(id)">dellete</button>
        //     </div>
        //     </div>`})
        //     .catch(err => console.error(err));



//         let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`
// let users = `https://my-json-server.typicode.com/Jeck99/fake-server/users`

// async function getUsersApi() {
//     try {
//       const result= await fetch(users)
//     return result.json()    
    
//     }  
//     catch (err) {
//         alert("sory we got error")
//     }
//     finally { }
// }getUsersApi().then(res => console.log(res))


// const tablebody = document.getElementById("nba_players_data");
// function usersTable() {
//     getUsersApi()
//         .then(result => {
//             result.forEach(item => {
//                 tablebody.innerHTML +=
//                     `
//                 <tr>
//                 <td>${item.age}</td>
//                 <td>${item.name.first}</td>
//                 <td>${item.name.last}</td>
//                 <td>${item.Email}</td>
//                 <td>${item.index}</td>
//                 <td>${item.phone}</td>
//                 <td>${item.picture}</td>
//                 </tr>
//                 `
//             });
//         })
// }
// usersTable();
// const tablebody = document.getElementById("footbal_players_data");
// function usersTable() {
//     getUsersApi()
//         .then(result => {
//             result.forEach(item => {
//                 tablebody.innerHTML +=
//                     `
//                 <tr>
//                 <td>${item.age}</td>
//                 <td>${item.name.first}</td>
//                 <td>${item.name.last}</td>
//                 <td>${item.Email}</td>
//                 <td>${item.index}</td>
//                 <td>${item.phone}</td>
//                 <td>${item.picture}</td>
//                 </tr>
//                 `
//             });
//         })
// }
// usersTable();
