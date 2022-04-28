let enviar = document.getElementById('enviar');
let nombre = document.getElementById('name');
let email = document.getElementById('email');
let comentario = document.getElementById('comentario');
let mostrar = document.getElementById('mostrar-contenido');
let borrar = document.getElementById('borrar');

borrar.addEventListener('click', borrarf);
enviar.addEventListener('click', almacenar);

let users = [];
console.log(users);

function almacenar(e) {
  e.preventDefault();
  let usuario = {
    nombre: nombre.value,
    email: email.value,
    comentario: comentario.value,
  };
  users.push(usuario);
  localStorage.setItem('users', JSON.stringify(users));
}

/*******MOSTRAR PANTALLA*******/
const mostrarPantalla = () => {
  let datos = JSON.parse(localStorage.getItem('users'));
  for (let i = 0; i < datos.length; i++) {
    mostrar.innerHTML += `<p class="mostrar">${datos[i].nombre}</p>`;
    mostrar.innerHTML += `<p class="mostrar">${datos[i].email}</p>`;
    mostrar.innerHTML += `<p class="mostrar">${datos[i].comentario}</p>`;
    // mostrar.innerHTML += '<button id="borra-indiv">Borra Uno</button>';

    /// mostrar.innerHTML += <button id='btn'>`Borrar${datos[i].nombre}`</button>;
  }
};
mostrarPantalla();
/************ BORRAR*****/
function borrarf() {
  localStorage.clear();
  //Te borras los datos que te muestra en el div
  mostrar.remove();
  //Te borra los datos de la consola
  console.clear();
}

// function borrarUno(){

//   for (let i = 0; i < datos.length; i++  )
// }

// let borrar-indiv = document.getElementById('borra-indiv');
// borrar-indiv.addEventListener('click', fBorrarUno);

// fBorrarUno (){
//   alert('Hola mundo');
// }
