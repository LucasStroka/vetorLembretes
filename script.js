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


function marcarComoConcluido() {

    console.log('\nMarcar Lembrete como concluído.')
    listar(); 

    if (lembretes.lenght === 0) {
        return
    }
const idParaConcluido =
parseInt(readline.question('Digite o ID do Lembrete.'));

const lembreteEnc = lembretes.find(lembrete => lembrete.id === idParaConcluido);

    if (lembreteEnc.concluido) {
        console.log('Este lembrete está marcado como concluído.')
    } else {
        lembreteEnc.concluido = true

        console.log(`Lembrete ${lembreteEnc.nome} marcado como concluído`);
    } 
    console.log('ID não encontrado.')
    }


