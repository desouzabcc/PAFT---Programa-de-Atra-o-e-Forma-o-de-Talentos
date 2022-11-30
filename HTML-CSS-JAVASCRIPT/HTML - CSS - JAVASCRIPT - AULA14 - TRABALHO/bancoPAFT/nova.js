
const nome = document.getElementById("nome");
const cep = document.getElementById("cep");
const fone = document.getElementById("fone");
const data = document.getElementById("data");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const buttonNova = document.getElementById("buttonNova");

buttonNova.addEventListener("click", () => {
    const valueCep = cep.value;
    const valueFone = fone.value;
    const valueData = data.value;
    const valueEmail = email.value;
    const valueCPF = cpf.value;
    const valueNome = nome.value;
    
    if (isValidDate(valueData) !==true){
        alert("Data Inválida");
    }
    else if (TestaCPF(valueCPF) !==true){
        alert("CPF Inválido");
    }
    else{
        let resultado = `Parabéns \nSenhor(a) ${valueNome}. \n Em breve entraremos em contato\n`
        alert(resultado);
    }
});

/* Validando data */
const isValidDate = (value) => {
    const regex = /^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)?[0-9]{2})*$/;
    return regex.test(value);   
}
  
const dateValidate = (value) => {
    if (isValidDate(value))
        return true;
    else
        return false;
}

/* Validando o CPF*/
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;
    for (i=1; i<=9; i++) 
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  
        Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) 
        return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) 
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  
        Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) 
        return false;
    return true;
}
