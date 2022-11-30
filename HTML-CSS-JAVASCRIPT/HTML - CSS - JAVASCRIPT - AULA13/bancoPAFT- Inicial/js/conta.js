const buttonLogin = document.getElementById('submitLogin');
const inputEmail = document.querySelector('#inputCPF');
const inputPassword = document.querySelector('#inputPassword');
const emailLogin = '12345678901'
const passwordLogin = '123456'

buttonLogin.addEventListener('click', () => {
  event.preventDefault()

  const loginEmail = inputEmail.value.trim()
  const loginPassword = inputPassword.value.trim()

  if (loginEmail === '12345678901' || loginPassword === '123456') {
    window.open('conta.html', '_self');
    return
  }
  else if (loginEmail === '' || loginPassword === '') {
        alert('CPF e senha são obrigatórios')
    return
  } 
  else {
    alert('CPF ou senha não cadastrados')
    return
  }
})