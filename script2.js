var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
  google.maps.event.addDomListener(document.getElementById('btn'), 'click', function() {
    randomBetween();
  })
}

function randomBetween() {
  var random = new google.maps.LatLng((Math.random() * (85 * 2) - 85), (Math.random() * (180 * 2) - 180));
  var marker = new google.maps.Marker({
    map: map,
    position: random
  });
  map.setCenter(marker.getPosition());
}

 document.addEventListener("DOMContentLoaded", function(){
   let two = document.getElementById("two");
   two.addEventListener("click", function(){  
     let formularz = document.getElementById("formularz").value
     let podsumowanie = document.getElementById("Podsumowanie");
     podsumowanie.style.display= "block";
     podsumowanie.innerHTML= formularz;

   })
 })


