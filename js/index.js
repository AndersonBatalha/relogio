const spanHorario = document.querySelector('.horario h1'),
    spanData = document.querySelector('.data h2');

const MILISSEGUNDOS_PARA_SEGUNDOS = 1000;

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const functions = {
    formataNumero: (valor) => (valor < 10) ? `0${valor}` : `${valor}`,
    alteraValor: (elemento, valor) => {
        elemento !== null && (elemento.innerText = valor);
    },
    valorElemento: function(elemento) {
        return elemento !== null ? elemento.innerText : "";
    },
    data: function(now) {
        let horario = now.toLocaleTimeString(),
            diaDaSemana = now.getDay(),
            dia = now.getDate(),
            mes = now.getMonth(),
            ano = now.getFullYear(),
            dataCompleta = `${diasDaSemana[diaDaSemana]}, ${this.formataNumero(dia)} de ${mesesDoAno[mes]} de ${ano}`,
            dataAtual = this.valorElemento(spanData);

        this.alteraValor(spanHorario, horario);
        dataAtual !== dataCompleta && this.alteraValor(spanData, dataCompleta);
    }
};

let now = new Date();
functions.data(now);

setInterval(() => {
    let now = new Date();
    functions.data(now);
}, MILISSEGUNDOS_PARA_SEGUNDOS);