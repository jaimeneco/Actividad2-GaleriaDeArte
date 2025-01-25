//-----------------------------------------------------------------
//EJERCICIO 1: Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato: "La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida".
//-----------------------------------------------------------------
console.log("Ejercicio 1");

ArtGallery.forEach( obra => {  

    //condicional ternaria
    const isExhibited = obra.isExhibited ? "SE" : "NO SE";

    // if obra is exhibida, else is not exhibida. (? y :)
    isExhibited = "NO SE;";
    if(obra.isExhibited){
            isExhibited = "SE";
    }

    console.log(`La obra ${obra.title} por el autor ${obra.artist} (${obra.year}) ${isExhibited} encuentra exhibida`);
} );

//-----------------------------------------------------------------
//EJERCICIO 2: Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.
//-----------------------------------------------------------------
console.log("Ejercicio 2");

// Es correcto y resumido: const listaTitulos = ArtGallery.map( obra => obra.title); 
const listaTitulos = ArtGallery.map( obra => {
    return obra.title; 
});
console.log("Títulos de las obras:", titles);

//-----------------------------------------------------------------
//EJERCICIO 3: Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.
//-----------------------------------------------------------------
console.log("Ejercicio 3");
const listaFiltrados = ArtGallery.filter( obra => {
    if(obra.isExhibited == true ){
        return true;
    } else {
        return false;
    }
    });

// Es correcto y resumido: const listaFiltrados = ArtGallery.filter( obra => obra.isExhibited);


//-----------------------------------------------------------------
//EJERCICIO 4: Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica.
//-----------------------------------------------------------------
console.log("Ejercicio 4");

function findWork(title) {
    return ArtGallery.find(
        (item) => comparableString(item.title) === comparableString(title)
        );
}

function comparableString(str) {
    return str.trim().toLowerCase();
}
console.log(findWork("starry night"));

//-----------------------------------------------------------------
//EJERCICIO 5: Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).
//-----------------------------------------------------------------
console.log("Ejercicio 5");

//-----------------------------------------------------------------
//EJERCICIO 6: Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.
//-----------------------------------------------------------------
console.log("Ejercicio 6");

//-----------------------------------------------------------------
//EJERCICIO 7: Usa findIndex para encontrar la posición en el array de una obra específica.
//-----------------------------------------------------------------
console.log("Ejercicio 7");

//-----------------------------------------------------------------
//EJERCICIO 8: Agregar una función que permita añadir nuevas obras al array galería.
//-----------------------------------------------------------------
console.log("Ejercicio 7");

//-----------------------------------------------------------------
//EJERCICIO 9: Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id.
//-----------------------------------------------------------------
console.log("Ejercicio 7");