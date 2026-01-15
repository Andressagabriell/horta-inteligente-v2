document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const senhaCorreta = "1234";
    if (password === senhaCorreta) {
      window.location.href = 'painel.html';
    } else {
      alert("Senha incorreta. Tente novamente.");
      passwordInput.value = "";
    }
  });
});
