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


 //calculando o total
     let total =  f1 + f2 + f3;

//fazendo O total aparecer na tela
      var label = document.querySelector("#labelTotal").innerHTML = total;
//calculando a frequencia relativa

    var fra1 = (f1/total) *100;
    var label1 = document.querySelector("#label1").innerHTML = fra1.toFixed(1);

    var fra2 = (f2/total) *100;
    var label2 = document.querySelector("#label2").innerHTML = fra2.toFixed(1);

    var fra3 = (f3/total) *100;
    var label3 = document.querySelector("#label3").innerHTML = fra3.toFixed(1);

    var totalFra = fra1 + fra2 + fra3;
    var labelTotalFra = document.querySelector("#labelTotalFra").innerHTML = totalFra.toFixed(1);
}

