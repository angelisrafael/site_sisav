<template>
    <div>
    <h1>Lista de Clientes</h1>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        <span>Nome {{ cliente.nome }}</span> <br> <span>Email:{{ cliente.email }}</span> <br><br>
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
      clientes: [
        // { id: 1, nome: 'Cliente 1', email: 'cliente1@example.com' },
        // { id: 2, nome: 'Cliente 2', email: 'cliente2@example.com' },
        // { id: 3, nome: 'Cliente 3', email: 'cliente3@example.com' },
      ]
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

span {
  color: rgb(10, 10, 11);
  font-size: 30px;
  
}
</style>
