const botaoNao = document.getElementById('botaoNao');
const botaoSim = document.getElementById('botaoSim');

botaoNao.addEventListener('click', () => {
  moveBotao(botaoNao);
});

botaoSim.addEventListener('click', () => {
  exibirMensagem();
});

function moveBotao(botao) {
  const randomX = Math.random() * (window.innerWidth - botao.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - botao.offsetHeight);
  
  botao.style.position = 'absolute';
  botao.style.left = randomX + 'px';
  botao.style.top = randomY + 'px';
}

function exibirMensagem() {
  alert('Resposta certa!');
}
