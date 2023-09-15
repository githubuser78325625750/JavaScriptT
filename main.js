function tocaSomPom () {

    document.querySelector('#som_tecla_pom').play();


}


    

const listaDeTeclas = document.querySelectorAll('.tecla');
  
let contador = 0;

while (contador ){

listaDeTeclas [0].onclick = tocaSomPom;

}

