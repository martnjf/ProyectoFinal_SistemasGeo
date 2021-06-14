var informacion =  "<h1>Autopartes Gadi</h1>"
    informacion += "<p><strong>Dirección:</strong> Calzada Hidalgo 80, Col. Centro, 36100 Silao, Gto, México.</p>"
    informacion += "<p><strong>Teléfono:</strong>472 117 1427.</p>" 

function iniciaMapa(){
    var propiedades = {
        center: {
            lat : 20.94562937009317, lng : -101.43458139735137
        },
        zoom: 15
    };

    const mapa =  document.getElementById("map");
    const map = new google.maps.Map(mapa,propiedades);

    let posicion = {
        lat : 20.94562937009317, lng : -101.43458139735137
    }
 
    let propiedadesMarcador = {
        position: posicion,
        map,
        title: "Marcador"
    }

    const marcador = new google.maps.Marker(propiedadesMarcador);
    map.setCenter(posicion)
    
    const infowindow = new google.maps.InfoWindow({
        content : informacion
    })

    marcador.addListener("click", ()=>{
        infowindow.open(map,marcador);
    })
}