<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Displaying text directions with <code>setPanel()</code></title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    
      #right-panel {
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }

      #right-panel select, #right-panel input {
        font-size: 15px;
      }

      #right-panel select {
        width: 0%;
      }

      #right-panel i {
        font-size: 12px;
      }
      #right-panel {
        height: 0%;
        float: right;
        width: 0px;
        overflow: auto;
      }
      #map {
        //margin-right: 400px;
		 font-size: 18px;
        font-family: Arial;
      }
   
      }
      @media print {
        #map {
          height: 0px;
          margin: 0;
        }
        #right-panel {
          float: none;
          width:0px;
        }
      }
    </style>
  </head>
  <body>
    <div id="map">
      <strong id="start">Start:</strong>
      <s>
        Current Location
      </s>
	  
      <br>
      <strong>End:</strong>
     <input type="text" id="end" value="destination">
	 <button id="endB">Try it</button>
	  <br>
	  
	   <strong>Current Coords: </strong><div id="location">Hellos</div>	
	   <br>
	   <strong >Estimated Drive Time: </strong><div id="duration">N/A</div>
	   <strong >Estimated Drive Time(seconds): </strong><div id="duration2">N/A</div>
    </div>
   <div id="right-panel"> </div>
   <div id="map"> </div>
    <script>
      function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
	
		
        var map = new google.maps.Map(document.getElementById('right-panel'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
       // directionsDisplay.setMap(map);
       // directionsDisplay.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
       // control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        //might need to change something here
        
        document.getElementById('start').addEventListener('click', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
		document.getElementById('endB').addEventListener('click', onChangeHandler);
		
		        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
		document.getElementById("location").innerHTML = position.coords.latitude+','+position.coords.longitude;
            
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
		 
			
            
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {

        var start = document.getElementById('location').innerHTML;
        var end = document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
			document.getElementById('duration').innerHTML = (""+response.routes[0].legs[0].duration.text);
			document.getElementById('duration2').innerHTML = (""+response.routes[0].legs[0].duration.value);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
		
		
		
      }
	  
	   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        
      }
	  
	  
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzh7-T_asK3i3N69JX3Bp6ytX5D03XSc4&callback=initMap">
    </script>
  </body>
</html>