//importacion de elementos
var button = document.getElementById("btnCalcular");
var exportador = document.getElementById("btnExportar");
var importador = document.getElementById("openFile");
var validador = document.getElementById("btnValidar");

// metodo para realizar calculo unificado
button.onclick = function(){

    var pvalor = document.getElementById("pvalorcampo").value;
    var seleccion = document.getElementById("selOperacion");
        var selValor = seleccion.options[seleccion.selectedIndex].value;
    var svalor = document.getElementById("svalorcampo").value;

if(pvalor === "" || svalor === ""){
    alert("Error - Campos vacios");
    document.getElementById("pvalorcampo").focus();
}else{

    switch(selValor){

        case "+":
            var resultado = parseInt(pvalor) + parseInt(svalor); 
            break;
        case "-":
            var resultado = parseInt(pvalor) - parseInt(svalor); 
            break;
        case "*":
            var resultado = parseInt(pvalor) * parseInt(svalor); 
            break;
        case "/": 
            var resultado = parseInt(pvalor) / parseInt(svalor); 
            break;
               
    }

    var final = document.getElementById("resultadocampo").value = resultado;
    
    var historial = document.getElementById("historialcampo").value += pvalor + selValor + svalor + "=" + resultado+'\n';
    
   pvalor = null;
   svalor = null;
   resultado = null;
   historial = null;
}
    

};

// validacion para solo ingresar numeros
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   
   if (charCode > 31 && (charCode < 48 || charCode > 57))
    
      return false;
        
   return true;
   
};
// funcion para exportar el historial
exportador.onclick = function saveDynamicDataToFile() {

        var userInput = document.getElementById("historialcampo").value;
        
        var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "dynamic.txt");
    
};
//funcion para importar un archivo de texto
importador.onclick = function(){

    document.getElementById("openFile").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function(){
            document.getElementById("historialcampo").textContent = this.result;
        }
        fr.readAsText(this.files[0]);
    })

};

validador.onclick = function(){

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email = document.getElementById("emailVal");
    
    if (regexEmail.test(email.value)) {
        alert("Formato de Correo Valido")
    } else {
        alert("Formato de Correo Invalido")
    
    }

}

