function comprar() {
    let tipo = document.getElementById('tipo-ingresso')//guardar o valor do campo ingresso
    let qtd = parseInt(document.getElementById('qtd').value) //guardar o valor do campo quantidade
    
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else (tipo.value == 'inferior'); {
        comprarInferior(qtd);
    }
}
function comprarPista(qtd) {
    let qtdPista = parseInt( document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        qtdPista = qtdPista = qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Ingresso comprado com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo superior');
    } else {        
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Ingresso comprado com sucesso!');
    }
}
    
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Ingresso comprado com sucesso!');

    }
    }
    






