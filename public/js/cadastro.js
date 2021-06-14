var email = document.getElementById('email')
var senha = document.getElementById('senha')
var addButtonRegister = document.getElementById('addButtonRegister')

addButtonRegister.addEventListener('click', function () {
  firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
    .then((user) => {
      alert('Registrado com sucesso')
    }).then(() => {
      setTimeout(() => {
        window.location.replace('index.html')
      }, 500)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert('Senha muito fraca! Mínimo de 6 caracteres')
      }
      if (errorCode === "auth/email-already-in-use") {
        alert('E-mail já em uso!')
      }
      if (errorCode === "auth/invalid-email") {
        alert('E-mail inválido!')
      }
    });
})