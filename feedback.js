function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // verifica se é true ou false. Se for true ele entrega o true e contrario tambem.
}

const form = document.getElementById("formid");
const button = document.getElementById("button");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = form.nome.value.trim(); //o value.trim() apaga os espaços vazios antes e depois da linha.
    const email = form.email.value.trim();
    const genero = form.genero.value;

    if(nome == "" && email == "" && genero == ""){ //se o nome, email e mensagem não estiverem preenchidos, não permitir evento de ocorrer e retorne pro estado original do formulario. 
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
        return;
    } else if(nome != "" && email != "" && genero != "" && validarEmail(email)){ //ou então, se nome, email, mensagem e a verificação do email estiverem corretamente preenchidos, enviar formulario.
        alert("obriado pelo feedback!");
        event.preventDefault();
    } else{ // ou 

        if(nome == ""){ //se apenas o nome não estiver preenchido
            alert("Informe o nome");
            event.preventDefault();
            return;
        }

        if(email == ""){ //se apenas o email não estiver preenchido
            alert("Informe o email");
            event.preventDefault();
            return;

        } else if(!validarEmail(email)){ //ou então, se email estiver preenchido, mas com email invalido
            alert("O email informado não é válido. Por favor, insira um email no formato correto.");
            event.preventDefault();
            return;
        }
        if (genero === "") {
            alert("por favor selecione um genero");
            return;
            
        }
    }
});