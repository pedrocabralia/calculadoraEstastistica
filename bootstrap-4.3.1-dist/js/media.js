



//função para encontrar a media
function encontrarMedia()
{
    //Criando variáveis para pegar valores dos inputs dos fi e dos xi

    let x1 = parseInt(document.querySelector("#x1").value,10);
    let x2 = parseInt(document.querySelector("#x2").value,10);
    let x3 = parseInt(document.querySelector("#x3").value,10);
    let f1 = parseInt(document.querySelector("#f1").value,10);
    let f2 = parseInt(document.querySelector("#f2").value,10);
    let f3 =parseInt(document.querySelector("#f3").value,10);
    let media ;
    let total;

     
     //calculando o total
     total = (x1 * f1) +  (x2 * f2) + (x3 * f3); 

     //calculando a média
     let n = f1 + f2 + f3;
     media = total/n;

  //fazendo meda aparecer na tela

  var label = document.querySelector("#label").innerHTML = media.toFixed(2);

 



}
