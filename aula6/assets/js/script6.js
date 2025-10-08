



const btn = document.querySelector("btnCalcular");
const tabela = document.querySelector("#tabela tbody");

btnCalcular.addEventListener('click', () => {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number
        (document.querySelector("#num2").value);

    if (!num1 || !num2 || num2 === 0) {
        alert("valores invalidos");
        return;
    };

    let soma = num1 + num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let resto = num1 % num2;


    tabela.innerHTML = "";
    //cria uma nova linha

    const novalinha = document.createElement('tr');
    novalinha.innerHTML = `
        <td>soma</td>
        <td>${soma}</td>
    `;
    tabela.appendChild(novalinha);

    const linhaMult = document.createElement('tr');
    linhaMult.innerHTML = `
        <td>mult</td>
        <td>${mult}</td>
    `;
    tabela.appendChild(linhaMult);

    const linhaDiv = document.createElement('tr');
    linhaDiv.innerHTML = `
        <td>div</td>
        <td>${div}</td>
    `;
    tabela.appendChild(linhaDiv);

    const linhaResto = document.createElement('tr');
    linhaResto.innerHTML = `
        <td>resto</td>
        <td>${resto}</td>
    `;
    tabela.appendChild(linhaResto);

});
