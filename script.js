alert("Lulu Santos vê a vida melhor no futuro desde 1982, quando lançou seu disco de estreia, “Tempos modernos”, após alguns anos gramando em empregos em gravadoras, revistas, tocando guitarra e cantando onde fosse possível (sim, o grupo Vímana, por exemplo) e sonhando com o destino de ser star.")
function trocarTema() {
    var body = document.body;
    var botao = document.querySelector('button');

    if (body.style.backgroundColor === 'black') {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      botao.textContent = 'Tema Escuro';
    } else {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      botao.textContent = 'Tema Claro';
    }
  }