const container = document.querySelector("#pokemons");

function buscarPersonaje(url = "https://pokeapi.co/api/v2/pokemon/") {
    fetch(url)
        .then(respuesta => {
            console.log(respuesta)
            respuesta.json()
                .then(datos => {
                    console.log(datos)
                    imprimirPersonajes(datos)
                })
        })
        .catch(error => console.log(error));
}

function imprimirPersonajes(list = []) {

    document.querySelector("#printer").innerHTML = ""
    document.querySelector("#botonesPagina").innerHTML = ""
    list.results.forEach(personaje => {
console.log(personaje)
        document.querySelector("#printer").innerHTML += `
       
        <div class="card" style="width: 18rem;">
        <img src="">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
        </div>
      </div>
`
    });
    document.querySelector("#botonesPagina").innerHTML += `
            <button class="btn btn-primary" onclick="buscarPersonaje('${list.previous}')" type="button" id="botonPrev">Prev</button>
            <button class="btn btn-primary" type="button" onclick="buscarPersonaje('${list.next}')"  id="botonNext">Next</button>
    `

}


buscarPersonaje();
