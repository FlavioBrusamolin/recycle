angular.module('gcPanel').controller('mapaCtrl', function ($rootScope, materiaisvalidados) {
	window.x = 0;
	modo = 0;
	primeiro = 0;
	var map = L.map('map').setView([-22.252274, -45.703722], 13);
	var markerGroup = L.layerGroup().addTo(map);
	var markerGroup2 = L.layerGroup().addTo(map);
	var popup = L.popup();

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		minZoom: 7,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	}).addTo(map);

	var truckIcon = L.icon({
		iconUrl: './images/truck-icon.png',
		iconSize: [36, 36],
	});

	var recycleIcon = L.icon({
		iconUrl: './images/recycle.png',
		iconSize: [24, 24],
	});

	var personIcon = L.icon({
		iconUrl: './images/person-location.png',
		iconSize: [64, 64],
	});

	//Geolocation begins here
	var current_position, current_accuracy;

	function onLocationFound(e) {
		//if position defined, then remove the existing position marker and accuracy circle from the map
		if (current_position) {
			map.removeLayer(current_position);
			map.removeLayer(current_accuracy);
		}
		var radius = e.accuracy / 2;
		current_position = L.marker(e.latlng, { icon: personIcon }).addTo(map).bindPopup("Esse é você!",{ className: 'popupusuario'}).openPopup();
		current_accuracy = L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
		//alert(e.message);
	}

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);

	//wrap map.locate in a function    
	function locate() {
		//if (primeiro == 0) {
			map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
			//primeiro = 1;
		//}
		//else
			//map.locate({ setView: false });
	}
	//Geolocation ends here

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	function attMap() {
		if (window.x == 0) {
			markerGroup.clearLayers();
			L.marker([-22.256988, -45.696698], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 1) {
			markerGroup.clearLayers();
			L.marker([-22.256869, -45.696902], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 2) {
			markerGroup.clearLayers();
			L.marker([-22.25673, -45.697095], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 3) {
			markerGroup.clearLayers();
			L.marker([-22.256521, -45.697417], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 4) {
			markerGroup.clearLayers();
			L.marker([-22.256373, -45.697653], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 5) {
			markerGroup.clearLayers();
			L.marker([-22.256184, -45.697943], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 6) {
			markerGroup.clearLayers();
			L.marker([-22.255936, -45.698276], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 7) {
			markerGroup.clearLayers();
			L.marker([-22.255707, -45.698662], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 8) {
			markerGroup.clearLayers();
			L.marker([-22.255479, -45.69893], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 9) {
			markerGroup.clearLayers();
			L.marker([-22.255241, -45.699306], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 10) {
			markerGroup.clearLayers();
			L.marker([-22.255062, -45.699488], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 11) {
			markerGroup.clearLayers();
			L.marker([-22.254903, -45.699778], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 12) {
			markerGroup.clearLayers();
			L.marker([-22.254655, -45.70011], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 13) {
			markerGroup.clearLayers();
			L.marker([-22.254486, -45.700357], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 14) {
			markerGroup.clearLayers();
			L.marker([-22.254347, -45.700582], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 15) {
			markerGroup.clearLayers();
			L.marker([-22.254168, -45.700775], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 16) {
			markerGroup.clearLayers();
			L.marker([-22.25394, -45.700604], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 17) {
			markerGroup.clearLayers();
			L.marker([-22.253761, -45.700421], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 18) {
			markerGroup.clearLayers();
			L.marker([-22.253463, -45.700582], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 19) {
			markerGroup.clearLayers();
			L.marker([-22.253145, -45.700808], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 20) {
			markerGroup.clearLayers();
			L.marker([-22.252937, -45.700979], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 21) {
			markerGroup.clearLayers();
			L.marker([-22.252748, -45.701151], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 22) {
			markerGroup.clearLayers();
			L.marker([-22.252609, -45.701258], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 23) {
			markerGroup.clearLayers();
			L.marker([-22.252421, -45.701376], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 24) {
			markerGroup.clearLayers();
			L.marker([-22.252301, -45.701505], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 25) {
			markerGroup.clearLayers();
			L.marker([-22.252123, -45.701687], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 26) {
			markerGroup.clearLayers();
			L.marker([-22.252361, -45.701934], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 27) {
			markerGroup.clearLayers();
			L.marker([-22.252569, -45.702159], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 28) {
			markerGroup.clearLayers();
			L.marker([-22.252788, -45.702267], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 29) {
			markerGroup.clearLayers();
			L.marker([-22.253006, -45.702449], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 30) {
			markerGroup.clearLayers();
			L.marker([-22.253284, -45.702653], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 31) {
			markerGroup.clearLayers();
			L.marker([-22.253503, -45.702835], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 32) {
			markerGroup.clearLayers();
			L.marker([-22.253731, -45.703018], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 33) {
			markerGroup.clearLayers();
			L.marker([-22.254258, -45.703447], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 34) {
			markerGroup.clearLayers();
			L.marker([-22.254377, -45.703758], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 35) {
			markerGroup.clearLayers();
			L.marker([-22.254506, -45.704005], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 36) {
			markerGroup.clearLayers();
			L.marker([-22.254635, -45.70423], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 37) {
			markerGroup.clearLayers();
			L.marker([-22.254764, -45.704402], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 38) {
			markerGroup.clearLayers();
			L.marker([-22.254992, -45.704241], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 39) {
			markerGroup.clearLayers();
			L.marker([-22.25529, -45.704069], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 40) {
			markerGroup.clearLayers();
			L.marker([-22.255529, -45.703887], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 41) {
			markerGroup.clearLayers();
			L.marker([-22.255737, -45.703704], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 42) {
			markerGroup.clearLayers();
			L.marker([-22.255965, -45.703576], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 43) {
			markerGroup.clearLayers();
			L.marker([-22.256234, -45.703361], { icon: truckIcon }).addTo(markerGroup);
		}
		if (window.x == 44) {
			markerGroup.clearLayers();
			L.marker([-22.256412, -45.703275], { icon: truckIcon }).addTo(markerGroup);
		}
	}

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
		console.log(e.latlng.lat);
		console.log(e.latlng.lng);
	}

	async function main() {
		var popup;
		var marcador;
		var promise = materiaisvalidados.listar();
    	promise.then(function (response) {
			//console.log(response.data.lenght);
			for(var i = 0; i < response.data.length; i++) {
				console.log(response.data[i].local);
				L.marker(response.data[i].local).addTo(map).bindPopup("Localização do material de " + response.data[i].nome);
			}
		});
		promise.catch(function (err) {
			// alert('Teste');
		});
		
		L.marker([-22.256646, -45.696763], { icon: recycleIcon }).addTo(markerGroup2).bindPopup("Cas@viva",{ className: 'popuprecycle'});
		L.marker([-22.242218, -45.709707], { icon: recycleIcon }).addTo(markerGroup2).bindPopup("Santa Rita Reciclagem",{ className: 'popuprecycle'});
		//locate();
		if($rootScope.localrequest == 1) {
			marcador = L.marker($rootScope.localmapa).addTo(map).bindPopup("Localização do material de " + $rootScope.nomemapa).openPopup();
			//popup = L.popup().setLatLng($rootScope.localmapa).setContent("Localização do material de " + $rootScope.nome).openOn(map);
			map.setView($rootScope.localmapa, 14);
			//popup = L.popup().setContent("teste").openPopup($rootScope.localmapa);
			$rootScope.localrequest = 0;
		}
		else {
			locate();
		}
		while (true) {
			attMap();
			if (window.x == 0 || window.x == 15 || window.x == 17 || window.x == 25 || window.x == 29 || window.x == 33 || window.x == 37 || window.x == 44) {
				await sleep(3000);
			}
			else
				await sleep(1000);
			if (modo == 0)
				window.x++;
			else
				window.x--;
			if (window.x == 44 || window.x == 0) {
				modo ^= 1;
			}
			//locate();
			//map.on('click', onMapClick);
		}
	}
	main();
});