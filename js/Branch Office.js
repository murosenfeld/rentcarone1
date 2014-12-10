$(document).ready(function () {
    var email = ($.cookie.read('email'));
    if (email === 'martin@gmail.com') {
        $('#ver').show() && $('#ver2').show() && $('#ver').show() && $('#edit').show() && $('#registrado').hide() && $('#service').hide() && $('.btn-sign').hide()&& $('#client').show();
    }
});
 
var map_Haifa;
			var map_Jerusalem;
			var map_TelAviv;
			var map_Ashdod;
			var map_Eilat;
			
			function init(){
				var mapCanvas_haifa = document.getElementById("map_Haifa");

				var mapOptions_haifa = {
					center: new google.maps.LatLng(32.819037, 34.992305),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var mapCanvas_jerusalem = document.getElementById("map_TelAviv");

				var mapOptions_jerusalem = {
					center: new google.maps.LatLng(44.5403,-78.5463),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var mapCanvas_telAviv = document.getElementById("map_Jerusalem");

				var mapOptions_telAviv = {
					center: new google.maps.LatLng(31.784551, 35.211246),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var mapCanvas_ashdod = document.getElementById("map_Ashdod");

				var mapOptions_ashdod = {
					center: new google.maps.LatLng(31.801158, 34.641705),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var mapCanvas_eilat = document.getElementById("map_Eilat");

				var mapOptions_eilat = {
					center: new google.maps.LatLng(29.562063, 34.938004),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				map_Haifa = new google.maps.Map(mapCanvas_haifa,mapOptions_haifa);
				map_Jerusalem = new google.maps.Map(mapCanvas_jerusalem,mapOptions_jerusalem);
				map_TelAviv = new google.maps.Map(mapCanvas_telAviv,mapOptions_telAviv);
				map_Ashdod = new google.maps.Map(mapCanvas_ashdod,mapOptions_ashdod);
				map_Eilat = new google.maps.Map(mapCanvas_eilat,mapOptions_eilat);

				findMe();
			}

			function findMe(){
				if(navigator.geolocation){
					navigator.geolocation.getCurrentPosition(success, error);
				}
				else{
					//geo location error
				}

			}

			function success(position){
				var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				map_Haifa.panTo(latlng);

				var marker = new google.maps.Marker({
					position: latlng,
					map_Haifa: map_Haifa,
					title: "You are here!"
				});
			}
                        
                        function success(position){
				var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				map_TelAviv.panTo(latlng);

				var marker = new google.maps.Marker({
					position: latlng,
					map_TelAviv: map_TelAviv,
					title: "You are here!"
				});
			}
                        
                        
			function error(msg){

			}
			