// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
    function procesarPedido(pedido) {
        // Sacar el primer elemento (nombre del cliente)
        const cliente = pedido.shift();
        
        // Añadir "bebida" al inicio del array
        pedido.unshift("bebida");
        
        // Añadir el nombre del cliente al final
        pedido.push(cliente);
        
        return pedido;
      } 
const pedido = ["Juan", "café", "leche"];
const pedidoProcesado = procesarPedido(pedido);
console.log(pedidoProcesado); // ["bebida", "café", "leche", "Juan"]
// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i]
        }
    }
    return suma
}let numeros = [1, 2, 3, 4, 5, 6]
console.log(sumarPares(numeros)) 

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Usamos el método every para comprobar si todas las palabras terminan con "a"
    return palabras.every(palabra => palabra.endsWith('a'));
}
const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    // Encontrar el índice de la palabra en el array
    const index = words.indexOf(word);
    
    // Verificar si la palabra fue encontrada
    if (index === -1) {
        // Si no se encuentra, devolver un array vacío
        return [];
    }
    
    // Usar el método slice para devolver todas las palabras después del índice encontrado
    return words.slice(index + 1);
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Recorremos cada fila de la matriz
    for (let i = 0; i < matrix.length; i++) {
        // Recorremos cada columna de la fila actual
        for (let j = 0; j < matrix[i].length; j++) {
            // Comparamos el elemento actual con "JavaScript"
            if (matrix[i][j] === "JavaScript") {
                // Devolvemos la posición si lo encontramos
                return [i, j];
            }
        }
    }
    // Si no encontramos "JavaScript", devolvemos [-1, -1]
    return [-1, -1];
}
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];
const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Inicializamos las variables con el primer elemento del array
    let minIndex = 0;
    let maxIndex = 0;
    let minPages = books[0];
    let maxPages = books[0];

    // Recorremos el array a partir del segundo elemento (índice 1)
    for (let i = 1; i < books.length; i++) {
        // Comparamos el elemento actual con minPages
        if (books[i] < minPages) {
            // Actualizamos minPages y minIndex
            minPages = books[i];
            minIndex = i;
        }
        // Comparamos el elemento actual con maxPages
        else if (books[i] > maxPages) {
            // Actualizamos maxPages y maxIndex
            maxPages = books[i];
            maxIndex = i;
        }
    }
    // Devolvemos los índices
    return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
