function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}



const ListaDeTeclas = document.querySelectorAll('.tecla');




// para
for(let contador = 0 ;contador < ListaDeTeclas.length; contador ++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);
    
    tecla.onclick = function(){
        tocasom(idAudio);
    }

    console.log(contador);

}

