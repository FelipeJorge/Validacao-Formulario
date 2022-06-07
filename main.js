export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}
const validadores = {
    dataNascimento:input =>validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem = ''

    if(!maiorIdade(dataRecebida)){
    mensagem = 'Voce deve ser maior de 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem)
}

function maiorIdade(data){
    const dataAtual = new Date();
    const dataMaior = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMaior <= dataAtual;
}