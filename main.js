const form = document.getElementById('form-deposito');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if (valorB > valorA) {
        const resultado = valorA + valorB;
        mensagem.textContent = `O resultado da soma é: ${resultado}`;
        mensagem.style.display = 'block';
        alert("Formulário válido!");
    } else {
        mensagem.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
        mensagem.style.display = 'block';
    }

    campoA.value = '';
    campoB.value = '';
});
