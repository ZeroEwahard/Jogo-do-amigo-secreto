let amigos = [];
let amigoAdicionado = document.getElementById("listaAmigos");


function adicionarAmigo() {

    let digiteNomeDoAmigo = document.getElementById("amigo").value;

    if(digiteNomeDoAmigo != "") {
        amigos.push(digiteNomeDoAmigo);
        limparInput();
        atualizarListaDeAmigo();

    } else {
        alert(`Por favor, insira um nome.`);
    }
}


function limparInput() {
    let limpar = document.querySelector("input");
    limpar.value = "";
}


function atualizarListaDeAmigo() {

    let lista;
    amigoAdicionado.innerHTML = ""; 

    for(let quantidadeDeAmigos = 0; quantidadeDeAmigos < amigos.length; quantidadeDeAmigos++) {
        lista = document.createElement("li");
        lista.textContent = amigos[quantidadeDeAmigos];
        amigoAdicionado.appendChild(lista);
        estilizarLista();
    }


    function estilizarLista() {
        lista.style.background = "#4b69fd";
        lista.style.color = "white";
        lista.style.fontStyle = "italic";
        lista.style.padding = "5px";
        lista.style.marginBottom = "5px";
        lista.style.borderRadius = "6px";
        lista.style.border = "2px solid #2a3dbf";
        lista.style.textAlign = "center";
    } 
}


function sortearAmigo() {

    if(amigos.length > 0) {
       let sorteio = Math.floor(Math.random() * amigos.length);
       let resultado = document.getElementById("resultado");
       amigoAdicionado.innerHTML = "";
       resultado.innerHTML = `Amigo secreto é: ${amigos[sorteio]}`;
       

       function estilizarResultado() {
        resultado.style.background = "#a8e6cf";
        resultado.style.fontWeight = "bold";
        resultado.style.border = "2px solid #81c784";
        resultado.style.borderRadius = "8px";
        resultado.style.padding = "6px 10px";
        resultado.style.marginBottom = "15px";
        resultado.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        }
    
        estilizarResultado();

    } else {
        alert(`Você precisa colocar o nome de um amigo no campo de texto para poder prosseguir.`);
    }
}
