var autos = document.getElementById("autos");
fetch('./js/datos.json')
.then( function(response){

    response.json().then( function(datos){
        datos.forEach( registro => {
            console.log(registro.name);
            let nombre = document.createElement("p");
            nombre.textContent = "Nombre: " + registro.name + ", Precio promedio: $" + registro.avg_price;
            autos.appendChild(nombre);
        });
    });
});