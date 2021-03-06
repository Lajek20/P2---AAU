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

function getAccess(e){
    $.ajax({
        type: "GET", //rest Type
        dataType: 'json',
        url: "https://api.openrouteservice.org/isochrones?locations=-1.1428,52.955&profile=driving-car&range_type=time&interval=300&range=1800&units=&location_type=start&intersections=false&api_key=5b3ce3597851110001cf6248b7cb9c5fc43f49c08bf221ab8da45aea",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
        }
    });
}
// not finished yet
let dir = MQ.routing.directions();

dir.route({
    locations: [
        'Raleigh, NC',
        'Cary, NC',
    ]
});

customRouteLayer = MQ-Routing.RouteLAyer.extend({
    createStartMarker: (location) => {
        let custom_icon;
        let marker;

        custom_icon = L.icon({
            iconUrl: 'img/red.png',
            iconSize: [20,20],
            iconAnchor: [10, 29],
            popupAnchor: [0,-29],

});
   marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
   return marker;
    },

    createEndMarker: (location) => {
        let custom_icon;
        let marker;

        custom_icon = L.icon({
            iconUrl: 'img/blue.png',
            iconSize: [20,20],
            iconAnchor: [10, 29],
            popupAnchor: [0,-29],

        });
        marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
        return marker;
    }
});

map.addLayer(new customRouteLayer({
    directions: dir,
    fitBounds: true
}));

function submitForm(event) {
    event.preventDefault();
    console.log('form submitted');
}

const form = decoument.getElementById('form');

form.addEventListener('submit, submitForm');
