<template>
  <header v-if="checkRoute()" class="header">
    <button @click="telaPrincipal" class="button">Home</button>
    <button @click="listarCliente" class="button">Clientes</button>
    <button @click="listarVeiculo" class="button">Carros</button>
    <button @click="listarLocacao" class="button">Locações</button>
    <div>
      <button @click="logoff" class="button">Sair</button>
    </div>
  </header>
  <h1>VA locs</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
    <footer v-if="checkRoute()">
        <p>&copy; 2023 Locadora de carros VA locs</p>
    </footer>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    listarCliente() {
        this.$router.push({ name: 'listaCliente'});
    },
    listarLocacao() {
        this.$router.push({ name: 'listarLocacoes'});
    },
    listarVeiculo() {
        this.$router.push({ name: 'MostrarVeiculo'});
    },
    telaPrincipal() {
        this.$router.push({ name: 'telaPrincipal'});
    },
    logoff(){
      this.$router.push({ name: 'loginForm'}); 
      console.log(this.$route)
    },
    checkRoute(){
      return this.$route.name != 'loginForm' && this.$route.name != 'cadastroUsuario'     
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
  background-color: #333;
  color: #fff;
  flex-direction: row;
  justify-content: center;
}

.header button{
  background-color: #333;
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
</style>
