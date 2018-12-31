const botoes = document.querySelectorAll('.botao-expandir-retrair');

for (let botao of botoes) {
    botao.addEventListener('click', (e) => {
        if (botao.parentNode.classList.contains('expandido')) {
            botao.parentNode.classList.remove('expandido');
            botao.innerHTML = "+";
        } else {
            botao.parentNode.classList.add('expandido');
            botao.innerHTML = "-";
        }
    });
}