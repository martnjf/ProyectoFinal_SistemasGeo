var informacion = "<h1>usted está aquí</h1>"
function iniciaMapa(){
    var propiedades = {
        center: {
            lat : 20.94562937009317, lng : -101.43458139735137
        },
        zoom: 15
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
        lat : 20.94562937009317, lng : -101.43458139735137
    }
    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');
}