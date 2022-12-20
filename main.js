function tocasom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if( elemento === null){
    alert('elemento não encontrado');
    }

    if(elemento != null) {

        if(elemento.localName === 'audio'){
            elemento.play();

        }
    }


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

    tecla.onkeydown = function (evento){
        console.log(evento.code === 'Enter' || evento.code === 'Space');
        if( evento.code == "Enter" || evento.code == "Space"){
        tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    console.log(contador);

}

