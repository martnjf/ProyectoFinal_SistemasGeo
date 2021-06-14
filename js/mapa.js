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

    const marker = new google.maps.Marker({
        position: posicion, 
        map,
        title: "Gadi"
    });
}