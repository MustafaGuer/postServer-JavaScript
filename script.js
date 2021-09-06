const URL_Server = "https://www.postdirekt.de/plzserver/PlzAjaxServlet?";

async function findCity() {
    let plz = document.getElementById('plz');
    let response = await fetch(URL_Server + "finda=city" + "&" + `city=${plz.value}`);
    let responseAsJson = await response.json();

    let city = document.getElementById('city');
    city.value = responseAsJson['city'];

}

async function findStreet(plz) {
    console.log(plz);
    let street = document.getElementById('street');
    let search = street.value.toLowerCase();

    let response = await fetch(URL_Server + 'finda=streets' + '&' + `plz_plz=${plz}`);
    let responseAsJson = await response.json();
    let streets = responseAsJson['rows'];

    document.getElementById('streets').innerHTML = '';

    streets.forEach(s => {

        if (s['street'].toLowerCase().includes(search)) {
            document.getElementById('streets').innerHTML += `<option value="${s['street']}">`;
        }
    })
}