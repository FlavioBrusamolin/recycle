import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import L from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  x: number = 0;
  modo: number = 0;
  markerGroup: any;
  markerGroup2: any = L.featureGroup();
  markerGroup3: any;
  marker: any;
  marker2: any;
  marker3: any;
  truckIcon: any = L.icon({
    iconUrl: './../../assets/imgs/caminhao.png',
    iconSize: [36, 36],
  });
  recycleIcon: any = L.icon({
    iconUrl: './../../assets/imgs/recycle.png',
    iconSize: [24, 24],
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private usuarioProvider: UsuariosProvider, private loadingCtrl: LoadingController) {
    setInterval(() => { this.attMap(); }, 1000);
  }

  ionViewDidEnter() {
    this.usuarioProvider.controleglobal = 1;
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidLoad() {
    this.loadmap();
  }

  ionViewWillEnter() {
    this.realocate();
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  loadmap() {
    this.map = L.map("map").fitWorld();
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.markerGroup = L.layerGroup().addTo(this.map);
    this.markerGroup3 = L.layerGroup().addTo(this.map);
    this.marker3 = L.marker([-22.256646, -45.696763], { icon: this.recycleIcon }).addTo(this.markerGroup3).bindPopup("Cas@viva", { className: 'popuprecycle' });
    this.marker3 = L.marker([-22.242218, -45.709707], { icon: this.recycleIcon }).addTo(this.markerGroup3).bindPopup("Santa Rita Reciclagem", { className: 'popuprecycle' });
  }

  realocate() {
    this.map.locate({
      setView: true,
      maxZoom: 18
    }).on('locationfound', (e) => {
      this.usuarioProvider.localglobal = [e.latitude, e.longitude];
      console.log(this.usuarioProvider.localglobal);
      //this.markerGroup = L.featureGroup();
      if (this.marker != undefined) {
        this.markerGroup.removeLayer(this.marker);
        console.log("apagou");
        console.log("apagou2");
      }
      this.marker = L.marker([e.latitude, e.longitude]).addTo(this.markerGroup).bindPopup("Esse é você!").openPopup([e.latitude, e.longitude]);
			this.map.setView([e.latitude, e.longitude], 16);
      // this.marker = L.marker([e.latitude, e.longitude]).bindPopup("Esse é você!").openPopup();
      //this.markerGroup.addLayer(this.marker);
      //this.map.addLayer(this.markerGroup);
      //this.markerGroup.addLayer(this.marker);
      //this.map.addLayer(this.markerGroup);
      //this.markerGroup.addLayer(this.marker);
      //this.map.addLayer(this.markerGroup);

    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }

  attMap() {
    if (this.x == 0) {
      //this.markerGroup2.clearLayers();this.markerGroup = L.featureGroup();
      //this.markerGroup2 = L.featureGroup();
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256988, -45.696698], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256988, -45.696698], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 1) {
      // 	//this.markerGroup2.clearLayers();
      // 	L.marker([-22.256869, -45.696902], { icon: this.truckIcon }).addTo(this.markerGroup2);
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256869, -45.696902], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
    }
    if (this.x == 2) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.25673, -45.697095], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.25673, -45.697095], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 3) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256521, -45.697417], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256521, -45.697417], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 4) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256373, -45.697653], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256373, -45.697653], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 5) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256184, -45.697943], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256184, -45.697943], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 6) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255936, -45.698276], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255936, -45.698276], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 7) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255707, -45.698662], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255707, -45.698662], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 8) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255479, -45.69893], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255479, -45.69893], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 9) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255241, -45.699306], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255241, -45.699306], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 10) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255062, -45.699488], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255062, -45.699488], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 11) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254903, -45.699778], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254903, -45.699778], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 12) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254655, -45.70011], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254655, -45.70011], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 13) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254486, -45.700357], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254486, -45.700357], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 14) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254347, -45.700582], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254347, -45.700582], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 15) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254168, -45.700775], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254168, -45.700775], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 16) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.25394, -45.700604], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.25394, -45.700604], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 17) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253761, -45.700421], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253761, -45.700421], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 18) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253463, -45.700582], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253463, -45.700582], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 19) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253145, -45.700808], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253145, -45.700808], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 20) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252937, -45.700979], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252937, -45.700979], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 21) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252748, -45.701151], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252748, -45.701151], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 22) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252609, -45.701258], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252609, -45.701258], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 23) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252421, -45.701376], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252421, -45.701376], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 24) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252301, -45.701505], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252301, -45.701505], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 25) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252123, -45.701687], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252123, -45.701687], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 26) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252361, -45.701934], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252361, -45.701934], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 27) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252569, -45.702159], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252569, -45.702159], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 28) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.252788, -45.702267], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.252788, -45.702267], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 29) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253006, -45.702449], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253006, -45.702449], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 30) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253284, -45.702653], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253284, -45.702653], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 31) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253503, -45.702835], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253503, -45.702835], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 32) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.253731, -45.703018], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.253731, -45.703018], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 33) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254258, -45.703447], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254258, -45.703447], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 34) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254377, -45.703758], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254377, -45.703758], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 35) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254506, -45.704005], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254506, -45.704005], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 36) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254635, -45.70423], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254635, -45.70423], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 37) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254764, -45.704402], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254764, -45.704402], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 38) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.254992, -45.704241], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.254992, -45.704241], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 39) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.25529, -45.704069], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      // L.marker([-22.25529, -45.704069], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 40) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255529, -45.703887], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255529, -45.703887], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 41) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255737, -45.703704], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255737, -45.703704], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 42) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.255965, -45.703576], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.255965, -45.703576], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 43) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256234, -45.703361], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256234, -45.703361], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.x == 44) {
      this.markerGroup2.removeLayer(this.marker2);
      this.map.removeLayer(this.markerGroup2);
      this.marker2 = L.marker([-22.256412, -45.703275], { icon: this.truckIcon });
      this.markerGroup2.addLayer(this.marker2);
      this.map.addLayer(this.markerGroup2);
      //L.marker([-22.256412, -45.703275], { icon: this.truckIcon }).addTo(this.markerGroup2);
    }
    if (this.modo == 0)
      this.x++;
    else
      this.x--;
    if (this.x == 44 || this.x == 0) {
      this.modo ^= 1;
    }
    //console.log(this.x);
  }
}