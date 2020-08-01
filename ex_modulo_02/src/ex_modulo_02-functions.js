//Exercício 01
export default class Usuario
{
  //Keyword static remove a necessidade de instanciar classe Usuario p/ poder usar a função info()
  static info()
  {
    return "Webpack testado com sucesso!";
  }
}

export const idade = 25;