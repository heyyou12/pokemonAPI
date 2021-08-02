//url
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//obtener los resultados
const getData =(api)=>{
    return fetch(api)
        .then((response) => response.json())
        .then((json)=>{
            llenarDatos(json.results),paginacion(json);
        })
        .catch((error)=>{
            console.log("error ", error);
        })


}
//metodo para llenar los datos en las cards del html
const llenarDatos =(data)=>{
    let html ="";
    data.forEach(el => {
        html += `<div class="col mt-5" 
        <div class="card" style="width: 10rem;">
        <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        </div></div></div>
        `;
    });
    document.getElementById("datosPersonajes").innerHTML = html;
}

//paginacion 
const paginacion=(data)=>{
    let prevDisabled = "";
    let nextDisabled = "";

    data.previous == null ? prevDisabled = "disabled": prevDisabled="";
    data.next == null ? nextDisabled = "disabled": nextDisabled="";

    let html=`<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${data.previous}')">Previous</a></li>
    <li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>;
    `;

    
    document.getElementById("paginacion").innerHTML = html;

}

getData(API);