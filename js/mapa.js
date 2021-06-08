function iniciaMapa(){
    var propiedades = {
        center: { 
             lat: 20.47797754270802, lng:  -100.96109066653172
        },
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds : [ 'roadmap', 'satellite', 'hybrid', 'terrain']
        }
        
    };

    var mapa = document.getElementById("map");

    var map = new google.maps.Map(mapa, propiedades);

    map.setMapTypeId('style_map');

    const informacion="<h2 style='font-weight:1000;'>Autopartes Gadi</h2>"
    let posicion = {
        lat: 20.47797754270802,//position.coords.latitude,
        lng: -100.96109066653172,//position.coords.longitude
    }

    let propiedadesMarcador = {
        position: posicion,
        map,
        title: "Marcador"
    };

    const marcador = new google.maps.Marker(propiedadesMarcador);

    map.setCenter(posicion);

    const infowindow = new google.maps.InfoWindow({
        content : informacion
    })

    marcador.addListener("click", ()=>{
        infowindow.open(map, marcador)
    });


    }