var ourRequest = new XMLHttpRequest();
var button = document.querySelector("#btn");
var cityContainer = document.getElementById("city-info");

button.addEventListener("click", function(){

//Getting data from the json file created.
ourRequest.open('GET', 'https://hbf2001.github.io/Hosam-Lab.github.io/week4/Understanding%20JSON%20and%20AJAX%20(Part%201)/cities1.json');

//onload used to specify what happens when the http request is completed
ourRequest.onload = function () {

    //Response text is the data captured from the server
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    button.classList.add("hide-me");//Button to be hidden after the data has been displayed
};
ourRequest.send();
});

function renderHTML(data){
    var htmlString = "";
    for (i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ",</br> Where you can enjoy indoor places like: " ;
    for (ii = 0; ii < data[i].places.indoor.length; ii++) {
    // Loop through the indoor places of the current city.
        if (ii == 0) {
            htmlString += data[i].places.indoor[ii];
        } else {
            htmlString += ", and " + data[i].places.indoor[ii];
                }
    }

    htmlString += '. & enjoy outdoor places like: ';
    // Loop through the outdoor places of the current city.
    for (ii = 0; ii < data[i].places.outdoor.length; ii++) {
        if (ii == 0) {
            htmlString += data[i].places.outdoor[ii];
        } else {
            htmlString += " and " + data[i].places.outdoor[ii];
        }
    }
    htmlString += '.</p>';
    }
    cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}