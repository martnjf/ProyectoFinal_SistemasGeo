var informacion = "<h1>usted está aquí</h1>"
function iniciaMapa(){
    var propiedades = {
        center: {
            lat : 21.11553, lng : -101.65769
        },
        zoom: 20
    };
    const mapa =  document.getElementById("map");
    const map = new google.maps.Map(mapa,propiedades);

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
        lat : 21.11553, lng : -101.65769
    }
    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');
}