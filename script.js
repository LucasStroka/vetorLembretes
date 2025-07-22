const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}



let arrayLembretes = []

nome = "tarefa1"
data = "segunda"
stats = "pedente"
let lembretes = {
    nome: nome,
    data: data,
    stats: stats
}
arrayLembretes.push(lembretes)
nome = "tarefa2"
data = "sexta"
stats = "pedente"
lembretes = {
    nome: nome,
    data: data,
    stats: stats
}
arrayLembretes.push(lembretes)



async function edit() {
    console.log("=====================");
    
    for (let i = 0; i < arrayLembretes.length; i++) {
        console.log(`${i+1} - ${arrayLembretes[i].nome}.${arrayLembretes[i].data}.${arrayLembretes[i].stats}`)
    }
    
    let id = await askQuestion("Digite o Indice da Lista que Voce Deseja Editar: ")
    
    nome = await askQuestion("Digite o Nome Tarefa: ")
    data = await askQuestion("Digite a Data Prevista: ")
    stats = await askQuestion("Digite o Status da Tarefa: ")

    lembretes = {
        nome: nome,
        data: data,
        stats: stats
    }
    arrayLembretes[id-1] = lembretes
}

edit()
