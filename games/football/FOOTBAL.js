
//פטצ לAPI של  כדורגל קבוצות אנגליות
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
//             rows.innerHTML += `<div class="col">
//             <div class="card h-100">
//             <img src="${img}" style="width:150px; heigth:150px">    <div class="card-body">
//                 <h5 class="card-title">brand: ${element.brand} </h5>
//                 <p class="card-text">
//                     price: ${element.price} ;<br>
//                     isAvailable: ${element.isAvailable} ;<br>
//                     createdAt: ${element.createAt} ;<br>
//                     color:  ${element.color} ;<br>
//                     ram:  ${element.ram};<br>
//                 </p>
//                 <button id="del_btn" onclick="deletObject(id)">dellete</button>
//             </div>
//             </div>`           
//         });
    
//     })
// 	.catch(err => console.error(err));


// async function getUsersApi() {
//     try {
//       const result= await fetch(`https://www.balldontlie.io/api/v1/stats`)
//     return result.json()    
    
//     }  
//     catch (err) {
//         alert("sory we got error")
//     }
//     finally { }
// }getUsersApi().then(res => console.log(res))


// const tablebody = document.getElementById("users_data");
// function usersTable() {
//     getUsersApi()
//         .then(result => {
//             result.forEach(item => {
//                 tablebody.innerHTML +=
//                     `
//                 <tr>
//                 <td>${item.hometeam}</td>
//                 <td>${item.position}</td>
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
// getDevice(){


// fetch('https://www.scorebat.com/video-api/v3/competition/england-premier-league/?token=[MjIxMjdfMTY1OTI2NDU3Ml9iMDNmYjEyMjExYWQ2ODJhMjYxNGE1OTY1MjExNzY2ZjUwODExZjBk]', {
// 	method: 'GET'
// })
// 	.then(response => response.json())
// 	.then(response => {console.log(response)
//         response.forEach(element => {
//             tablebody.innerHTML +=
//             `
//         <tr>
//         <td>${item.age}</td>
//         <td>${item.name.first}</td>
//         <td>${item.name.last}</td>
//         <td>${item.Email}</td>
//         <td>${item.index}</td>
//         <td>${item.phone}</td>
//         <td>${item.picture}</td>
//         </tr>
//         `
//         });
    
//     })
// 	.catch(err => console.error(err));
//     getDevice()
//הדפסה עובדת לא לגעת//
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f796468705mshddf9e77b289c879p19912ejsnb8e72d617c02',
// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
// 	}
// };

//     async function footbalArticals(){
//         let counter = 0
        
//         try{
//             return await fetch('https://livescore6.p.rapidapi.com/news/v2/list', options)
//             .then(res=>res.json())
//             .then(result=>{
//                 for(let key in result.topStories){
//                     if(counter<3){
//                         console.log(result.topStories[counter].mainMedia.gallery.url)
//                         console.log(result.topStories[counter].mainMedia.gallery.alt)
//                         document.getElementById("newsFootball").innerHTML+= `    <div class="col-md-4 mb-5">
//                         <div class="card p-3" style="width: 18rem;">
//                             <img src="${result.topStories[counter].mainMedia.gallery.url}" alt="" class="card-img-top shadow bg-white rounded">
//                             <div class="card-body">
//                                 <h5 class="card-title">${result.topStories[counter].title}</h5>
//                                 <p class="card-text">${result.topStories[counter].mainMedia.gallery.alt}</p>
//                                 <p class="card-text"><small class="text-muted">${result.topStories[counter].publishedAt}</small></p>
//                             </div>
//                         </div>
//                     </div>
//                     </div>`
//                     }
//                     counter++
//                 }
//             })
//         }
//         catch(err){}
//         finally{}
//     }
//     footbalArticals()


const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
};
async function footbalArticals() {
let counter = 0
const footBallArray = ["chellwiil-sportnews.jpg","joshuakimich-sportnews.jpg","westbornvs watford.jpeg","leroy-sane_byrenmunic.jpg","hendersondemands.sportnews.jpg","jorjiniho.jpg","tothenam-sportnews.jpg","newcastel-news.jpg","barcawomen-star-sportnews.jpg"]
try {
    return await fetch('https://livescore6.p.rapidapi.com/news/v2/list', options2)
        .then(res => res.json())
        .then(result => {
            for (let key in result.topStories) {
                if (counter < 9) {
                    console.log(result.topStories[counter].mainMedia.gallery.url)
                    console.log(result.topStories[counter].mainMedia.gallery.alt)
                    document.getElementById("fooballPage").innerHTML += ` <div class="card">
                    <img src="./photos/${footBallArray[counter]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${result.topStories[key].title}</h5>
            <p class="card-text">${result.topStories[key].mainMedia.gallery.alt}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">${result.topStories[key].publishedAt}</small>
        </div>
</div> `
                }
                counter++
            }
        })
}
catch (err) { }
finally { }
}
footbalArticals()

