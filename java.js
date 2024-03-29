$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    $('#cep').mask('00000-000',{
        placeholder:'00000-000'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    })

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required:  true
            },
            cep:{
                required:  true
            },
            cpf:{
                required: true
            },

        },
        messages:{
            nome: 'Por favor, insira seu Nome',
            email: 'Por favor, insira seu Email',
            telefone: 'Por favor, insira seu Telefone',
            cep: 'Por favor, insira seu Cep',
            cpf: 'Por favor, insira seu Cpf',
        }
    })
})

