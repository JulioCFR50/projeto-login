document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "logistica@cocodovale.com.br" && senha === "1234") {
        alert("Login realizado com sucesso!");
        // redirecionar ou abrir painel
    } else {
        alert("Usuário ou senha incorretos.");
    }
});
