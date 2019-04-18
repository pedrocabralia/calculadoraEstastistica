
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

