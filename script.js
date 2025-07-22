const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

let lembretes = {
    nome,
    data,
    stats
}

let arrayLembretes = []

listar()
function listar() {
    if(lembretes.length === 0) {
        console.log('nenhum lembrete cadastrado!')
        // colocar aqui código para voltar para o menu, precionando enter
    }
    else {
        console.log('Lista de lembretes: \n')
        lembretes.forEach((lista, index) => {
            console.log(`${index + 1}. Lembrete: ${lista.nome} \ndata para ser feita: ${lista.data} \nstatus: ${lista.stats}`)
        })
    }
    console.log('precione enter para voltar')
    // colocar aqui código para voltar para o menu, precionando enter
}