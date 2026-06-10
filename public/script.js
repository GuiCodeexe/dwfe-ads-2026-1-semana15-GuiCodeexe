var adminNome = "admin";
var adminEmail = "admin@123.br";
var adminCargo = "Gestor";
var adminDepartamento = "Administracao";
var adminSenha = "123";

function CadastrarUsuarios(Nome, Email, Cargo, Departamento, Senha) {
    if (Nome == adminNome && Email === adminEmail && Cargo === adminCargo && Departamento === adminDepartamento && Senha === adminSenha) 
    {
        var dadosAdmin = { nome: "Administrador", login: "admin", perfil: "admin" };
        sessionStorage.setItem("usuarioLogado", JSON.stringify(dadosAdmin));
        window.location.href = "controle.html";
        return;
    }

    var Cadastro = JSON.parse(localStorage.getItem("Cadastro")) || [];

    for (var i = 0; i < Cadastro.length; i++) {
        var f = Cadastro[i];
        if (f.Nome === Nome && f.Email === Email && f.Cargo === Cargo && f.Departamento === Departamento && f.Senha === Senha) 
        {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(f));
            window.location.href = "boasvindas.html";
            return;
        }
    }

    document.getElementById("mensagemErro").innerText = "Login ou senha incorretos!";
}

function fazerLogout() {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}

function getUsuarioLogado() {
    var dados = sessionStorage.getItem("usuarioLogado");
    if (dados) {
        return JSON.parse(dados);
    }
    return null;
}

function getFuncionarios() {
    var dados = localStorage.getItem("funcionarios");
    if (dados) {
        return JSON.parse(dados);
    }
    return [];
}

function salvarFuncionarios(lista) {
    localStorage.setItem("funcionarios", JSON.stringify(lista));
}
