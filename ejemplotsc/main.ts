import { Series } from './Series.js';

let Tabla: HTMLElement = document.getElementById("1")!;

let CardSerie: HTMLElement = document.getElementById("2")!;

let promedio: number = 0;

for(let item of Series){
    let fila = document.createElement('tr');
    let fila_id = document.createElement('td');
    fila_id.innerHTML = (item.idSerie).toString();
    let fila_nombre= document.createElement('td');
    fila_nombre.innerHTML = `<font color="blue">${item.nombre}</font>`;
    let fila_canal = document.createElement('td');
    fila_canal.innerHTML = (item.canal).toString();
    let fila_temp = document.createElement('td');
    fila_temp.innerHTML = (item.temporadas).toString();

    fila_id.addEventListener("click", function() { CardSerie.innerHTML = `<img class="img-fluid" src=${item.imagen}"><h5 class="card-title">${item.nombre}</h5><p class="card-text">${item.descripcion}</p><a href=${item.link} class="card-link">>${item.link}</a>`;});
    fila_nombre.addEventListener("click", function() { CardSerie.innerHTML = `<img class="img-fluid" src=${item.imagen}"><h5 class="card-title">${item.nombre}</h5><p class="card-text">${item.descripcion}</p><a href=${item.link} class="card-link">>${item.link}</a>`;});
    fila_canal.addEventListener("click", function() { CardSerie.innerHTML = `<img class="img-fluid" src=${item.imagen}"><h5 class="card-title">${item.nombre}</h5><p class="card-text">${item.descripcion}</p><a href=${item.link} class="card-link">>${item.link}</a>`;});
    fila_temp.addEventListener("click", function() { CardSerie.innerHTML = `<img class="img-fluid" src=${item.imagen}"><h5 class="card-title">${item.nombre}</h5><p class="card-text">${item.descripcion}</p><a href=${item.link} class="card-link">>${item.link}</a>`;});
    console.log(item.imagen);
    
    fila.appendChild(fila_id);
    fila.appendChild(fila_nombre);
    fila.appendChild(fila_canal);
    fila.appendChild(fila_temp);
    Tabla.appendChild(fila);
}

let suma: number = 0;
for(let item of Series){
    suma = suma + item.temporadas;
}

promedio = suma/Series.length;

let fila = document.createElement('tr');
let fila_promedio = document.createElement('td');
fila_promedio.innerHTML = "Seasons average: " + (promedio).toString();
let fila_relleno1= document.createElement('td');
fila_relleno1.innerHTML = " ";
let fila_relleno2= document.createElement('td');
fila_relleno2.innerHTML = " ";
let fila_relleno3= document.createElement('td');
fila_relleno3.innerHTML = " ";
fila.appendChild(fila_promedio);
fila.appendChild(fila_relleno1);
fila.appendChild(fila_relleno2);
fila.appendChild(fila_relleno3);
Tabla.appendChild(fila);
