<template>
  <header v-if="checkRoute()" class="header">
    <img @click="telaPrincipal" alt="Vue logo" class="imageLogo" src="./assets/logoAvap.png">
    <button @click="telaPrincipal" class="button">Consultas</button>
    <button @click="listarCliente" class="button">Solicitações</button>
    <button @click="pageAjuda" class="button">Ajuda</button>
    <button @click="pageSobre" class="button">Sobre</button>
    <img @click="telaPerfil" alt="Vue logo" class="image" src="./assets/iconMan.png">
  </header>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    listarCliente() {
        this.$router.push({ name: 'listaCliente'});
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
}

body{
  margin: 0;
}

.header{
  display: flex;
  background-color: #DE3030;
  color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header button{
  background-color: #DE3030;
}

h1 {
  font-size: 60px;
  color: rgb(40, 81, 76);
}

.nav{
  min-height: 100vh;
  max-height: 100%;
  width: 10vw;
  color: black;
  position: absolute;
  text-align: left;
  top: 50px;
}

.nav button {
  margin: 20px 5px 20px 20px;
  display: block;
  text-decoration: none;
  min-width: 100%;
}

footer {
  margin-top:  30px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

.button {
  padding: 20px 30px;
  background-color: #7fb9f6;
  color: #fbfbfb;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #408ee2;
}

.image {
  margin-left: auto; 
  width: 40px;
}

.imageLogo {
  margin-right: auto; 
  width: 150px;
}
</style>
