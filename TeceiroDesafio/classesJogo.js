class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }  
    acao() {
      let ataque;
      switch(this.tipo) {
        case "Mago":
          ataque = "usou magia";
          break;
        case "Guerreiro":
          ataque = "usou espada";
          break;
        case "Monge":
          ataque = "usou artes marciais";
          break;
        case "Ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = prompt("Crie ataque:");
      }
      console.log(this.nome + " fez um ataque " + ataque);
    }
  }

  let nome = prompt("Insira o nome do seu heroi:");
  let idade = prompt("Insira a idade do seu heroi:");
  let tipo;
  let num;
do{
    num = prompt("Digite o número correspondente ao tipo do seu personagem\n1) Mago \n2) Guerreiro \n3) Monge \n4) Ninja \n5) Criar");
  switch(num){
    case "1":
        console.log("Você escolheu o Mago");
        tipo = "Mago";
        break;
    case "2":
        console.log("Você escolheu o Guerreiro");
        tipo = "Guerreiro";
        break;
    case "3":
        console.log("Você escolheu o Monge");
        tipo = "Monge";
        break;
    case "4":
        console.log("Você escolheu o Ninja");
        tipo = "Ninja";
        break;   
    case "5":
        console.log("Você escolheu outro tipo de personagem!!!");
        tipo = prompt("Crie o tipo do seu personagem");
        break;
        default:      
}
 } while(num !== "1" && num !== "2" && num !== "3" && num !== "4" && num !== "5");


  let heroi = new Heroi(nome, idade, tipo);
  heroi.acao();  