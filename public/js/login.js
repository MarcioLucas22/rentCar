var email = document.getElementById('email')
var senha = document.getElementById('senha')
var addButton = document.getElementById('addButton')

addButton.addEventListener('click', function () {
  firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then((userCredential) => {
      var user = userCredential.user;
      window.location.replace('/views/initial-page.html')
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      switch (errorCode) {
        case "auth/wrong-password":
          alert('Senha Incorreta!')
          break

        case "auth/user-not-found":
          alert('Usuário não encontrado!')
          break

        case "auth/invalid-email":
          alert('E-mail Inválido!')
          break

        default:
          alert('Falha na autenticação!')
          break
      }
    });
})