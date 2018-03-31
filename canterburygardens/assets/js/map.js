function initMap() {
        var panorama;
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('map'),
            {
              position: {lat: 33.092657, lng: -117.071364},
              pov: {heading: 165, pitch: 0},
              zoom: 1
            });
}