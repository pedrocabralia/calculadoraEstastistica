





function tabela(){

     
    const numeroDeLinhas = document.getElementById('valorTabela').value
    const sumindoCard = document.getElementById( 'card');

    sumindoCard.classList.add('sumir');
    alert(numeroDeLinhas);
  
    
        // cria um novo elemento div 
        // e dá à ele conteúdo
        var divNova = document.createElement("div"); 
        var conteudoNovo = document.createTextNode("Olá, cumprimentos!"); 
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada 
      
        // adiciona o novo elemento criado e seu conteúdo ao DOM 
         
        document.body.insertBefore(divNova, card); 


}

const gerarTabela = document.querySelector('#gerarTabela');
gerarTabela.addEventListener('click',function(){


    tabela();
});
