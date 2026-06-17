let funcionarios =
    JSON.parse(localStorage.getItem("funcionarios")) || [];

function cadastrarFuncionario() {

    const nome = document.getElementById("campoNome").value.trim();
    const email = document.getElementById("campoEmail").value.trim();
    const cargo = document.getElementById("campoCargo").value.trim();
    const departamento = document.getElementById("campoDepartamento").value.trim();
    const senha = document.getElementById("campoSenha").value.trim();

    const mensagemErro = document.getElementById("mensagemErro");

    if (
        nome === "" ||
        email === "" ||
        cargo === "" ||
        departamento === "" ||
        senha === ""
    ) {
        mensagemErro.innerText = "Preencha todos os campos.";
        return;
    }

    mensagemErro.innerText = "";

    const funcionario = {
        id: Date.now(),
        nome: nome,
        email: email,
        cargo: cargo,
        departamento: departamento,
        senha: senha
    };

    funcionarios.push(funcionario);

    salvarFuncionarios();

    listarFuncionarios();

    limparCampos();
}

// Salva no LocalStorage
function salvarFuncionarios() {
    localStorage.setItem(
        "funcionarios",
        JSON.stringify(funcionarios)
    );
}

function listarFuncionarios() {

    const lista = document.getElementById("listaFuncionarios");

    lista.innerHTML = "";

    funcionarios.forEach(funcionario => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${funcionario.nome}</h3>
            <p><strong>E-mail:</strong> ${funcionario.email}</p>
            <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
            <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
        `;

        lista.appendChild(card);
    });

    atualizarQuantidade();
}

function atualizarQuantidade() {
    document.getElementById("totalFuncionarios").innerText =
        funcionarios.length;
}

function limparCampos() {

    document.getElementById("campoNome").value = "";
    document.getElementById("campoEmail").value = "";
    document.getElementById("campoCargo").value = "";
    document.getElementById("campoDepartamento").value = "";
    document.getElementById("campoSenha").value = "";
}

listarFuncionarios();