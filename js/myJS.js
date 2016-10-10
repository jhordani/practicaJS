/*alert('Hola mundo JS');
alert('Hola que tal');*/

/* primera clase
var a = 5;
var decimal = 2.5;
var texto = "hola";
var estado = false;
var resultado = 0;

function sumaA() {
    alert(5 + 8);
}

function sumaB(a, b) {
    return (a + b);
}

function sumando(q) {
    alert(q);

}
function multiplicar(a, b) {
    resultado = a * b;
    document.write("resultado=" + resultado);
}

*************************************  */

/* ********calculadora******* */

/* obtener valor wen la caja de texton */


function suma() {
   var a = document.getElementById("numA").value*1;
   var b = document.getElementById("numB").value*1;

//  document.write("<h1>El resultado es: "+(a+b)+ "</h1>"); //

    document.getElementById("resultado").innerHTML = " <p> resultado: "+(a+b)+ "</p>";

}
function limpiar() {
   var a = document.getElementById("numA").value = "";
   var b = document.getElementById("numB").value = "";
   document.getElementById("resultado").innerHTML = "";
}


function resta() {
   var a = document.getElementById("numA").value*1;
   var b = document.getElementById("numB").value*1;

    //document.write("<h1>El resultado es: "+(a-b)+ "</h1>");//
     document.getElementById("resultado").innerHTML = " <p> resultado: "+(a-b)+ "</p>";
}

function multiplicacion() {
   var a = document.getElementById("numA").value*1;
   var b = document.getElementById("numB").value*1;

    //document.write("<h1>El resultado es: "+(a*b)+ "</h1>"); //
     document.getElementById("resultado").innerHTML = " <p> resultado: "+(a*b)+ "</p>";

}

function divicion() {
   var a = document.getElementById("numA").value*1;
   var b = document.getElementById("numB").value*1;

    // document.write("<h1>El resultado es: "+(a/b)+ "</h1>"); //
     document.getElementById("resultado").innerHTML = " <p> resultado: "+(a/b)+ "</p>";

}


/* ******************************* */


/* **********************/

function over() {
    document.getElementById("accion").innerHTML = "<h3> Codigo Ejecutando!! </h3>";
}

function out() {
    document.getElementById("accion").innerHTML = "<h3> Codigo del hacker!! </h3>";
}


