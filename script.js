let pessoal = {
    "ALEXANDER DAMITZ PINHEIRO": {
        "url": "./img/damitz.jpg",
        "tipo": "CG",
        "guerra": "DAMITZ"
    },
    "ANA LIVIA MATOS MUNIZ": {
        "url": "./img/ana.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "ANA LIVIA"
    },
    "BRUNO CAMACHO BURIN": {
        "url": "./img/burin.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "BURIN"
    },
    "CARLOS HENRICCO RABELO DE QUEIROZ": {
        "url": "./img/queiroz.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "QUEIROZ"
    },
    "DANIEL AMBROZIO BRETHERICK MARQUES": {
        "url": "./img/bretherick.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "BRETHERICK"
    },
    "DANIEL BATISTA CUADROS": {
        "url": "./img/pontes.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "CUADROS"
    },
    "FELIPE KNÖLLER NUNES": {
        "url": "./img/knöller.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "KNÖLLER"
    },
    "FELIPE LINS DOS SANTOS": {
        "url": "./img/felipe.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "FELIPE SANTOS"
    },
    "FERNANDO VICTOR CORREA LIMA GOMES": {
        "url": "./img/gomes.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "GOMES"
    },
    "GABRIEL DE OLIVEIRA VIEGAS": {
        "url": "./img/viegas.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "VIEGAS"
    },
    "GABRIEL NÓBREGA DE BRITO RAMOS": {
        "url": "./img/nóbrega.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "NÓBREGA"
    },
    "GIULIO BRONSON SIQUEIRA DE OLIVEIRA": {
        "url": "./img/bronson.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "BONSON"
    },
    "GUSTAVO EWBANK RODRIGUES DANON": {
        "url": "./img/danon.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "DANON"
    },
    "JOÃO PEDRO FRANCISCO CARUSO PEDROSO": {
        "url": "./img/caruso.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "CARUSO"
    },
    "JOSEPH INÁCIO VIEIRA OLIVEIRA GOMES": {
        "url": "./img/joseph.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "JOSEPH"
    },
    "LUCAS PINAFI CARVALHO": {
        "url": "./img/pinafi.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "PINAFI"
    },
    "MATEUS LIMA SILVEIRA": {
        "url": "./img/mateus.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "MATHEUS LIMA"
    },
    "MATHEUS ANDRADE BARRETO": {
        "url": "./img/andrade.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "ANDRADE"
    },
    "PAMELLA ATANES SILVA": {
        "url": "./img/pamella.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "PAMELLA"
    },
    "RAFAEL CANGUSSÚ FERREIRA": {
        "url": "./img/cangussú.jpg",
        "tipo": "CFG-RESERVA",
        "guerra": "CANGUSSÚ"

    },
    "RAFAEL CAVALCANTE TIMBÓ": {
        "url": "./img/timbó.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "TIMBÓ"
    },
    "RAFAEL PONTES TENÓRIO LIMA": {
        "url": "./img/cuadros.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "PONTES"
    },
    "RENATO DA PAIXÃO ALVES": {
        "url": "./img/paixão.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "PAIXÃO"
    },
    "RICHARD DE CARVALHO GONÇALVES MELLO": {
        "url": "./img/richard.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "RICHARD"
    },
    "SAMUEL BARBOSA E SILVA": {
        "url": "./img/barbosa.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "BARBOSA"
    },
    "THIAGO OLIVEIRA JUCA VASCONCELOS": {
        "url": "./img/vasconcelos.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "VASCONCELOS"
    },
    "VITOR EDUARDO PINHEIRO DO NASCIMENTO": {
        "url": "./img/nascimento.jpg",
        "tipo": "CFG-ATIVA",
        "guerra": "NASCIMENTO"
    }
}

const listaPessoal = [];
console.log(listaPessoal);
for (let pessoa in pessoal) {
    listaPessoal.push(pessoal[pessoa]);
}
criarTela();

function popularCard(telaCards, pessoa) {
    const url = pessoa.url;
    const guerra = pessoa.guerra;
    const tipo = pessoa.tipo;
    console.log(pessoa);
    telaCards.innerHTML += `
        <div class="card">
            <img src="${url}" alt="Pessoa 1">
            <h3>${guerra}</h3>
            <p>${tipo}</p>
        </div>
        `
}

function criarLinha(linha, pessoas) {
    linha.innerHTML += `<main class="linha">`
    for (let pessoa of pessoas) {
        const elementsClass = document.getElementsByClassName("linha");
        popularCard(elementsClass[elementsClass.length - 1], pessoa);
    }
    linha.innerHTML += `</main><br>`
}

function criarTela() {
    const linha = document.getElementById('cards');
    for (let i = 0; i < 5; i++) {
        criarLinha(linha, [
            listaPessoal[5 * i],
            listaPessoal[5 * i + 1],
            listaPessoal[5 * i + 2],
            listaPessoal[5 * i + 3],
            listaPessoal[5 * i + 4]
        ]);
    }
    criarLinha(linha, [
        listaPessoal[25], listaPessoal[26]
    ]);
}

const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.toggle('selected');
    });
}

const exportarCsvBtn = document.getElementById('exportar-csv');
exportarCsvBtn.addEventListener('click', function () {
    let selectedCards = [];
    let unselectedCards = [];
    const allCards = document.querySelectorAll('.card');
    const data = document.getElementById('dia');
    const hora = document.getElementById('hora');
    const local = document.getElementById('local');

    allCards.forEach(card => {
        const guerra = card.querySelector('h3').innerText;
        const tipo = card.querySelector('p').innerText;
        if (card.classList.contains('selected')) {
            selectedCards.push({ guerra, tipo });
        } else {
            unselectedCards.push({ guerra, tipo });
        }
    });
    let csv = "data:text/csv;charset=utf-8,";
    csv += "Data,Hora,Local\n";
    csv += `${data.value},${hora.value},${local.value}\n`;
    csv += "Situacao,Guerra,Tipo\n";
    selectedCards.forEach(card => {
        csv += `PRESENTE,${card.guerra},${card.tipo}\n`;
    });
    unselectedCards.forEach(card => {
        csv += `FALTA,${card.guerra},${card.tipo}\n`;
    });
    const encodedUri = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "cartoes.csv");
    document.body.appendChild(link);
    link.click();
});



function filtrarPorTipo(tipoSelecionado) {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        const tipoElemento = cards[i].querySelector('p').innerText;
        if (tipoSelecionado === 'Todos' || tipoSelecionado === tipoElemento) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

const data = document.getElementById('dia').value;

// Adiciona o manipulador de eventos para o elemento select
const tipoSelect = document.getElementById('tipo-select');
tipoSelect.addEventListener('change', function () {
    filtrarPorTipo(this.value);
});