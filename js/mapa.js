function iniciaMapa(){
    var informacion = "<h3>Aquí lo esperamos</h3>"
    var propiedades = {
        center: { 
             lat: 20.94542803736514, lng: -101.43458073056293
        },
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds : [ 'roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        }
        
    };

    var mapa = document.getElementById("map");
    var map = new google.maps.Map(mapa, propiedades);

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            let posicion = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            let propiedadesMarcador = {
                position: posicion,
                map,
                title: "Marcador"
            }

            const marcador = new google.maps.Marker(propiedadesMarcador);

            map.setCenter(posicion);

            const infowindow = new google.maps.InfoWindow({
                content: informacion
            })

            marcador.addListener("click", ()=>{
                infowindow.open(map, marcador);
            }) 

            
        });
    }
    let posicion = {
        lat : 20.94542803736514, lng : -101.43458073056293
    }
    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');
}