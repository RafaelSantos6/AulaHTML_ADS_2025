// script do Exerc2.html

// Único listener para o botão calcular
document.getElementById('btnCalcular').addEventListener('click', calcularEntradaESaldo);

function calcularEntradaESaldo() {
    const veiculo = document.getElementById('veiculo').value.trim();
    const precoRaw = document.getElementById('preco').value;
    const saida = document.getElementById('saida');

    // valida veiculo
    if (!veiculo) {
        saida.textContent = 'Por favor, insira o nome do veículo.';
        return;
    }

    const preco = parseFloat(String(precoRaw).replace(',', '.'));
    if (isNaN(preco) || preco <= 0 || precoRaw === '') {
        saida.textContent = 'Por favor, insira um preço de veículo válido.';
        return;
    }

    const entrada = preco * 0.5; // 50%
    const parcela = preco / 12;


    saida.innerHTML = `Veículo: ${veiculo}<br>` +
                      `Valor original: R$ ${(preco)}<br>` +
                      `Entrada (50%): R$ ${(entrada)}<br>` +
                      `12x de: R$ ${(parcela)}`;
}                                                                  