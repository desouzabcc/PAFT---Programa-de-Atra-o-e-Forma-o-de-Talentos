const inputSaque = document.getElementById("inputSaque");
const inputSaque1 = document.getElementById("inputSaque1");
const buttonSaque = document.getElementById("buttonSaque");
const buttonSaque1 = document.getElementById("buttonSaque1");
const valorDoSaldo = document.getElementById("valorDoSaldo");
const valorDoSaque = document.getElementById("valorDoSaque");

const buttonExtrato = document.getElementById("buttonExtrato");

const valorDoDeposito = document.getElementById("valorDoDeposito");
const inputDeposito = document.getElementById("inputDeposito");
const inputDeposito1 = document.getElementById("inputDeposito1");
const buttonDeposito = document.getElementById("buttonDeposito");
const buttonDeposito1 = document.getElementById("buttonDeposito1");

const msgCaixa = document.getElementById("msg");

let extrato = "Saldo de R$ 2000 \n";

buttonSaque.addEventListener("click", () => {
    const value = inputSaque.value;
    if (Number(value) === 0) {
        msgCaixa.innerHTML = "Valor inválido";
    }
    else if (Number(value) > Number(valorDoSaldo.innerText)) {
        msgCaixa.innerHTML = "Saldo insuficiente";
    }
    else {
        const saldoValue = Number(valorDoSaldo.innerText) - Number(value);
        const saqueValue = Number(valorDoSaque.innerText) + Number(value);
        valorDoSaque.innerText = saqueValue;
        extrato += `Saque de R$ ${saqueValue}\n`
        extrato += `Saldo de R$ ${saldoValue}\n`
        valorDoSaldo.innerText = saldoValue;
        inputSaque.value = "";
        msgCaixa.innerHTML = "";
    }
});

buttonSaque1.addEventListener("click", () => {
    const value = inputSaque1.value;
    if (Number(value) === 0) {
        msgCaixa.innerHTML = "Valor inválido";
    }
    else if (Number(value) > Number(valorDoSaldo.innerText)) {
        msgCaixa.innerHTML = "Saldo insuficiente";
    }
    else {
        const saldoValue = Number(valorDoSaldo.innerText) - Number(value);
        const saqueValue = Number(valorDoSaque.innerText) + Number(value);
        valorDoSaldo.innerText = saldoValue;
        extrato += `Pagamentos de R$ ${value}\n`
        extrato += `Saldo de R$ ${saldoValue}\n`
        inputSaque.value = "";
        msgCaixa.innerHTML = "";
    }
});

buttonDeposito.addEventListener("click", () => {
    const value = inputDeposito.value;
    const depositoValue = Number(valorDoDeposito.innerText) + Number(value);
    const saldoValue = Number(valorDoSaldo.innerText) + Number(value);
    valorDoDeposito.innerText = depositoValue;
    extrato += `Deposito de R$ ${depositoValue}\n`
    extrato += `Saldo de R$ ${saldoValue}\n`
    valorDoSaldo.innerText = saldoValue;
    inputDeposito.value = "";
    msgCaixa.innerHTML = "";
});

buttonDeposito1.addEventListener("click", () => {
    const value = inputDeposito1.value;
    const saldoValue = Number(valorDoSaldo.innerText) + Number(value);
    valorDoSaldo.innerText = saldoValue;
    extrato += `Empréstimo de R$ ${value}\n`
    extrato += `Saldo de R$ ${saldoValue}\n`
    inputDeposito.value = "";
    msgCaixa.innerHTML = "";
});

buttonExtrato.addEventListener("click", () => {
    alert(extrato);
});