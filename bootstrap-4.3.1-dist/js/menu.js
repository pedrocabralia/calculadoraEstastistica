

function iniciaModal(modalId){

    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');


}

const spam1 = document.querySelector('#spam');
spam1.addEventListener('click',function(){


    iniciaModal('modal');


});