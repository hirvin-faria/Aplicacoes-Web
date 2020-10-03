function getFatorial() {
    const numberInput = document.getElementById('Number');
    const number = numberInput.value;

    const fatorialObj = fatorial(number);

    switch(fatorialObj.status){
        case 'error':
            alert(fatorialObj.value);
            break;
        case 'success': 
            const response = 'O Fatorial de ' + number + ' é igual a ' + fatorialObj.value;
            setResponse(response, 'response');
            break;

        default:
            alert('Ocorreu um Erro');
            break;
    }

}

function fatorial(num) {
    let fatorial = 1;

    for(let i = 1; i <= num; i++) {

        fatorial *= i;

        if (i == num) {
            return {
                status: 'success',
                value: fatorial
            } 
        }
    }

    return {
        status: 'error',
        value: 'Digite algum número maior que 0'
    }
}

function setResponse(response, id){
    const div = document.getElementById(id);
    div.innerHTML = response;
}