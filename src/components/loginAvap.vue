<template>
  <div class="login-container">
    <div class="login-form">
      <img class="logoBranca" src="@/assets/logoAvapWhite.png" alt="Login Image">
      <form @submit.prevent="login">
        <div class="form-group">
          <label style="text-align:left" for="username"><strong>RA</strong></label>
          <input style="width: 350px; height: 40px; border-radius: 10px" type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label style="text-align:left" for="password"><strong>Senha</strong></label>
          <input style="width: 350px; height: 40px; border-radius: 10px" type="password" id="password" v-model="password" required>
        </div>
        <button style="width: 185px; height: 40px; border-radius: 10px; margin-top: 25px" type="submit"><strong>Entrar</strong></button>
      </form>
    </div>
    <div class="login-image">
      <img src="@/assets/loginImage.png" alt="Login Image">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://localhost:3000/usuario');
        const users = response.data.data;

        const user = users.find(user => user.ra === parseInt(this.username) && user.senha === this.password);

        if (user) {
          localStorage.setItem('userRA', this.username);
          this.$router.push({ name: 'telaPrincipal' });
        } else {
          alert('Credenciais inválidas');
        }
      } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.login-form {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
}

.login-form h1 {
  margin-bottom: 1em;
}

.form-group {
  margin-bottom: 1em;
  width: 100%;
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
  font-size: 12px;
  display: block;
  margin-top: 1em;
  color: #b30000;
  text-align: center;
}

.login-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  overflow: hidden;
}

.logoBranca {
  width: 22%;
  height: 12%;
  margin-bottom: 50px;
}

.login-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
