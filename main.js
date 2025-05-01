

function calcularImc(){
    const nombre = document.getElementById("tName").value;
    const peso = document.getElementById("nWeight").value;
    const altura = document.getElementById("nHeight").value;
    const imc = peso / (altura * altura);
    const result = document.getElementById("tResultado");
    const imagen = document.getElementById("imagen");

    result.innerHTML = `${nombre} su IMC es:  ${imc.toFixed(2)}`;

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
    document.getElementById("calculate").style.display = "none";
    document.getElementById("restart").style.display = "inline";   
}   

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