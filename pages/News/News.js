
// כדורגלעובדת לא לגעת//
const options2 = {
    	method: 'GET',
    	headers: {
            'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };
async function footbalArticals() {
    let counter = 0
const footBallArray = ["chellwiil-sportnews.jpg","joshuakimich-sportnews.jpg","westbornvs watford.jpeg"]
    try {
        return await fetch('https://livescore6.p.rapidapi.com/news/v2/list', options2)
            .then(res => res.json())
            .then(result => {
                for (let key in result.topStories) {
                    if (counter < 3) {
                        console.log(result.topStories[counter].mainMedia.gallery.url)
                        console.log(result.topStories[counter].mainMedia.gallery.alt)
                        document.getElementById("footNews").innerHTML += ` <div class="card">
                        <img src="../../photos/${footBallArray[counter]}" style="width:300px;" class="card-img-top" alt="...">
        
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

// כדורסל 
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
        'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
    }
};
const newText = ["No new deal has been agreed upon yet however sources said", "It is common knowledge around the NBA that the Los Angeles Lakers have been trying to trade Russell", "Over the last several months, there has been plenty of concern about whether LeBron James will stay with the Los Angeles Lakers beyond the 2022-23 season."]
const photosGalerry = ["lebron_sportNews.jpg","tradeSportnne.jpg","leebrontrade.jpg"]
async function basketArticals() {
    let counter = 0
    try {
        return await fetch('https://nba-latest-news.p.rapidapi.com/news/team/lakers', options)
            .then(res => res.json())
            .then(result => {
                for (let key in result) {
                    if (counter < 3) {
                    // console.log(result)
                    console.log(result)
                    document.getElementById("basketNews").innerHTML += ` 
                        <div class="card">
                        <img src="../../photos/${photosGalerry[counter]}" style="width:300px;" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">${result[key].title}</h5>
                                <p class="card-text">${newText[counter]}</p>
                                
                            </div>
                            <div class="card-footer">
                            <p class="card-text"><a href="${result[key].url}"><button class="bg-primary mb-5 fs-5 text-white border-white" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">Continue article</button></a></p>
                                <small class="text-muted">${result[key].source}</small>
                            </div>
                        </div>`
                    counter++
                }
            }
            })


    }
    catch (err) { }
    finally { }
}
basketArticals()

