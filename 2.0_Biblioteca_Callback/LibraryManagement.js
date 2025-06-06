// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("---------------------------------");
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro "${titulo}" agregado correctamente.`);
    }, 1500);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        const libro = biblioteca.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
        } else {
            console.log(`Libro "${titulo}" no encontrado.`);
        }
    }, 2000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);

agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", "Novela", true);
agregarLibro("La sombra del viento", "Carlos Ruiz Zafón", "Misterio", false);
//agregarLibro("Rayuela", "Julio Cortázar", "Ficción", true);
//agregarLibro("Fahrenheit 451", "Ray Bradbury", "Ciencia ficción", false);
//agregarLibro("Orgullo y prejuicio", "Jane Austen", "Romance", true);
//agregarLibro("El Hobbit", "J.R.R. Tolkien", "Fantasía", false);
//agregarLibro("Crónica de una muerte anunciada", "Gabriel García Márquez", "Novela", true);
//agregarLibro("Matar a un ruiseñor", "Harper Lee", "Drama", false);
//agregarLibro("El nombre de la rosa", "Umberto Eco", "Misterio", true);
//agregarLibro("Los juegos del hambre", "Suzanne Collins", "Distopía", false);

setTimeout(() => {
    mostrarLibros();
}, 8000);
