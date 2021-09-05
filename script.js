const URL_Server = "https://www.postdirekt.de/plzserver/PlzAjaxServlet?";

async function findCity() {
    let plz = document.getElementById('plz');
    let response = await fetch(URL_Server + "finda=city" + "&" + `city=${plz.value}`);
    let responseAsJson = await response.json();

    let city = document.getElementById('city');
    city.value = responseAsJson['city'];
        
    console.log('response', responseAsJson);
}

async function findStreet(plz) {
    console.log(plz);
    let street = document.getElementById('street');
    let search = street.value.toLowerCase();
    search.split(0, 1);
    console.log('search', search[0])
    // let response = await fetch(URL_Server + 'autocomplete=street' + '&' + `plz_plz=${plz}` + '&' + `street=${street.value}`);
    // let responseAsJson = await response.json();

    let response = await fetch(URL_Server + 'finda=streets' + '&' + `plz_plz=${plz}`);
    let responseAsJson = await response.json();
    let streets = responseAsJson['rows'];

    streets.forEach(s => {
        if(s['street'].toLowerCase()[0] == (search[0])) {
            console.log('s', s);
        }
    });

    // console.log('streetjson', streets);
}