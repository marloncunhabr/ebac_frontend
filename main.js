$(document).ready(function () {
    const inputTarefa = $('#inputTarefa');
    const btnAdicionar = $('#btnAdicionar');
    const btnRemover = $('#btnRemover');
    const tabelaTarefas = $('#tabelaTarefas');
    const tbody = tabelaTarefas.find('tbody');

    btnAdicionar.click(function (event) {
        event.preventDefault();
        const novaTarefa = inputTarefa.val();
        const novaLinha = $('<tr><td>' + novaTarefa + '</td></tr>');
        tbody.append(novaLinha);
        inputTarefa.val('');
    });

    btnRemover.click(function (event) {
        event.preventDefault();
        tbody.empty();
    });

    tbody.on('click', 'tr', function () {
        $(this).toggleClass('tarefa-concluida');
    });
});
