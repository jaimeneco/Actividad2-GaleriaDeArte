const ArtGallery = [ 
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];

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

const comprobarEdad = 1503;

const obraEdad = ArtGallery.some(obra => obra.year === comprobarEdad);

console.log(`¿Hay obras del año ${comprobarEdad}?`, obraEdad);

//-----------------------------------------------------------------
//EJERCICIO 6: Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.
//-----------------------------------------------------------------
console.log("Ejercicio 6");
const miNacimiento = 1997;

const obrasAnteriores = ArtGallery.every(obra => obra.year < miNacimiento);

console.log(`¿Todas las obras son anteriores a ${miNacimiento}?`, obrasAnteriores);


//-----------------------------------------------------------------
//EJERCICIO 7: Usa findIndex para encontrar la posición en el array de una obra específica.
//-----------------------------------------------------------------
console.log("Ejercicio 7");

const titleEncuentra = "Mona Lisa";

const obraIndex = ArtGallery.findIndex(obra => obra.title === titleEncuentra);

if (obraIndex !== -1) {
    console.log(`La obra "${titleEncuentra}" está en la posición ${obraIndex} del array.`);
} else {
    console.log(`La obra "${titleEncuentra}" no se encontró en el array.`);
}

//-----------------------------------------------------------------
//EJERCICIO 8: Agregar una función que permita añadir nuevas obras al array galería.
//-----------------------------------------------------------------
console.log("Ejercicio 7");

function addObra(artist, title, year, isExhibited) {
    const nuevoId = ArtGallery.length > 0 ? ArtGallery[ArtGallery.length - 1].id + 1 : 1; // Generar nuevo ID
    const nuevaObra = { id: nuevoId, artist, title, year, isExhibited };
    ArtGallery.push(nuevaObra); // Añadir la obra al array
    console.log(`Se ha añadido la obra:`, nuevaObra);
}

// Ejemplo de uso:
addObra("Frida Kahlo", "The Two Fridas", 1939, true);
addObra("Michelangelo", "David", 1504, false);

console.log(ArtGallery);

//-----------------------------------------------------------------
//EJERCICIO 9: Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id.
//-----------------------------------------------------------------
console.log("Ejercicio 7");

function estadoDeLaObra(id) {
    const obra = ArtGallery.find(art => art.id === id); // Buscar la obra por ID
    if (obra) {
        obra.isExhibited = !obra.isExhibited; // Cambiar el estado
        console.log(`El estado de "isExhibited" para la obra con ID ${id} ha sido cambiado a ${obra.isExhibited}.`);
    } else {
        console.log(`No se encontró ninguna obra con el ID ${id}.`);
    }
}

console.log(ArtGallery);