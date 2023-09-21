<template>
    <div>
    <h1>Lista de Clientes</h1>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        <span>{{ cliente.nome }}</span> - <span>{{ cliente.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'listaCliente',
  data() {
    return {
      clientes: []
    };
  },
  created() {
    axios.get('http://localhost:8080/api/cliente/get-all')
      .then(response => {
        console.log(response.data)
        this.clientes = response.data;
      })
      .catch(error => {
        console.error('Erro ao obter os dados:', error);
      });
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
