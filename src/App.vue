<template>
  <header v-if="checkRoute()" class="header">
    <img @click="telaPrincipal" alt="Vue logo" class="imageLogo" src="./assets/logoAvap.png">
    <div class="button-container">
      <button @click="telaConsulta">Consultas</button>
      <button @click="solicitacoes">Solicitações</button>
      <button @click="pageAjuda">Ajuda</button>
      <button @click="pageSobre">Sobre</button>
    </div>
    <p class="raAluno">RA {{this.userRA}}</p>
    <img @click="telaPerfil" alt="Vue logo" class="image" src="./assets/iconMan.png">
  </header>

  <router-view></router-view>
</template>


<script>

export default {
  name: 'App',
  data() {
    return {
      userRA: localStorage.getItem('userRA')
    };
  },
  components: {},
  methods: {
    solicitacoes() {
        this.$router.push({ name: 'minhasSolicitacoes'});
    },
    telaConsulta() {
        this.$router.push({ name: 'telaConsulta'});
    },
    pageSobre() {
        this.$router.push({ name: 'pageSobre'});
    },
    listarVeiculo() {
        this.$router.push({ name: 'MostrarVeiculo'});
    },
    pageAjuda() {
        this.$router.push({ name: 'ajudaPage'});
    },
    telaPrincipal() {
        this.$router.push({ name: 'telaPrincipal'});
    },
    telaPerfil() {
        this.$router.push({ name: 'perfilForm'});
    },
    logoff(){
      this.$router.push({ name: 'loginForm'}); 
    },
    checkRoute(){
      return this.$route.name != 'loginForm' && this.$route.name != 'cadastroUsuario' && this.$route.name != 'loginAvap' ; 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

body {
  margin: 0;
}

.header {
  display: flex;
  background-color: #DE3030;
  color: #fff;
  align-items: center;
  padding: 10px;
  position: relative;
}

.header .button-container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.header button {
  background-color: #DE3030;
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.header button:hover {
  background-color: #870000;
}

.header .raAluno {
  position: absolute;
  right: 70px; /* Ajuste conforme necessário */
  top: 50%;
  transform: translateY(-50%);
}

.header .image {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
}

.header .imageLogo {
  margin-right: auto;
  width: 150px;
}

</style>
