$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#CEP').mask('00000-000');
    $('#CPF').mask('000.000.000-00');

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CEP: {
                required: true
            },
            CPF: {
                required: true,
            },
            endereco: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incoretos`)
            }
        }
    })

});