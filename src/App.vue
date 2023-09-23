<template>
  <h1>VA locs</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
    <footer>
        <p>&copy; 2023 Locadora de carros VA locs</p>
    </footer>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  h1 {
    font-size: 60px;
    color: rgb(40, 81, 76);
  }

  footer {
    margin-top:  30px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}
</style>
