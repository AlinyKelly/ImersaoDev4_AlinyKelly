function calcularMedia(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1+nota2+nota3)/3;
    
    if(nota1 > 10 || nota2 > 10 || nota3 > 10){
        alert("Nota máxima deve ser 10");
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0){
        alert("Nota mínima deve ser 0");
    } else {
        if(media == 10){
            document.querySelector('.resultado').innerHTML = `Parabéns! Você é 10 e está aprovado.`;
        } else if(media >= 6){
            document.querySelector('.resultado').innerHTML = `Aprovado.`;
        } else if(media < 6 && media >= 4){
            document.querySelector('.resultado').innerHTML = `Tente outra vez. Você está de Recuperação.`;
        } else {
            document.querySelector('.resultado').innerHTML = `Infelizmente, você está Reprovado.`;
        }
    }
}