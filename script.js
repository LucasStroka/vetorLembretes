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

function adicionar(){
    rl.question('Digite o nome do lembrente:\n', (input1) =>{
        rl.question('Digite a data do seu lembrete:\n', (input2) =>{
            rl.question('Status do lembrete:\n', (input3) =>{
                lembretes.push({
                    Nome: input1,
                    data: parseInt(input2),
                    Status: input3
                })
                console.log("Lembrete adicionado com sucesso!")
                rl.question('\nDeseja adicionar um novo lembrete?(s/n)', (input4) =>{
                    if (input4.toLocaleLowerCase === 's'){adicionar()} else {MenuPrincipal()} 
                })
            })
        })
    })
}


