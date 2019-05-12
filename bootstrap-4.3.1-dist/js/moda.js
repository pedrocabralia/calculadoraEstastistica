



//função para encontrar a moda
function encontrarModa()
{
    //Criando variáveis para pegar valores dos inputs dos fi e dos xi

let x1 = parseInt(document.querySelector("#x1").value,10);
let x2 = parseInt(document.querySelector("#x2").value,10);
let x3 = parseInt(document.querySelector("#x3").value,10);
let f1 = parseInt(document.querySelector("#f1").value,10);
let f2 = parseInt(document.querySelector("#f2").value,10);
let f3 =parseInt(document.querySelector("#f3").value,10);

    let moda ; 
     if(f1 > f2 && f1 > f3){

           moda = x1;

     }

  //fazendo moda aparecer na tela

  var label = document.querySelector("#label").innerHTML = moda;

 



}
