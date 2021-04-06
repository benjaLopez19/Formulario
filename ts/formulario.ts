var formulario:any = document.getElementById("formulario");
var cuadro:any = document.getElementById("cuadro");
var msg:any = document.getElementById("msg");

var nombre:any = document.getElementById("nombres");
var apellido:any = document.getElementById("apellidos");
var rut:any = document.getElementById("rut");
var correo:any = document.getElementById("correo");
var telefono:any = document.getElementById("telefono");
var descripcion:any = document.getElementById("descripcion");
var checkbox:any = document.getElementsByClassName("box");
var radio:any = document.getElementsByClassName("year");

formulario.addEventListener("submit",function(e:any){
    e.preventDefault();
    var auxRut:string = rut.value;
    var auxDesc:string = descripcion.value;
    var flag:boolean=true;

    //telefono
    var auxTelInt:number = telefono.value;
    var auxTel:string = auxTelInt.toString();
    auxTelInt = auxTel.length;
    if(auxTelInt!=9){
        alert("Numero debe ser de 9 digitos");
        flag = false;
    }

    //rut
    if(auxRut.length>10||auxRut.length<9){
        flag=false;
        alert("tamano rut incorrecto");
    }
    for(var i=0; i<auxRut.length;i++ ){
        if(auxRut.charAt(i)=="."){
            alert("RUT no debe incluir puntos");
            flag = false;
            break;
        }
    }

    for(var i=0; i<(auxRut.length)-3;i++ ){
        if(isNaN(parseInt(auxRut.charAt(i)))){
            alert("Formato no incluye letras");
            flag=false;
        }
    }
    if(!(auxRut.charAt((auxRut.length)-2)=="-")){
        flag=false;
        alert("Solo debe haber un digito verificador");
    }
    if(isNaN(parseInt(auxRut.charAt((auxRut.length)-1)))){
        if(auxRut.charAt(auxRut.length-1)!="k"){
            alert("Caracter no puede ser un digito verificador");
            flag=false;
        }
    }
    //limite texto
    if(auxDesc.length>300){
        alert("Excede limite texto");
        flag=false;
    }

    if(flag){
        cuadro.style.display = "none";
        msg.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        msg.style.color = "red";
    }

});

function limpiarDatos(){
    nombre.value = "";
    apellido.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";
    descripcion.value = "";

    for(var i = 0; i <6; i++){
        checkbox[i].checked=false;
    }

    for(var i = 0; i <5; i++){
        radio[i].checked=false;
    }
}