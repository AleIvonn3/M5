"Taller: ¡Node.js para Novatos Aventureros!"
¡Manos a la Obra! Sigue las siguientes instrucciones para la elaboración de tu proyecto con Node.js y JavaScript.

Paso 1: ¡Preparando la Nave Espacial! (Instrucciones para la práctica)
Crea una carpeta: Llamémosla mi-exploracion-espacial. ¡Será la base de nuestra aventura!

Abre tu terminal: Navega hasta la carpeta que creaste.¡Inicia el viaje!

Ejecuta el comando npm init -y. Esto creará un archivo package.json con la información básica de nuestro proyecto.

Paso 2: ¡Construyendo el Registro Planetario!
Crea un archivo: Llamémoslo planetas.js. Aquí guardaremos los datos de nuestros planetas. ¡A registrar planetas!

Dentro de planetas.js, crea un array con objetos. Cada objeto representará un planeta y tendrá propiedades como nombre, descripcion y descubiertoEn.

const planetas = [
{
nombre: "Titán",
descripcion: "La luna más grande de Saturno, con lagos de metano.",
descubiertoEn: "1655"
},
{
nombre: "Próxima Centauri b",
descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
descubiertoEn: "2016"
}
// ¡Añade más planetas!
];

module.exports = planetas;
Paso 3: ¡Compartiendo Nuestros Descubrimientos!
Crea un nuevo archivo: Llamémoslo index.js. ¡Será el centro de comunicaciones de nuestra expedición! ¡Conectando con la base!

Dentro de index.js, importa el array de planetas desde planetas.js.

const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas
¡Enviando un reporte! Recorre el array de planetas e imprime la información de cada uno en la consola.
planetas.forEach(planeta => {
console.log(`¡Planeta ${planeta.nombre} descubierto!`);
console.log(`Descripción: ${planeta.descripcion}`);
console.log(`Descubierto en: ${planeta.descubiertoEn}`);
console.log('---');
});
Paso 4: ¡Automatizando el Despegue!
Abre package.json:

Busca la sección "scripts".

¡Configura un nuevo comando!

Añade un nuevo script llamado explorar. Este script ejecutará nuestro archivo index.js.
"scripts": {
"explorar": "node index.js"
},
Paso 5: ¡La Gran Revelación!
¡De vuelta a la terminal! Ejecuta el comando npm run explorar.
¡Observa la magia! Verás la información de tus planetas impresos en la consola.
¡Misión cumplida! ¡Felicidades, Explorador Espacial!
Has completado tu primer proyecto Node.js. ¡Ahora puedes registrar y compartir tus descubrimientos planetarios con el mundo!
