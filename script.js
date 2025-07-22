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
let bool = true


async function startFunction() {
    while (bool) {
        let idQuestion = parseInt(await askQuestion("====Menu De Opções====\n1- Adicionar \n2- Listar \n3- Editar \n4- Marcar como Concluido\n5- Sair\n : "))
        switch (idQuestion) {
            case 1:
                await adicionar();
                break;
            case 2:
                await listar();
                break;
            case 3:
                await edit();
                break;
            case 4:
                await marcarComoConcluido();
                break;
            case 5:
                console.log("Saindo...");
                rl.close();
                bool = false
                break;
            default:
                break;
        }
    }    
}


async function edit() {
    console.log("=====================");
    
    for (let i = 0; i < arrayLembretes.length; i++) {
        console.log(`${i+1} - ${arrayLembretes[i].nome} | ${arrayLembretes[i].data} | ${arrayLembretes[i].stats}`)
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


async function adicionar(){
    // rl.question('Digite o nome do lembrente:\n', (input1) =>{
    //     rl.question('Digite a data do seu lembrete:\n', (input2) =>{
    //         rl.question('Status do lembrete:\n', (input3) =>{
    //             lembretes.push({
    //                 Nome: input1,
    //                 data: input2,
    //                 Status: input3
    //             })
    //             console.log("Lembrete adicionado com sucesso!")
    //             rl.question('\nDeseja adicionar um novo lembrete?(s/n)', (input4) =>{
    //                 if (input4.toLocaleLowerCase === 's'){adicionar()} else {MenuPrincipal()} 
    //             })
    //         })
    //     })
    // })

    let input1 = await askQuestion('Digite o nome do lembrente:\n')
    let input2 = await askQuestion("Digite a data do seu lembrete:\n")
    let input3 = await askQuestion('Status do lembrete:\n')

    lembretes = {
        nome: input1,
        data: input2,
        stats: input3
    }

    arrayLembretes.push(lembretes)    
}

async function listar() {
    if(arrayLembretes.length === 0) {
        console.log('nenhum lembrete cadastrado!')
        }
    else {
        console.log('Lista de lembretes: \n')
        // arrayLembretes.forEach((lista, index) => {
        //     console.log(`${index + 1}. Lembrete: ${lista[index].nome} \ndata para ser feita: ${lista[index].data} \nstatus: ${lista[index].stats}`)
        // })
        for (let i = 0; i < arrayLembretes.length; i++) {
            console.log(`${i+1} - ${arrayLembretes[i].nome} | ${arrayLembretes[i].data} | ${arrayLembretes[i].stats}`)
        }
    }
    pular = await askQuestion("\nPressione Enter para Voltar ao Menu\n")
}

async function marcarComoConcluido() {
    console.log('Lista de lembretes: \n')
    for (let i = 0; i < arrayLembretes.length; i++) {
        console.log(`${i+1} - ${arrayLembretes[i].nome} | ${arrayLembretes[i].data} | ${arrayLembretes[i].stats}`)
    }

    let idQuestion = parseInt(await askQuestion("Digite Qual Esta Concluido: "))
    arrayLembretes[idQuestion-1].stats = "Concluido" 
}
startFunction();

