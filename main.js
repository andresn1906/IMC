
// Bloque para llamar a las variables por su id y tomar su visualViewport, crear la función para calcular el IMC y los mensajes
function calcularImc(){
    const nombre = document.getElementById("tName").value;
    const peso = document.getElementById("nWeight").value;
    const altura = document.getElementById("nHeight").value;
    const imc = peso / (altura * altura);
    const result = document.getElementById("tResultado");
    const imagen = document.getElementById("imagen");
    result.innerHTML = `${nombre} su IMC es:  ${imc.toFixed(2)}`;

/* Bloque para validar los datos ingresados por el usuario a través 3 ifs, el primero verifica si los campos están vacíos, el segundo si se han ingresado valores númericos posibles y el tercer "if" contiene las acciones a realizar dependiendo del resultado del IMC que obtenga la persona.Bloque */
    if (!nombre ||!peso || !altura) {
        alert("Por favor, llene los espacios en blanco.");
        reiniciarImc(); 
        return;
    } 
    if ( altura === 0 || peso === 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, digite los valores correctamente.");
        reiniciarImc(); 
        return;
    }
    if (imc < 18.5) {
        result.innerHTML += "<br>Usted está bajo de peso.";
        imagen.src = 'images/bajopeso.png';
        imagen.style.display = "block";
    } else if (imc >= 18.5 && imc < 24.9) {
        result.innerHTML += "<br>Usted tiene un peso normal.";
        imagen.src = 'images/pesonormal.png';
        imagen.style.display = "block";
    } else if (imc >= 25 && imc < 29.9) {
        result.innerHTML += "<br>Usted tiene sobrepeso.";
        imagen.src = 'images/sobrepeso.png';
        imagen.style.display = "block";
    } else if (imc >= 30) {
        result.innerHTML += "<br>Usted tiene obesidad.";
        imagen.src = 'images/obesidad.png';
        imagen.style.display = "block";
    } else {
        result.innerHTML += "<br>Digite correctamente sus datos de peso/estatura.";
    }
    // Bloque para que una vez realizado las acciones del if y obtenido el resultado, se oculte el botón "Calcular" y se muestre el botón "Reiniciar".
    document.getElementById("calculate").style.display = "none";
    document.getElementById("restart").style.display = "inline";   
}   

/* Bloque para crear la función de Reiniciar IMC, dónde se llaman a las variables por su id y se les asigna un valor vacío, además de ocultar la imagen y los botones de calcular y reiniciar. */
function reiniciarImc() {
    document.getElementById("tName").value = "";
    document.getElementById("nAge").value = "";
    document.getElementById("nWeight").value = "";
    document.getElementById("nHeight").value = "";
    document.getElementById("tResultado").innerHTML = "";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("calculate").style.display = "inline";
    document.getElementById("restart").style.display = "none";
}