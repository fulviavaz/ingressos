function comprar() {
    let tipo = document.getElementById('tipo-ingresso')//guardar o valor do campo ingresso
    let qtd = parseInt(document.getElementById('qtd').value) //guardar o valor do campo quantidade
    
    if (tipo.value == 'pista') {
        comprarPista(qtd);
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

