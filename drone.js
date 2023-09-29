// VARIABLES
var Paris = [48.856614, 2.3522219];
var Bordeaux = [44.837789,-0.57918];
var Lyon = [45.759060, 4.847331];
var Strasbourg = [48.573405, 7.752111];

// Integration Map
var map = L.map('map').setView(Paris, 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).

addTo(map);
let parisMarker2
map.on('click', function(e) { 
  if (parisMarker2){
    map.removeLayer(parisMarker2)
  }
  


   parisMarker2 = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  console.log("ici", e)             
});

let parisMarker = document.getElementById("ParisMarker");

// Add Map Scale

L.control.scale({position:'bottomleft'}).addTo(map);

// Paris Add Marker
parisMarker = L.marker(Paris).addTo(map);
// End Paris Marker

// Bordeaux Add Marker
const bordeauxMarker = L.marker(Bordeaux).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();
    bordeauxMarker._icon.style.filter = "hue-rotate(500deg)";

// Lyon Add Marker
const lyonMarker = L.marker(Lyon).addTo(map)
lyonMarker._icon.style.filter = "hue-rotate(300deg)";
//Strasbourg Add Marker
const strasbourgMarker = L.marker(Strasbourg).addTo(map);
strasbourgMarker._icon.style.filter = "hue-rotate(900deg)";

/** ADD POLYLINES */   
 var latlngs = [
      Paris,
      Bordeaux,
  ];

  var latlngs2 = [
    Lyon,
    Bordeaux
  ]

  var latlngs3 = [
    Lyon,
    Paris,
  ]

  var latlngs4 =[
    Lyon,
    Strasbourg,
  ]

  var latlngs5 = [
    Strasbourg,
    Paris,
  ]
  
  var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
  var polyline2 = L.polyline(latlngs2, {color: 'blue'}).addTo(map);
  var polyline3 = L.polyline(latlngs3, {color: 'green'}).addTo(map);
  var polyline4 = L.polyline(latlngs4, {color: 'black'}).addTo(map);
  var polyline5 = L.polyline(latlngs5, {color: 'cyan'}).addTo(map);

  
  map.fitBounds(polyline.getBounds());
  
  /* END POLYLINES */

  //DEPART/DESTINATIONS
  let depart = [Paris,Bordeaux,Paris];
  let depart2 = [Bordeaux,Lyon,Bordeaux]
  let depart3 = [Lyon,Paris,Lyon];
  let depart4 = [Lyon,Strasbourg,Lyon];
  let depart5 = [Strasbourg,Paris,Strasbourg];

  /** ADD ANIMATIONS */

  // DEPART Bordeaux/Paris
    let moveMarker = L.Marker.movingMarker(depart,
    20000, {loop:true}).addTo(map);
    moveMarker._icon.style.filter = "hue-rotate(500deg)";
    moveMarker.start();
    moveMarker.options.icon.options.iconSize = [24,42]
    

// POPUPS COORDINATES//
    // setInterval(() => {
    //   if(moveMarker.isRunning()){
    //     const res = moveMarker.getLatLng();
    //     moveMarker.bindPopup(`Latitude : ${res.lat}, Longitude:${res.lng}`).openPopup(); 
    //     }
    // },80)

    // setInterval(() => {
    //   if(moveMarker4.isRunning()){
    //     const res = moveMarker4.getLatLng();
    //     moveMarker4.bindPopup(`Latitude : ${res.lat}, Longitude:${res.lng}`).openPopup(); 
    //     console.log(moveMarker4)
      
    // }
    // },10)

    //DEPART Bordeaux/Lyon 
    let moveMarker2 = L.Marker.movingMarker(depart2,
      30000, {loop:true}).addTo(map);
      moveMarker2._icon.style.filter = "hue-rotate(400deg)";
      moveMarker2.start();

    //DEPART Lyon/Paris
    let moveMarker3 = L.Marker.movingMarker(depart3,
      35000, {loop:true}).addTo(map);
      moveMarker3._icon.style.filter = "hue-rotate(600deg)";
      moveMarker3.start();

    //DEPART Lyon/Strasbourg
    let moveMarker4 = L.Marker.movingMarker(depart4,32000,{loop:true}).addTo(map);
    moveMarker4.start();
    moveMarker4._icon.style.filter = "hue-rotate(200deg)";

   
    //DEPART Strasbourg/Paris
    let moveMarker5 = L.Marker.movingMarker(depart5,30000,{loop:true}).addTo(map);
    moveMarker5.start();
    moveMarker5._icon.style.filter = "hue-rotate(400deg)";


//Map Coordinate Display 
map.on('mousemove', function(e){
  $('.coordinate').html(`Latitude: ${e.latlng.lat} Longitude: ${e.latlng.lng}`)
  // console.log(e)
})

//Map Print
$('.print-map').click(function(e){
  window.print();
})









    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0,
    // };
    
    // function success(pos) {
    //   var crd = pos.coords;
    
    //   console.log("Votre position actuelle est :");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude : ${crd.longitude}`);
    //   console.log(`La précision est de ${crd.accuracy} mètres.`);
    // }
    
    // function error(err) {
    //   console.warn(`ERREUR (${err.code}): ${err.message}`);
    // }
    
    // navigator.geolocation.getCurrentPosition(success, error, options);