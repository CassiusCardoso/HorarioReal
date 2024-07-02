const h1 = document.querySelector('.container h1');

// Instanciando a data
const dataAtual = new Date();

function diaSemanaText(diaSemana) {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

    return diasSemana[diaSemana];
}

function mesTexto(numeroMes){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    
    return meses[numeroMes];
}

function horaFormatada(num){
    return num >= 10 ? num : `0${num}`
}

function criarData(dataAtual){
    const diaSemana = dataAtual.getDay();
    const numeroMes = dataAtual.getMonth();
    
    const nomeDia = diaSemanaText(diaSemana);
    const nomeMes = mesTexto(numeroMes);

    return `${nomeDia}, ${dataAtual.getDate()} de ${nomeMes}` +
    ` de ${dataAtual.getFullYear()} - ` +
    `${horaFormatada(dataAtual.getHours())}:${horaFormatada(dataAtual.getMinutes())}`
}

console.log(dataAtual);
h1.innerHTML = criarData(dataAtual);
