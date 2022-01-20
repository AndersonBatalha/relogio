const spanHora = document.getElementsByClassName("horas")[0],
    spanMinuto = document.getElementsByClassName("minutos")[0],
    spanSegundos = document.getElementsByClassName("segundos")[0],
    spanDiaDaSemana = document.getElementsByClassName("dia-da-semana")[0],
    spanDia = document.getElementsByClassName("dia")[0],
    spanMes = document.getElementsByClassName("mes")[0],
    spanAno = document.getElementsByClassName("ano")[0];


const MILISSEGUNDOS_PARA_SEGUNDOS = 1000,
    MILISSEGUNDOS_PARA_MINUTOS = MILISSEGUNDOS_PARA_SEGUNDOS * 60,
    MILISSEGUNDOS_PARA_HORAS = MILISSEGUNDOS_PARA_MINUTOS * 60,
    MILISSEGUNDOS_PARA_DIAS = MILISSEGUNDOS_PARA_HORAS * 24,
    MILISSEGUNDOS_PARA_MESES = MILISSEGUNDOS_PARA_DIAS * 30,
    MILISSEGUNDOS_PARA_ANOS = MILISSEGUNDOS_PARA_MESES * 12;

const functions = {
    diasDaSemana: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    mesesDoAno: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
    formataNumero: (valor) => (valor < 10) ? `0${valor}` : `${valor}`,
    alteraValor: (elemento, valor) => {
        elemento !== undefined && (elemento.innerText = valor);
    },
    valorElemento: (elemento) => {
        return elemento !== undefined ? +elemento.innerText : 0;
    },
    preenche: function(segundo, minuto, hora, diaDaSemana, dia, mes, ano) {
        functions.alteraValor(spanSegundos, segundo);
        functions.alteraValor(spanMinuto, minuto);
        functions.alteraValor(spanHora, hora);
        functions.alteraValor(spanDiaDaSemana, diaDaSemana);
        functions.alteraValor(spanDia, dia);
        functions.alteraValor(spanMes, mes);
        functions.alteraValor(spanAno, ano);
    }
};
const now = new Date();

setInterval(() => {
    let now = new Date(),
        sec = functions.formataNumero(now.getSeconds()),
        minutes = functions.formataNumero(now.getMinutes()),
        hour = functions.formataNumero(now.getHours()),
        dayOfWeek = functions.diasDaSemana[now.getDay()],
        day = functions.formataNumero(now.getUTCDate()),
        month = functions.mesesDoAno[now.getMonth()],
        year = functions.formataNumero(now.getFullYear());
    console.log(60 - sec, 60 - minutes);

    functions.preenche(sec, minutes, hour, dayOfWeek, day, month, year);
}, MILISSEGUNDOS_PARA_SEGUNDOS);