
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
                    // Buschschenke
                    [51.062591580059255, 14.759960174560549], 
                    [51.0618900539045, 14.759402275085451], 
                    [51.06104011374449, 14.75890874862671], 
                    [51.05981239485421, 14.758758544921877], 
                    [51.05892194100411, 14.7586727142334], 
                    [51.05815289889694, 14.758479595184328], 
                    [51.05747829004031, 14.757513999938967], 
                    [51.056857641211266, 14.757020473480226], 
                    [51.056129042840055, 14.756526947021486], 
                    [51.05565679703149, 14.756011962890627], 
                    [51.05503612378693, 14.755260944366457], 
                    [51.05480674243899, 14.754896163940431], 
                    [51.051757211852504, 14.765281677246096], 
                    [51.04882893376707, 14.765217304229738], 
                    [51.045009749144356, 14.767534732818605], 
                    [51.042526435439456, 14.768714904785158], 
                    [51.04232398551889, 14.768714904785158], 
                    [51.04209454120605, 14.7686505317688], 
                    [51.03947609621709, 14.767491817474367], 
                    [51.038882201507334, 14.767384529113771], 
                    [51.03652004492527, 14.767985343933107], 
                    [51.0357641293855, 14.768071174621584], 
                    [51.03522418216436, 14.768199920654299], 
                    [51.03495420619442, 14.76817846298218], 
                    [51.034657230810794, 14.768135547637941], 
                    [51.03423876226715, 14.76817846298218], 
                    [51.03384728827296, 14.768478870391847], 
                    [51.03311832788528, 14.76914405822754], 
                    [51.03237585644408, 14.769551753997805], 
                    [51.0319978664137, 14.76940155029297], 
                    [51.03171437186772, 14.76940155029297], 
                    [51.031565874032495, 14.770023822784426], 
                    [51.0310528778498, 14.770538806915285], 
                    [51.030485875462524, 14.771225452423097], 
                    [51.02991886613849, 14.771547317504885], 
                    [51.02950035480694, 14.771740436553957], 
                    [51.028676821475, 14.771804809570314],
                    // Berthelsdorf, Ende Kränke
                    [51.02862726458492, 14.771783351898195], 
                    [51.02851935313149, 14.772427082061768], 
                    [51.028397952446085, 14.772791862487795],
                    [51.028101193876466, 14.773221015930178],
                    [51.02769652003769, 14.773478507995607], 
                    [51.027224396093736, 14.773843288421633],
                    [51.02654992497466, 14.774186611175539], 
                    [51.0259563822716, 14.774551391601564], 
                    [51.02559215912288, 14.775066375732424],
                    [51.02544333549145, 14.775238037109377], 
                    [51.025133068074325, 14.77566719055176], 
                    [51.02498467857551, 14.77590322494507], 
                    [51.02489024864712, 14.776096343994142], 
                    [51.0246204477918, 14.776289463043215], 
                    [51.02437762567941, 14.776461124420168], 
                    [51.0241887631571, 14.776825904846193], 
                    [51.02399989986532, 14.77742671966553], 
                    [51.0238380164314, 14.778177738189699], 
                    [51.02381103580413, 14.778778553009035], 
                    [51.02363566134401, 14.779229164123535], 
                    [51.0234198149439, 14.779443740844728], 
                    [51.0230555718648, 14.779615402221681], 
                    [51.022637363318786, 14.779937267303469], 
                    [51.02225962332486, 14.780344963073732], 
                    [51.022097733813865, 14.781224727630617], 
                    [51.021935843737516, 14.782018661499025], 
                    [51.02194933459881, 14.782726764678957], 
                    [51.02194933459881, 14.783692359924318], 
                    [51.02182791670591, 14.784679412841799], 
                    [51.021679516627195, 14.785602092742922], 
                    [51.021544607052505, 14.785966873168947], 
                    [51.021490643112706, 14.786353111267092], 
                    [51.021450170116665, 14.786546230316164], 
                    [51.02088354446184, 14.786267280578615], 
                    [51.0208025973744, 14.786181449890138], 
                    [51.02028992920531, 14.784615039825441], 
                    [51.020155015587015, 14.784271717071535], 
                    [51.01989867863074, 14.784121513366701], 
                    [51.019817729823785, 14.784679412841799], 
                    [51.019817729823785, 14.785194396972658], 
                    [51.01991217008481, 14.7861385345459], 
                    [51.020168506966534, 14.788734912872316], 
                    [51.01980423834221, 14.78890657424927]
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
                    [51.018845226887, 14.789593219757082],
                    [51.01867657954794, 14.788734912872316],
                    [51.01960075943616, 14.7881555557251], 
                    [51.01980987787702, 14.789035320281984],
                ],
                
            },
            {
                id: 1,
                name: 'Pferdestall',
                type: 'polygon',
                coords: [
                    [51.01743774763899, 14.788799285888674],
                    [51.017532192747765, 14.788928031921388],
                    [51.01701611534273, 14.789754152297975], 
                    [51.01691829610209, 14.7896146774292],
                ],
            },
            {
                id: 2,
                name: 'Unterkunft der SS in der Schmidtmühle',
                type: 'marker',
                coords: [51.02219456561138, 14.791824817657472],
            },
            {
                id: 3,
                name: 'Grabstelle an der Kirche in Rennersdorf',
                type: 'marker',
                coords: [51.022765071301905, 14.79037642478943],
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
            .bindPopup(feature.name)
            .bindTooltip(feature.name)
            ;
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
                .bindPopup(feature.name)
                .bindTooltip(feature.name)
                ;
          });

        polygonFeatures.forEach((feature) => {
          feature.leafletObject = L.polygon(
              feature.coords,
                {
                    "delay":400,
                    "weight":2,
                    "color":"blue"
                })
              .bindPopup(feature.name)
              .bindTooltip(feature.name)
              ;
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
