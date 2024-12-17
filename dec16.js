let myRequest = new XMLHttpRequest();
let urlISS = 'https://api.wheretheiss.at/v1/satellites/25544';

// Get references to the elements where data will be displayed
const latElement = document.querySelector('.lat');
const longElement = document.querySelector('.long');
const altElement = document.querySelector('.alt');
const visElement = document.querySelector('.vis');
const button = document.querySelector('button');


function fetchISSData() {

    myRequest.open('GET',urlISS);

    myRequest.onload = function() {
        let unParsedData = myRequest.responseText;
        let parsedData = JSON.parse(unParsedData);
        console.log(unParsedData);
        console.log(parsedData);

        // Update the span elements with the ISS data
        latElement.textContent = parsedData.latitude.toFixed(2); // Latitude
        longElement.textContent = parsedData.longitude.toFixed(2); // Longitude
        altElement.textContent = parsedData.altitude.toFixed(2) + " km"; // Altitude
        visElement.textContent = parsedData.visibility // visbility

}
myRequest.send();

}










