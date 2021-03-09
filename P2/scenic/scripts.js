
// Add listeners and setup map
document.addEventListener('DOMContentLoaded', function() {

    const myMap = setupMap();

    // setup buttons
    document.querySelector("#reset_btn").onclick = function() {reset_btn(myMap)};
    document.querySelector("#start_btn").onclick = function() {start_btn(myMap)};
    document.querySelector("#end_btn").onclick = function() {end_btn(myMap)};
    document.querySelector("#submit").onclick = function() {
        window.location.href = "http://large-type.com/#This%20is%20still%20under%20development."};
})

function setupMap() {
    //create map
    let mymap = L.map('mapid').setView([51.505, -0.09], 13);
}
