<template>
    <div>
    <h1>Lista de locações</h1>
    <ul>
      <li v-for="locacoes in locacoes" :key="locacoes.id">
        <span>{{ locacoes.carro.nome }}</span> - <span>{{ locacoes.cliente.nome }}</span>
        - <span>{{ locacoes.valorTotal }}</span>
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
      locacoes: []
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
</style>
