var fotoMostrada = "white";

function miFuncion(){
    var imagen = document.getElementById("foto");

    if(fotoMostrada=="white"){
        
        imagen.src="./imgs/white.svg";
        fotoMostrada="dark";
    }else{
        imagen.src="./imgs/dark.jpg";
        fotoMostrada="white";
    }
}

