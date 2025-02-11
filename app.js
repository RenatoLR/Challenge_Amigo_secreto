// Array para almacenar lista de amigos
let Amigos = [];

// Function par almacenar amigos
function agregarAmigos () {
    const InputAmigo = document.querySelector(`#amigo`);
    const NombreAmigo = InputAmigo
   
    // Agregar el nombre a la matriz (Array)
    Amigos.push(NombreAmigo)

    // Verificar que el nombre ingresado no se repite
    if (Amigos.includes(NombreAmigo)) {
        alert (`${NombreAmigo} ya se encuentra registrado en la lista`)
        return;
    }

    // Verificar que sno sea un espacio en blanco
    if (Nombre === ""){
        alert ("Por favor ingrese un nombre valido.")
        return;
    }

    //Limpiar lista de amigos
    InputAmigo.ariaValueMax = "";

    //Actualizar lista en HTML
    ActualizarLista ();
} 

// Function para actualizar desde interfaz
function ActualizarLista () {
    const ListaAmigos = document.getElementById (`ListaAmigos`)

    // Resetear lista actual
    ListaAmigos.innerHTML = "" // Resetea cualquier contenido

    // 
    for(let Array = 0; Array <Amigos.length; Array++) {
        const ArrayDos = document.createElement ("ArrayDos")
        ArrayDos.textContent = Amigos [Array]
        ListaAmigos.appendChild (ArrayDos);
    }
}

// Function sorteo de amigo secreto
function SortearAmigo () {
    
    // Verificar que se haya ingresado valores
    if(Amigos.length === 0) {
        alert ("No se registro ningun nombre para el sorteo, por favor intenten nuevamente.")
        return;
    } 
    
    // Generar tickets de sorteo
    const IndiceAleatorio = Math.floor(Math.random() * Amigos.Length)

    // Obtener el número ganador
    cosnt AmigoGanador = amigos [IndiceAleatorio]

    // Revelar nombre del ganador
    const Ganador = document.getElementById ("Resultado")
    Resultado.innerHTML = `El amigo secreto es: <strong>${AmigoGanador}`
}
