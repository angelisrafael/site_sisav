<template>
    <div>
    <h1>Lista de locações</h1>
    <ul>
      <li v-for="locacoes in locacoes" :key="locacoes.id">
        <span>Nome do carro: {{ locacoes.carro.nome }}</span> <br> <span>Nome do cliente{{ locacoes.cliente.nome }}</span>
        <br> <span>valor total: {{ locacoes.valorTotal }}</span> <br><br>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'listaLocacoes',
  data() {
    return {
      locacoes: [
      ]
    };
  },
  created() {
    axios.get('http://localhost:8080/api/locacao/get-all')
      .then(response => {
        console.log(response.data)
        this.locacoes = response.data;
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
