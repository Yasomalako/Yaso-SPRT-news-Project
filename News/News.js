//חדשות כדורגל להדפיס לכרטיסיות צודות יפה להכניס גיף טעינההה
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};

fetch('https://football98.p.rapidapi.com/premierleague/news', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    //טבלה עם נתונים של קבוצות
    const optionsTABLE = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
    };
    
    fetch('https://football98.p.rapidapi.com/premierleague/table', optionsTABLE)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        //תוצאות משחק 
        const optionsRESULT = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fefc172d83msh870ee776f986b49p1b37dcjsn8f6775fd3246',
                'X-RapidAPI-Host': 'football98.p.rapidapi.com'
            }
        };
        
        fetch('https://football98.p.rapidapi.com/premierleague/results', optionsRESULT)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));