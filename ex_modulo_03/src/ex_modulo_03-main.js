//Exercício 01
const promDelay = delay => new Promise(resolve => setTimeout(resolve, delay*1000));

async function umPorSegundoAsync()
{
  await promDelay(0.5);
  console.log("[01] Testando async/await: 500ms ...");

  await promDelay(1);
  console.log("[01] Testando async/await: 1s ...");

  await promDelay(5);
  console.log("[01] Testando async/await: 5s ...");
}

console.log("Exercício 01:");
umPorSegundoAsync();


//Exercício 02
import axios from "axios";

async function getUserFromGithubAsync(user)
{
  try
  {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(`[02] Informações sobre o usuário \"${user}\":\n` + JSON.stringify(response.data, null, 2));
  }
  catch (error)
  {
    if (error == "Error: Request failed with status code 404")
      console.log(`[02] O usuário \"${user}\" não foi encontrado!`);
    else
      console.log(`[02] Erro na requisição HTTP: ${error}`);
  }
}

console.log("Exercício 02:");
getUserFromGithubAsync("diego3g");
getUserFromGithubAsync("diego3g124123");
getUserFromGithubAsync("rhenangarcia");
getUserFromGithubAsync("");


//Exercício 03
class Github
{
  static async getRepositoriesAsync(repo)
  {
    try
    {
      const reponse = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(`[03] Informações sobre o repositório \"${repo}\":\n` + JSON.stringify(reponse.data, null, 2));
    }
    catch (error)
    {
      if (error == "Error: Request failed with status code 404")
        console.log(`[03] O repositório \"${repo}\" não foi encontrado!`);
      else
        console.log(`[03] Erro na requisição HTTP: ${error}`);
    }
  }
}

console.log("Exercício 03:");
Github.getRepositoriesAsync("rocketseat/unform");
Github.getRepositoriesAsync("rocketseat/dslkvmskv");


//Exercício 04
const buscaUsuarioNoGithubAsync = async usuario => 
{
  try
  {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(`[04] Informações sobre o usuário \"${usuario}\":\n` + JSON.stringify(response.data, null, 2)); 
  }
  catch (error)
  {
    if (error == "Error: Request failed with status code 404")
      console.log(`[04] O usuário \"${usuario}\" não foi encontrado!`);
    else
      console.log(`[04] Erro na requisição HTTP: ${error}`);
  }
}

console.log("Exercício 04:");
buscaUsuarioNoGithubAsync("diego3g");
buscaUsuarioNoGithubAsync("diego3g124123");
buscaUsuarioNoGithubAsync("rhenangarcia");
buscaUsuarioNoGithubAsync("");