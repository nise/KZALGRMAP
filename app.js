
new Vue({
  el: '#app',
  data: {
    map: null,
    mapCenter: [51.15, 15.00], // Görlitz
    tileLayer: null,
    layers: [
      {
        id: 0,
        name: 'Gedenkorte in Görlitz',
        active: true,
        features: [
          {
            id: 0,
            name: 'Das KZ Außenlager Görlitz',
            type: 'polygon',
            coords: [
              [38.770547, -90.168056],
              [38.753816, -90.177326]
            ],
          },{
            id: 1,
            name: 'WUMAG Machinenbau',
            type: 'polygon',
            coords: [
              [38.771216, -90.169601],
              [38.786740, -90.144196],
              [38.799049, -90.124283]
            ],
          },
        ],
      },
      {
        id: 1,
        name: 'Todesmarsch',
        active: true,
        features: [
            {
                id: 0,
                name: 'Route',
                type: 'route',
                coords: [
                    [51.145195845445485, 14.997024536132814], 
                    [51.12602276208018, 14.995994567871096],
                    [51.11632547588273, 14.993247985839846]
                ],
            },
            {
                id: 1,
                name: '1. Nacht: Stadtgut Kunnerwitz',
                type: 'marker',
                coords: [51.15, 15.00],
            },
            {
                id: 2,
                name: '2. Nacht: Bauergut Obersohland',
                type: 'marker',
                coords: [51.15, 15.00],
            },
            {
                id: 3,
                name: '3. Nacht: ...',
                type: 'marker',
                coords: [51.15, 15.00],
            },
        ],
      },
      {
        id: 2,
        name: 'Gedenkorte in Rennersdorf',
        active: true,
        features: [
            {
                id: 0,
                name: 'Gut Oberrennersdorf',
                type: 'polygon',
                coords: [
                    [51.15, 15.00]
                ],
                
            },
            {
                id: 1,
                name: 'Pferdestall',
                type: 'polygon',
                coords: [
                    [51.15, 15.00]
                ],
            },
            {
                id: 2,
                name: 'Unterkunft der SS ',
                type: 'marker',
                coords: [51.15, 15.00],
            },
            {
                id: 3,
                name: 'Grab auf dem Firedhof',
                type: 'marker',
                coords: [51.15, 15.00],
            },
        ],
      },
    ],
  },
  mounted() {
    this.initMap();
    this.initLayers();

    this.layerChanged(0, true);
    this.layerChanged(1, true);
    this.layerChanged(2, true);
  },
  created() {

  },
  methods: {
    layerChanged(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);
      
      layer.features.forEach((feature) => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
    initLayers() {
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
        const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');
        const routeFeatures = layer.features.filter(feature => feature.type === 'route');
        
        markerFeatures.forEach((feature) => {
          feature.leafletObject = L.marker(feature.coords)
            //.bindPopup(feature.name);
            .bindTooltip(feature.name);
        });
        
        routeFeatures.forEach((feature) => {
            feature.leafletObject = L.polyline(
                feature.coords,
                {
                    "delay":400,
                    "dashArray":[1,5],
                    "weight":2,
                    "color":"blue",
                    "paused":true,
                    "reverse":false
                })
                .bindPopup(feature.name);
          });

        polygonFeatures.forEach((feature) => {
          feature.leafletObject = L.polygon(feature.coords)
            .bindPopup(feature.name);
        });
      });
    },
    initMap() {
      this.map = L.map('map').setView(this.mapCenter, 12);
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );
      
        this.tileLayer.addTo(this.map);

      this.map.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log("[" + lat + ", " + lng +"],");
        });
      
    },
  },
});
