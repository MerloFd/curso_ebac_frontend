//const global do form HMTL
const form = document.getElementById('form-simulacao')

//Function que faz a subtração do pagamento pela divida e retorna o produto disso (quitarDivida)
function quitar (divida, pagamento){
    const quitarDivida = pagamento - divida
    return quitarDivida
    }

//Function que tem ação de gatilho quando o button submit do form é clicado
form.addEventListener('submit', function(e){
    e.preventDefault();

    const pagamento = document.getElementById('pagamento')
    const divida = document.getElementById('divida')
    const quitarDivida = quitar(divida.value, pagamento.value) //declaração da function para a const local quitarDivida poder ser usada

    let valor = Math.abs(quitarDivida)

    const erro = ' ERRO! A divida não pode ser quitada, faltam ' + valor + ' R$ a pagar, continue economizando!' //mensagem de erro com a const
    const sucess = 'A divida pode ser paga! restaram ' + valor + ' R$' //mensagem de sucess com a const

    const cssMensagemSucesso = document.querySelector('.mensagem-sucesso') //const da .class em css que vai receber um innerHTML para exibir as mensagens
    const cssMensagemErro = document.querySelector('.mensagem-erro') 

    cssMensagemSucesso.style.display = "none"; // da um display 'none' novamente na .class para que ela desapareça quando o submit for acionado novamente
    cssMensagemErro.style.display = "none";

    if (quitar(divida.value, pagamento.value) >= 0){ // se o valor do pagamento for maior que a divida:
        cssMensagemSucesso.innerHTML = sucess //escreve a mensagem de sucesso no nosso .class
        cssMensagemSucesso.style.display = 'block'//exibe o .class na tela

        //limpa os campos
        pagamento.value = ' '
        divida.value = ' '
    }else{ //caso de erro (a divida é maior que o pagamento)
        cssMensagemErro.innerHTML = erro 
        cssMensagemErro.style.display = 'block'

        pagamento.value = ' '
        divida.value = ' '
    }
})
