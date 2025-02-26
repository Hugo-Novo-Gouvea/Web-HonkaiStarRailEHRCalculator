document.getElementById('calcular').addEventListener('click', function() {
    const valor = parseInt(document.getElementById('valor').value);
    if (isNaN(valor)) {
        document.getElementById('resultado').textContent = "Digite um número válido.";
    } else {
        const multBase = (valor/100);
        const multEnemyRes =  ( multBase * 0.64 );
        const resultado = (1 / multEnemyRes) - 1;
        let resultadoPorcentagem = resultado * 100;
        resultadoPorcentagem = parseFloat(resultadoPorcentagem.toFixed(1));
        document.getElementById('resultado').textContent = `Resultado: ${resultadoPorcentagem}% de Taxa de Acerto de Efeito`;
    }
});