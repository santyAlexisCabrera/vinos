//variable que mantiene el estado del menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcultar(){
    if(invisible){
        document.getElementById("nav").classList ="";
        menuVisible = false; 
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true; 
    }
}

//funcion para ocultar el menu cuando se selecciona una opcion
function selecciona(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}