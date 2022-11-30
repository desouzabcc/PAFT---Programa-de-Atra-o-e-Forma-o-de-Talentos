const buttonLogin = document.getElementById('submitLogin');
const inputCPF = document.querySelector('#inputCPF');
const inputPassword = document.querySelector('#inputPassword');
const cpfLogin = '12345678901'
const passwordLogin = '123456'

buttonLogin.addEventListener('click', () => {
  event.preventDefault()

  const loginCPF = inputCPF.value.trim()
  const loginPassword = inputPassword.value.trim()

  if (loginCPF === '12345678901' || loginPassword === '123456') {
    window.open('conta.html', '_self');
    return
  }
  else if (loginCPF === '' || loginPassword === '') {
        alert('CPF e senha são obrigatórios')
    return
  } 
  else {
    alert('CPF ou senha não cadastrados')
    return
  }
})