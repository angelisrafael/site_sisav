<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Entrar</button>
    </form>
    <a href="#" @click="forgotPassword">Esqueceu sua senha? Clique aqui</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Implementar lógica de login aqui
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
      // Redirecionar após login bem-sucedido
      this.$router.push({ name: 'telaPrincipal' });
    },
    forgotPassword() {
      // Implementar lógica de recuperação de senha aqui
      console.log('Recuperação de senha');
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-group {
  margin-bottom: 1em;
}
.form-group label {
  display: block;
  margin-bottom: .5em;
}
.form-group input {
  width: 100%;
  padding: .5em;
  box-sizing: border-box;
}
button {
  background-color: #b30000;
  color: white;
  padding: .5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
a {
  display: block;
  margin-top: 1em;
  color: #b30000;
  text-align: center;
}
</style>
