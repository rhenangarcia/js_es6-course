//Exercício 01
class Usuario
{
  constructor(email, senha)
  {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin()
  {
    return this.admin;
  }
}

class Admin extends Usuario
{
  constructor(email, senha)
  {
    //Chama o construtor da classe pai
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

let res01 = "Status administrador User1: " + User1.isAdmin();
    res01 += "\nStatus administrador Adm1: " + Adm1.isAdmin();

console.log("Exercício 01:\n" + res01);


//Exercício 02
const usuarios = 
[
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

//02.1
const idadeUsuarios = usuarios.map(function (item) { return item.idade; });
let res02 = "[02.1] Idade dos usuários: " + idadeUsuarios.join(", ");

//02.2
const usuariosRocketseat = usuarios.filter
(
  function (item)
  { 
    return item.idade > 18 && item.empresa === "Rocketseat";
  }
);
res02 += "\n[02.2] Usuários que trabalham na Rocketseat e com mais de 18 anos: ";
//Cria novo vetor apenas com a propriedade "nome" do vetor de objetos usuariosRocketseat e concatena-o
res02 += usuariosRocketseat.map(function (item) { return item.nome }).join(", ");

//02.3
const usuarioGoogle = usuarios.find(function (item) { return item.empresa === "Google"; });
res02 += "\n[02.3] Usuário que trabalha no Google: " + usuarioGoogle;

//02.4
const usuariosAte50anos = usuarios.filter
(
  function (item) 
  { 
    item.idade *= 2;
    return item.idade <= 50;
  }
);
//Transforma objeto em JSON p/ poder ser impresso como string
res02 += "\n[02.4] Usuários com no máximo 50 anos:\n" + JSON.stringify(usuariosAte50anos, null, 2);

console.log("Exercício 02:\n" + res02);


//Exercício 03
//03.1
const arr031 = [1, 2, 3, 4, 5];
const newArr031 = arr031.map(item => item + 10);
let res03 = "[03.1] Array: " + newArr031.join(", ");

//03.2
const usuario032 = { nome: "Diego", idade: 23 };
const mostraIdade = (usuario => usuario.idade);
res03 += "\n[03.2] Idade: " + mostraIdade(usuario032);

//03.3
const nome033 = "Diego";
const idade033 = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });

res03 += "\n[03.3]\n";
res03 += JSON.stringify(mostraUsuario(nome033, idade033), null, 2) + ",\n";
res03 += JSON.stringify(mostraUsuario(nome033), null, 2);

//03.4
const promise = () => new Promise((resolve, reject) => { resolve("Promise executada com sucesso!") });
//Aguarda ciclo da Promise finalizar p/ concatenar response e exibir resposta
promise().then(response => 
  { 
    res03 += "\n[03.4] " + response;
    console.log("Exercício 03:\n" + res03)
  }
);


//Exercício 04
//04.1
const empresa = 
{
  nomeFantasia: "Rocketseat",
  endereco:
  {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
//Desestrutura objeto empresa
const { nomeFantasia, endereco: { cidade, estado } } = empresa;
let res04 = "[04.1] " + nomeFantasia + " localiza-se em " + cidade + " - " + estado;

//04.2
function mostraInfo({ nome, idade })
{
  return `${nome} tem ${idade} anos.`;
}
res04 += "\n[04.2] " + mostraInfo({ nome: "Diego", idade: 23 });

console.log("Exercício 04:\n" + res04);


//Exercício 05
//05.1
const arr051 = [1, 2, 3, 4, 5, 6];
const [a, ...b] = arr051;
let res05 = "[05.1] Array: " + a + ", " + b.join(", ");

const soma = (...params) => params.reduce((total, next) => total += next);
res05 += "\n[05.1] 1 + 2 + 3 + 4 + 5 + 6 = " + soma(1, 2, 3, 4, 5, 6) + ", 1 + 2 = " + soma(1, 2);

//05.2
const usuario052 =
{
  nome: "Diego",
  idade: 23,
  endereco:
  {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};
const usuarioGabriel = { ...usuario052, nome: "Gabriel" };
const usuarioEmLontras = { ...usuario052, endereco: { ...usuario052.endereco, cidade: "Lontras" } };

res05 += "\n[05.2]\n";
res05 += JSON.stringify(usuarioGabriel, null, 2) + ",\n";
res05 += JSON.stringify(usuarioEmLontras, null, 2);

console.log("Exercício 05:\n" + res05);


//Exercício 06
const nome06 = "Diego";
const idade06 = 23;
let res06 = `O usuário ${nome06} possui ${idade06} anos.`;

console.log("Exercício 06:\n" + res06);


//Exercício 07
const nome = "Diego";
const idade = 23;
const usuario07 =
{
  nome,
  idade,
  cidade: "Rio do Sul"
};
let res07 = JSON.stringify(usuario07, null, 2);

console.log("Exercício 07:\n" + res07);