//Exercício 01
//01.1
import ClasseUsuario from "./ex_modulo_02-functions";
let res01 = "[01.1] " + ClasseUsuario.info();

//01.2
import { idade } from "./ex_modulo_02-functions";
res01 += "\n[01.2] Idade: " + idade;

//01.3
import Usuario, { idade as idadeUsuario } from "./ex_modulo_02-functions";
res01 += "\n[01.3] " + Usuario.info();
res01 += "\n[01.3] Idade: " + idadeUsuario;

console.log("Exercício 01:\n" + res01);