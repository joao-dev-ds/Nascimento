var dia_semana = [
    "um domingo", "uma segunda-feira", "uma terça-feira",
    "uma quarta-feira", "uma quinta-feira", "uma sexta-feira", "um sábado"
];
          
var nome_mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function calcularIdade() {
    var d_ani = document.getElementById("txtdia").value;
    var m_ani = document.getElementById("txtmes").value;
    var a_ani = document.getElementById("txtano").value;

    // Validação do dia
    if (isNaN(d_ani) || d_ani === "") {
        alert("O dia deve ser um número válido!");
        return;
    }
    d_ani = parseInt(d_ani);
    if (d_ani < 1 || d_ani > 31) {
        alert("O dia deve ser entre 1 e 31!");
        return;
    }

    // Validação do mês
    if (isNaN(m_ani) || m_ani === "") {
        alert("O mês deve ser um número válido!");
        return;
    }
    m_ani = parseInt(m_ani);
    if (m_ani < 1 || m_ani > 12) {
        alert("O mês deve ser entre 1 e 12!");
        return;
    }

    // Validação do ano
    if (isNaN(a_ani) || a_ani === "" || a_ani.length !== 4) {
        alert("Digite o ano com 4 dígitos!");
        return;
    }
    a_ani = parseInt(a_ani);

    // Validação do dia de acordo com o mês (fevereiro/bissexto)
    var diasNoMes;
    if (m_ani === 1 || m_ani === 3 || m_ani === 5 || m_ani === 7 || m_ani === 8 || m_ani === 10 || m_ani === 12) {
        diasNoMes = 31;
    } else if (m_ani === 4 || m_ani === 6 || m_ani === 9 || m_ani === 11) {
        diasNoMes = 30;
    } else {
        // Fevereiro: verifica se o ano é bissexto
        var bissextoParaFevereiro = (a_ani % 4 === 0 && a_ani % 100 !== 0) || (a_ani % 400 === 0);
        diasNoMes = bissextoParaFevereiro ? 29 : 28;
    }

    if (d_ani > diasNoMes) {
        alert("O mês " + nome_mes[m_ani - 1] + " não tem o dia " + d_ani + "!");
        return;
    }

    // Data atual
    var hoje = new Date();
    var d_hoj = hoje.getDate();
    var m_hoj = hoje.getMonth() + 1;
    var a_hoj = hoje.getFullYear();

    var elMensagem = document.getElementById("mensagem");
    if (d_hoj === d_ani && m_hoj === m_ani) {
        elMensagem.innerText = "P A R A B É N S...";
        elMensagem.classList.add("visivel");
    } else {
        elMensagem.classList.remove("visivel");
    }

    // Cálculo da idade
    var idade = a_hoj - a_ani;
    if (m_ani > m_hoj || (m_ani === m_hoj && d_ani > d_hoj)) {
        idade--;
    }
    document.getElementById("txtidade").value = idade;

    // Data de nascimento para obter dia da semana
    var dataNasc = new Date(a_ani, m_ani - 1, d_ani);
    document.getElementById("txtdia_semana").value = dia_semana[dataNasc.getDay()];
    document.getElementById("MostrarMes").value = nome_mes[m_ani - 1];

    // Verificar se o ano é bissexto
    var ehBissexto = (a_ani % 4 === 0 && a_ani % 100 !== 0) || (a_ani % 400 === 0);
    document.getElementById("txtano_bissexto").value = ehBissexto ? "Sim" : "Não";

    // Verificação do Signo
    var imgSigno = document.getElementById("signo");
    var txtSigno = document.getElementById("txtsigno");
    var nomeSigno = "";
    var caminhoImg = "";

    if ((d_ani >= 20 && m_ani === 1) || (d_ani <= 18 && m_ani === 2)) {
        nomeSigno = "Aquário"; caminhoImg = "img/aquario.jpg";
    } else if ((d_ani >= 19 && m_ani === 2) || (d_ani <= 20 && m_ani === 3)) {
        nomeSigno = "Peixes"; caminhoImg = "img/peixes.jpg";
    } else if ((d_ani >= 21 && m_ani === 3) || (d_ani <= 19 && m_ani === 4)) {
        nomeSigno = "Áries"; caminhoImg = "img/aries.jpg";
    } else if ((d_ani >= 20 && m_ani === 4) || (d_ani <= 20 && m_ani === 5)) {
        nomeSigno = "Touro"; caminhoImg = "img/touro.jpg";
    } else if ((d_ani >= 21 && m_ani === 5) || (d_ani <= 20 && m_ani === 6)) {
        nomeSigno = "Gêmeos"; caminhoImg = "img/gemeos.jpg";
    } else if ((d_ani >= 21 && m_ani === 6) || (d_ani <= 22 && m_ani === 7)) {
        nomeSigno = "Câncer"; caminhoImg = "img/cancer.jpg";
    } else if ((d_ani >= 23 && m_ani === 7) || (d_ani <= 22 && m_ani === 8)) {
        nomeSigno = "Leão"; caminhoImg = "img/leao.jpg";
    } else if ((d_ani >= 23 && m_ani === 8) || (d_ani <= 22 && m_ani === 9)) {
        nomeSigno = "Virgem"; caminhoImg = "img/virgem.jpg";
    } else if ((d_ani >= 23 && m_ani === 9) || (d_ani <= 22 && m_ani === 10)) {
        nomeSigno = "Libra"; caminhoImg = "img/libra.jpg";
    } else if ((d_ani >= 23 && m_ani === 10) || (d_ani <= 21 && m_ani === 11)) {
        nomeSigno = "Escorpião"; caminhoImg = "img/escorpiao.jpg";
    } else if ((d_ani >= 22 && m_ani === 11) || (d_ani <= 21 && m_ani === 12)) {
        nomeSigno = "Sagitário"; caminhoImg = "img/sagitario.jpg";
    } else {
        nomeSigno = "Capricórnio"; caminhoImg = "img/capricornio.jpg";
    }

    // Exibe nome e ativa estilos CSS via classe
    txtSigno.textContent = nomeSigno;
    txtSigno.classList.add("ativo");

    imgSigno.src = caminhoImg;
    imgSigno.alt = nomeSigno;
    imgSigno.classList.add("ativo");
}

// Função para resetar imagens e textos usando remoção de classe
function limparSigno() {
    var imgSigno = document.getElementById("signo");
    var txtSigno = document.getElementById("txtsigno");
    var elMensagem = document.getElementById("mensagem");

    imgSigno.src = "";
    imgSigno.alt = "";
    imgSigno.classList.remove("ativo");

    txtSigno.textContent = "";
    txtSigno.classList.remove("ativo");

    if (elMensagem) {
        elMensagem.classList.remove("visivel");
    }
}