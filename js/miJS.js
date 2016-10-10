function fondorojo() {
    document.getElementById("cuadro").innerHTML = "<div style='background:red; width: 100px; height:100px;'  onmouseover="fondorojo()" onmouseout="fondoazul()" </div>";
}

function fondoazul() {
    document.getElementById("cuadro").innerHTML = "<div style='background:blue; width: 100px; height:100px;'  onmouseover='fondorojo()' onmouseout='fondoazul()' </div>";
}


/*****Usando la funcion confir */

function pregunta(){
   var respuesta = confirm("¡pomprendiste llava scripot?");
    alert(respuesta);
}
