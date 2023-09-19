function tocaSomPom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();


}


    

const listaDeTeclas = document.querySelectorAll('.tecla');
  
let contador = 0;

while (contador < listaDeTeclas.length){

listaDeTeclas [contador].onclick = tocaSomPom;

contador = contador + 1;

console.log(contador);

}

