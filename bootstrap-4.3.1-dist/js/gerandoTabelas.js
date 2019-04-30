





function tabela(){

     
    const numeroDeLinhas = document.getElementById('valorTabela').value
    const sumindoCard = document.getElementById( 'card');

    sumindoCard.classList.add('sumir');
//criando tabela
    var table = document.createElement('table');
     table.setAttribute('class','table table-bordered')
     table.setAttribute('id','table')
    var tbody = document.createElement('tbody');
    
for(let i = 0; i < numeroDeLinhas; i++){
    let tr = document.createElement('tr');
    tr.setAttribute('scope','col')

    // lado esquerdo("XI")
    
    let td = document.createElement('td');
   
    let span = document.createElement('span');
    span.innerHTML = '<input type="text" name="xi">';
    td.appendChild(span);
    tr.appendChild(td);

    // 2
    td = document.createElement('td');
  
    span = document.createElement('span');
    span.innerHTML = '<input type="text" name="fi">';
    td.appendChild(span);
    tr.appendChild(td);

    tbody.appendChild(tr);
}
let span1 = document.createElement('div');
span1.innerHTML = '<button type="button" class="btn btn-primary" id = "Calcular">Calcular média</button>';
tbody.appendChild(span1);
table.appendChild(tbody);
document.body.appendChild(table);



}

const gerarTabela = document.querySelector('#gerarTabela');
gerarTabela.addEventListener('click',function(){


    tabela();
});
