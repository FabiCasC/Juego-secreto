let numeroSecreto = 0;
let numerodeintentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento(){
    let numerodeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numerodeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número secreto en ${numerodeintentos} ${(numerodeintentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute("disabled");
    }else{
        //el usuario no acerto

        if (numerodeUsuario > numeroSecreto){

            asignarTextoElemento("p", "El número secreto es menor");
        }else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        numerodeintentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteado)
    //Si ya sorteamos todos los numeros
    //Ctrl + F para verificar y buscar datos en nuestro programa
    if (listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento("p", "Ya has sorteado todos los números posibles")
    }else{
        //Sie el numero generado esta incluido en la lista
        if (listaNumerosSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteado.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function condicionesiniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un número del 1 al " + numeroMaximo);
    numeroSecreto=generarNumeroSecreto();
    numerodeintentos = 1;
    limpiarCaja();

}
function reiniciarJuego(){
    //limpiar la caja
    //indicar el mensaje de números
    //generar el numero aleatorio 
    //inicializar el número de intentos
    condicionesiniciales();
    //deshabilitar
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesiniciales();
