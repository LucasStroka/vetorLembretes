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
        let idQuestion = parseInt(await askQuestion("\n====Menu De Opções====\n1- Adicionar \n2- Listar \n3- Editar \n4- Marcar como Concluido\n5- Sair\n"))
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
    console.log("=====================\n==== Lembretes ====");
    
    for (let i = 0; i < arrayLembretes.length; i++) {
        console.log(`${i+1} - ${arrayLembretes[i].nome} | ${arrayLembretes[i].data} | ${arrayLembretes[i].stats}`)
    }
    
    let id = await askQuestion("\nDigite o Indice da Lista que Voce Deseja Editar: ")
    
    nome = await askQuestion("\nDigite Novo Nome do Lembrete:")
    data = await askQuestion("\nDigite a Nova data Prevista:")
    stats = await askQuestion("\nDigite o Novo Status do Lembrete:")

    lembretes = {
        nome: nome,
        data: data,
        stats: stats
    }
    arrayLembretes[id-1] = lembretes
}


async function adicionar(){

    let input1 = await askQuestion('\nDigite o nome do lembrente:\n')
    let input2 = await askQuestion("\nDigite a data do seu lembrete:\n")
    let input3 = await askQuestion('\nStatus do lembrete:\n')
    lembretes = {
        nome: input1,
        data: input2,
        stats: input3
    }
    arrayLembretes.push(lembretes)
    console.log('Adicionado com sucesso!')
    let input4 = await askQuestion('\nDeseja adiconar mais um lembrete?(s/n)\n')
    if (input4.toLowerCase() === 's'){adicionar()} else {startFunction()}
}

async function listar() {
    if(arrayLembretes.length === 0) {
        console.log('nenhum lembrete cadastrado!')
        }
    else {
        console.log('Lista de lembretes: \n')
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

    let idQuestion = parseInt(await askQuestion("Digite o indice do lembrete que deseja concluir: "))
    arrayLembretes[idQuestion-1].stats = "Concluido"
    console.log("Concluido com sucesso") 
}
startFunction();

