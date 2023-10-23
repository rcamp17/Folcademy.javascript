
// Agregar dos clases nuevas
document.getElementById("modify").classList.add("mision");
document.querySelector(".modify").classList.add("correo");
document.querySelector(".row.bg-primary.bg-opacity-25.p-4").classList.add("about-us");

// Cambiar el texto de la misión de la empresa y el correo de contacto
let mision = document.querySelector(".mision").textContent = "Nuestra misión es impulsar la innovación y la transformación digital en todos los sectores. Nos dedicamos a proporcionar soluciones de software de vanguardia que resuelvan desafíos complejos y generen un impacto positivo en el mundo.";
let email = document.querySelector(".correo").textContent = "hola@infochechines.com";

// Obtener elementos por ID
const misiontext = document.getElementById("modify");
const correo = document.querySelector(".modify");

//Crear una nueva sección utilizando párrafos como mínimo
let nuevaSeccion = document.createElement('div')
nuevaSeccion.classList.add("new-section");
let aboutSection = document.querySelector('.about-us')


let imagen = document.createElement("img");
imagen.src = "https://i.pinimg.com/564x/42/8a/84/428a842973de218b0e73a00c2ac152d8.jpg"
let text1 = document.createElement("p");
text1.textContent = "Bienvenido a Chechines Soft. Somos líderes en desarrollo de software.";
let text2 = document.createElement("p");
text2.textContent = "Nuestra pasión es crear soluciones tecnológicas que impulsen tu negocio.";

aboutSection.appendChild(nuevaSeccion)
nuevaSeccion.appendChild(imagen)
nuevaSeccion.appendChild(text1)
nuevaSeccion.appendChild(text2)

//Eliminar facebook
document.getElementById("facebook").remove();



//Stilos
nuevaSeccion.style.backgroundColor = "white";
imagen.style.height = "350px";

text1.style.fontFamily = "Arial, sans-serif"; 
text1.style.fontSize = "16px"; 
text1.style.color = "blue";

text2.style.fontFamily = "Arial, sans-serif"; 
text2.style.fontSize = "16px"; 
text2.style.color = "green";