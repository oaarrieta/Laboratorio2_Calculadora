let ultimaOperacion = null;

function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('operacion').value;
    
    if(isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingrese números válidos");
        return;
    }
    
    let resultado = realizarOperacion(num1, num2, operacion);
    
    // Resultado y los mensajes adicionales
    document.getElementById('resultado').innerHTML = `
        <div>Resultado: ${resultado}</div>
        <div id="mensajeGracias" class="mensaje-adicional">¡GRACIAS POR USAR LA CALCULADORA BÁSICA DE OPERACIONES!</div>
        <div id="mensajeContinuar" class="mensaje-adicional">Si desea seguir realizando otras operaciones, por favor presiona el boton Limpiar y a continuación ingrese los siguientes numeros y seleccione  operación a realizar</div>
    `;
    
    ultimaOperacion = {
        num1: num1,
        num2: num2,
        operacion: operacion,
        resultado: resultado
    };
}

function realizarOperacion(num1, num2, operacion) {
    switch(operacion.toLowerCase()) {
        case "seleccione una operación":
            return "Selecciona una operación";
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if(num2 === 0) return "Error: División por cero";
            return (num1 / num2).toFixed(2);
        default:
            return "Operación no válida";
    }
}

function limpiar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacion').selectedIndex = 0;
    document.getElementById('resultado').innerHTML = "Resultado: ";

    document.getElementById('mensajeGracias')?.remove();
    document.getElementById('mensajeContinuar')?.remove();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnCalcular").addEventListener("click", calcular);
    document.getElementById("btnLimpiar").addEventListener("click", limpiar);
});