
//iniciando modal de média aritimética
function iniciaModal(modalId){

        const modal = document.getElementById(modalId);
        modal.classList.add('mostrar');
}

const spam1 = document.querySelector('#spam');
spam1.addEventListener('click',function(){
      iniciaModal('modal');
});

//Finalizando modal aritimetica

function finalizaModal(modalId){

    
    const modal = document.getElementById(modalId);
    modal.classList.remove('mostrar');
}

const fechar = document.querySelector('.fechar');
   fechar.addEventListener('click',function(){


    finalizaModal('modal');
    
});

//modal moda

function modalModa(moda){


    var modal = document.getElementById(moda);
    moda.classList.add('mostrarModa');

}

const spam2 = document.querySelector('#spam2');
spam2.addEventListener('click',function(){
      iniciaModal('moda');
});


//Finalizando modal moda 

function finalizaModal(moda){

    
    var  moda = document.getElementById(moda);
    moda.classList.remove('mostrar');
}

const fecharModa = document.querySelector('.fecharModa');
   fecharModa.addEventListener('click',function(){


    finalizaModal('moda');
    
});