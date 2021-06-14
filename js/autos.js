fetch('../js/datos.json')
.then( function(response){
    response.json().then( function(datos){
    datos.forEach( registro => {    
        let nombre = `
        <div class="card card-1 col-12 col-md-4 m-2" style="width: 18rem;">
            <img src="${registro.img_url}"  class="card-img-top" alt="...">
            <div class="card-body"> 
                <h5 class="card-title">${registro.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${registro.name}</li>
                <li class="list-group-item">Precio promedio: $${registro.avg_price}</li>
                <li class="list-group-item">Modelos disponibles: ${registro.num_models}</li>
            </ul>
        </div>`;
        $("#autos").append(nombre);
        });
    });
    // col
});