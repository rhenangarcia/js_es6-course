/* 
 * Configuração do Webpack p/ utilizar o Babel como conversor de comandos JS ES6+ p/ JS puro, 
 * permitindo que seja compreendido por qualquer interpretador JS, independente da implementação do ES6+.
 * 
 * O Webpack permite converter um arquivo .js de entrada com todos os arquivos .js dependentes em um
 * único .js de saída, removendo a necessidade de converter manualmente cada arquivo .js com o Babel.
 * 
 * O Webpack Dev Server fornece um servidor de desenvolvimento c/ hot reloading, usando estrutura do
 * Webpack p/ converter os arquivos JS ES6+ p/ JS puro automaticamente c/ Babel.
 */

module.exports = 
{
  entry:
  [
    "@babel/polyfill",
    "./src/ex_modulo_03-main.js"
  ],
  output:
  {
    path: __dirname + "/public",
    filename: "ex_modulo_03-bundle.js"
  },
  devServer:
  {
    contentBase: __dirname + "/public"
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: "babel-loader"
        }
      }
    ]
  }
}