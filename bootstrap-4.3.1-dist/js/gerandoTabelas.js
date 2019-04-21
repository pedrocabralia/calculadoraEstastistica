





function tabela(){

     
    const numeroDeLinhas = document.getElementById('valorTabela').value
    const sumindoCard = document.getElementById( 'card');

    sumindoCard.classList.add('sumir');
//criando tabela
    var table = document.createElement('table');
     table.setAttribute('class','table table-bordered')
     table.setAttribute('id','table')
    var tbody = document.createElement('tbody');
    var xi = document.createElement('th');
    var fi = document.createElement('th');
for(let i = 0; i < numeroDeLinhas; i++){
    let tr = document.createElement('tr');
    tr.setAttribute('scope','col')

    // 1
    let td = document.createElement('td');
   
    let span = document.createElement('span');
    span.innerHTML = 'teste '+(i+1);
    td.appendChild(span);
    tr.appendChild(td);

    // 2
    td = document.createElement('td');
  
    span = document.createElement('span');
    span.innerHTML = 'texto '+(i+1);
    td.appendChild(span);
    tr.appendChild(td);

    tbody.appendChild(tr);
}
table.appendChild(tbody);

document.body.appendChild(table);


}

const gerarTabela = document.querySelector('#gerarTabela');
gerarTabela.addEventListener('click',function(){


    tabela();
});
