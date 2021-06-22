// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener('click', function() { 
    let G = document.querySelector('#constante').value;
    let M1 = document.querySelector('#massa1').value;
    let M2 = document.querySelector('#massa2').value;
    let D = document.querySelector('#distancia').value;
    d2 = D*D;
    let resultado = G.split("e")[0]*M1*M2/d2;
    document.querySelector("#resultado").value =resultado*Math.exp( G.split("e")[1]);
});