"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercício 01
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    //Chama o construtor da classe pai
    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario("email@teste.com", "senha123");
var Adm1 = new Admin("email@teste.com", "senha123");
var res01 = "Status administrador User1: " + User1.isAdmin();
res01 += "\nStatus administrador Adm1: " + Adm1.isAdmin();
console.log("Exercício 01:\n" + res01); //Exercício 02

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}]; //02.1

var idadeUsuarios = usuarios.map(function (item) {
  return item.idade;
});
var res02 = "[02.1] Idade dos usuários: " + idadeUsuarios.join(", "); //02.2

var usuariosRocketseat = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === "Rocketseat";
});
res02 += "\n[02.2] Usuários que trabalham na Rocketseat e com mais de 18 anos: "; //Cria novo vetor apenas com a propriedade "nome" do vetor de objetos usuariosRocketseat e concatena-o

res02 += usuariosRocketseat.map(function (item) {
  return item.nome;
}).join(", "); //02.3

var usuarioGoogle = usuarios.find(function (item) {
  return item.empresa === "Google";
});
res02 += "\n[02.3] Usuário que trabalha no Google: " + usuarioGoogle; //02.4

var usuariosAte50anos = usuarios.filter(function (item) {
  item.idade *= 2;
  return item.idade <= 50;
}); //Transforma objeto em JSON p/ poder ser impresso como string

res02 += "\n[02.4] Usuários com no máximo 50 anos:\n" + JSON.stringify(usuariosAte50anos, null, 2);
console.log("Exercício 02:\n" + res02); //Exercício 03
//03.1

var arr031 = [1, 2, 3, 4, 5];
var newArr031 = arr031.map(function (item) {
  return item + 10;
});
var res03 = "[03.1] Array: " + newArr031.join(", "); //03.2

var usuario032 = {
  nome: "Diego",
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

res03 += "\n[03.2] Idade: " + mostraIdade(usuario032); //03.3

var nome033 = "Diego";
var idade033 = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

res03 += "\n[03.3]\n";
res03 += JSON.stringify(mostraUsuario(nome033, idade033), null, 2) + ",\n";
res03 += JSON.stringify(mostraUsuario(nome033), null, 2); //03.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    resolve("Promise executada com sucesso!");
  });
}; //Aguarda ciclo da Promise finalizar p/ concatenar response e exibir resposta


promise().then(function (response) {
  res03 += "\n[03.4] " + response;
  console.log("Exercício 03:\n" + res03);
}); //Exercício 04
//04.1

var empresa = {
  nomeFantasia: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
}; //Desestrutura objeto empresa

var nomeFantasia = empresa.nomeFantasia,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
var res04 = "[04.1] " + nomeFantasia + " localiza-se em " + cidade + " - " + estado; //04.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

res04 += "\n[04.2] " + mostraInfo({
  nome: "Diego",
  idade: 23
});
console.log("Exercício 04:\n" + res04); //Exercício 05
//05.1

var arr051 = [1, 2, 3, 4, 5, 6];
var a = arr051[0],
    b = arr051.slice(1);
var res05 = "[05.1] Array: " + a + ", " + b.join(", ");

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total += next;
  });
};

res05 += "\n[05.1] 1 + 2 + 3 + 4 + 5 + 6 = " + soma(1, 2, 3, 4, 5, 6) + ", 1 + 2 = " + soma(1, 2); //05.2

var usuario052 = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

var usuarioGabriel = _objectSpread(_objectSpread({}, usuario052), {}, {
  nome: "Gabriel"
});

var usuarioEmLontras = _objectSpread(_objectSpread({}, usuario052), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario052.endereco), {}, {
    cidade: "Lontras"
  })
});

res05 += "\n[05.2]\n";
res05 += JSON.stringify(usuarioGabriel, null, 2) + ",\n";
res05 += JSON.stringify(usuarioEmLontras, null, 2);
console.log("Exercício 05:\n" + res05); //Exercício 06

var nome06 = "Diego";
var idade06 = 23;
var res06 = "O usu\xE1rio ".concat(nome06, " possui ").concat(idade06, " anos.");
console.log("Exercício 06:\n" + res06); //Exercício 07

var nome = "Diego";
var idade = 23;
var usuario07 = {
  nome: nome,
  idade: idade,
  cidade: "Rio do Sul"
};
var res07 = JSON.stringify(usuario07, null, 2);
console.log("Exercício 07:\n" + res07);
