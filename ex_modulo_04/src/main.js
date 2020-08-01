import api from "./api";

class App
{
  constructor()
  {
    //Carrega o vetor "repositories" do Local Storage e converte-o em array,
    //se não houver "repo_list", cria um vetor vazio
    this.repositories = JSON.parse(localStorage.getItem("repo_list")) || [];

    this.formElement = document.getElementById("repo-form");
    this.inputElement = document.querySelector("#repo-form input[name=repository]");
    this.ulElement = document.getElementById("repo-list");

    this.registerHandlers();
    this.render();
  }

  //Registra os manipuladores p/ monitorar eventos ocorridos na DOM
  registerHandlers()
  {
    //Monitora o formulário, chamando addRepositoryAsync() quando for enviado
    this.formElement.onsubmit = event => this.addRepositoryAsync(event);
  }

  //Renderiza as informações dos repositórios na <ul>
  render()
  {
    this.ulElement.innerHTML = "";

    this.repositories.forEach((repo, index) =>
      {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", repo.avatar_url);
        imgElement.setAttribute("alt", repo.name + " logo");

        const aStrongElement = document.createElement("a");
        aStrongElement.setAttribute("href", "");
        aStrongElement.appendChild(document.createTextNode("X"));
        aStrongElement.onclick = () => this.removeRepository(index);
        
        const strongElement = document.createElement("strong");
        strongElement.appendChild(document.createTextNode(repo.name + " "));
        strongElement.appendChild(aStrongElement);
        
        const pElement = document.createElement("p");
        pElement.appendChild(document.createTextNode(repo.description));

        const aElement = document.createElement("a");
        aElement.setAttribute("target", "_blank");
        aElement.setAttribute("href", repo.html_url);
        aElement.appendChild(document.createTextNode("Acessar repositório"));

        const liElement = document.createElement("li");
        liElement.appendChild(imgElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(pElement);
        liElement.appendChild(aElement);

        this.ulElement.appendChild(liElement);
      });
  }

  //Adiciona informação do carregamento p/ requisição a API
  setLoading(loading = true)
  {
    if (loading)
    {
      const spanElement = document.createElement("span");
      spanElement.setAttribute("id", "span-loading");
      spanElement.appendChild(document.createTextNode("Carregando repositório ..."));

      this.formElement.appendChild(spanElement);
    }
    else
      document.getElementById("span-loading").remove();
  }

  //Salva repositórios no Local Storage como "repo_list" em formato JSON
  saveToLocalStorage()
  {
    localStorage.setItem("repo_list", JSON.stringify(this.repositories));
  }

  //Adiciona informações dos repositórios
  async addRepositoryAsync(event)
  {
    //Previne a ação HTML padrão quando o form é enviado, no caso, não faz novo acesso
    //a página adicionando o nome do input no endereço HTTP ao enviar o form
    event.preventDefault();

    const repoInput = this.inputElement.value;

    if (repoInput.length === 0)
      return;

    this.setLoading();
    
    try
    {
      //ES6+ -> async/await e template literals
      const response = await api.get(`/repos/${repoInput}`);

      //ES6+ -> desestruturação do objeto
      const { name, description, html_url, owner: { avatar_url } } = response.data;

      //ES6+ -> object short syntax
      this.repositories.push(
        {
          name,
          description,
          avatar_url,
          html_url
        });

      this.inputElement.value = "";
      this.saveToLocalStorage();
      this.render();
    }
    catch (error)
    {
      alert(`O repositório \"${repoInput}\" não existe!`);
    }

    this.setLoading(false);
  }

  //Remove informações dos repositórios
  removeRepository(repoPos)
  {
    //Deleta um item do vetor de acordo c/ índice inicial desejado
    this.repositories.splice(repoPos, 1);
    this.saveToLocalStorage();
    this.render();
  }
}

//Instancia a classe App, executando o respectivo construtor
new App();