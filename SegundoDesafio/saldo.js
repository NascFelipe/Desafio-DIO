function salRankeadas(qtdVitorias, qtdDerrotas){
    let saldo = qtdVitorias - qtdDerrotas
    let level
    if (saldo <= 10) {
        level = "Ferro"
    } else if (saldo > 10 && saldo <= 20) {
        level = "Bronze"
    }
    else if (saldo > 20 && saldo <= 50) {
        level = "Prata"
    }
    else if (saldo > 50 && saldo <= 80) {
        level = "Ouro"
    }
    else if (saldo > 80 && saldo <= 90) {
        level = "Diamante"
    }
    else if (saldo > 90 && saldo <= 100) {
        level = "Lendário"
    }
    else {
        level = "Imortal"
    }
    return[ saldo, level]
}

function resultado(saldo, level, nome){

        console.log("O saldo de vitórias é " + saldo + ".\n" + nome + " está no nível " + level)
}

console.log("Olá!!!\n")
console.log("Esse software tem o objetivo de te apresentar o seu saldo da rankeada e o nível do seu personagem\n")
let genero
let nome
let vitorias = prompt("Digite a quantidade de vitórias:")
console.log(vitorias)
let derrotas = prompt("Digite a quantidade de derrotas")
console.log(derrotas)

do {
    genero = prompt("Escolha o gênero do seu personagem: \n1 - Masculino\n2 - Feminino")
    switch(genero) {
        case "1":
            console.log("Você escolheu Masculino.")
                nome = prompt("Insira o nome do seu Herói:")
            console.log("Ótima escolha de nome.\nAgora vamos descobrir o nível do " + nome +" e o saldo de vitórias")
            break;
        case "2":
            console.log("Você escolheu Feminino.")
                nome = prompt("Insira o nome da sua Heróina:")
            console.log("Ótima escolha de nome.\nAgora vamos descobrir o nível da " + nome +" e o saldo de vitórias")
            break;
        default:
    }
} while (genero !== "1" && genero !== "2")

let [saldo, level] = salRankeadas(vitorias, derrotas)
resultado(saldo, level, nome)