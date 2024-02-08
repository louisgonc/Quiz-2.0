const perguntasNaruto = [
  {
    pergunta: "Qual é o nome completo do protagonista de Naruto?",
    respostas: [
      "Naruto Uzumaki",
      "Naruto Namikaze",
      "Naruto Hatake",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o primeiro mentor de Naruto?",
    respostas: [
      "Kakashi Hatake",
      "Jiraiya",
      "Iruka Umino",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do clã de Sasuke?",
    respostas: [
      "Clã Senju",
      "Clã Uchiha",
      "Clã Hyuga",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o sensei do Time 7?",
    respostas: [
      "Kakashi Hatake",
      "Jiraiya",
      "Orochimaru",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do irmão mais velho de Sasuke?",
    respostas: [
      "Itachi Uchiha",
      "Madara Uchiha",
      "Shisui Uchiha",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do pai de Naruto?",
    respostas: [
      "Minato Namikaze",
      "Tobirama Senju",
      "Hashirama Senju",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do jutsu de transformação de Naruto?",
    respostas: [
      "Rasengan",
      "Chidori",
      "Kage Bunshin no Jutsu",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é conhecido como 'O Sábio dos Seis Caminhos'?",
    respostas: [
      "Madara Uchiha",
      "Hagoromo Otsutsuki",
      "Tobirama Senju",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a habilidade especial de Kakashi Hatake?",
    respostas: [
      "Sharingan",
      "Byakugan",
      "Rinnegan",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o criador da Aldeia da Folha?",
    respostas: [
      "Tobirama Senju",
      "Madara Uchiha",
      "Hashirama Senju",
    ],
    correta: 2
  },
];

let corretas = new Set();

function reiniciarTeste() {
  corretas.clear();
  const respostas = document.querySelectorAll('input[type="radio"]');
  respostas.forEach(resposta => {
    resposta.checked = false;
  });
  // Recriar o botão "Exibir Resultado"
  const divBotoes = document.querySelector('#botoes');
  divBotoes.innerHTML = '';
  const btnResultado = document.createElement('button');
  btnResultado.textContent = 'Exibir Resultado';
  btnResultado.onclick = exibirResultado;
  divBotoes.appendChild(btnResultado);
}
function exibirResultado() {
  alert(`Você acertou ${corretas.size} de ${perguntasNaruto.length} perguntas.`);
  const btnReiniciar = document.createElement('button');
  btnReiniciar.textContent = 'Reiniciar Teste';
  btnReiniciar.onclick = reiniciarTeste;
  const divBotoes = document.querySelector('#botoes');
  divBotoes.innerHTML = '';
  divBotoes.appendChild(btnReiniciar);
}

const btnResultado = document.createElement('button');
btnResultado.textContent = 'Exibir Resultado';
btnResultado.onclick = exibirResultado;

const btnReiniciar = document.createElement('button');
btnReiniciar.textContent = 'Reiniciar Teste';
btnReiniciar.onclick = reiniciarTeste;

const divBotoes = document.querySelector('#botoes');
divBotoes.appendChild(btnResultado);
divBotoes.appendChild(btnReiniciar);

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

for(const item of perguntasNaruto) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasNaruto.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      if(estaCorreta) {
        corretas.add(item);
      } else {
        corretas.delete(item);
      }
    }

    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();
  quiz.appendChild(quizItem);
}
