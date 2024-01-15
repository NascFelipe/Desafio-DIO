console.log("Olá, Seja Bem Vindo!!!. \nEsse é o desafio clasificador de nível herói")
let nomeHeroi = prompt("Por favor, escolha um nome:")
console.log(nomeHeroi)
let XP = prompt("Por favor, insira um valor:")
console.log(XP)

if(XP <= 1000){
    XP = "Ferro";
}
else if(XP > 1001 && XP <= 2000){
    XP = "Bronze";
}
else if(XP > 2001 && XP <= 5000){
    XP = "Prata";
}
else if(XP > 5001 && XP <= 7000){
    XP = "Ouro";
}
else if(XP > 7001 && XP <= 8000){
    XP = "Platina";
}
else if(XP > 8001 && XP <= 9000){
    XP = "Ascendentea";
}
else if(XP > 9001 && XP <= 10000){
    XP = "Imortal";
}
else if(XP >= 10001){
    XP = "Radiante";
}

console.log("Você escolheu o nome:" + nomeHeroi + "para o seu personagem e o nível dele(a) é" + XP)