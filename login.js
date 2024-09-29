console.log("O usuário que entrou é o " + localStorage.getItem('loginAtual'));
         

function login() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || senha === '') {
        alert("Algum dos campos está em branco.");
    } else {
        const storedPassword = localStorage.getItem(nome);
        if (storedPassword === null) {
            alert("Usuário não cadastrado.");
        } else if (storedPassword === senha) {
            alert("Login realizado com sucesso!");
            localStorage.setItem('loginAtual', nome);
            window.location.href = "pergunta.html";
        } else {
            alert("Senha incorreta.");
        }
    }
}

function cadastro() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || senha === '') {
        alert("Algum dos campos está em branco.");
    } else {
        // Verifica se o usuário já está cadastrado
        if (localStorage.getItem(nome) === null) {
            localStorage.setItem(nome, senha);
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Usuário já cadastrado.");
        }
    }
}

function teste() {
    alert("Seus dados estão sendo armazenados localmente no navegador.");
}