<template>
  <div>
    <h1>Lista de locações</h1>
    <div class="icone-container">
      <button class="novo icone" v-on:click="novo()"><font-awesome-icon :icon="['fas', 'circle-plus']"
          size="lg" /></button>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>Id</th>
          <th>Carro</th>
          <th>Cliente</th>
          <th>Total</th>
          <th>Ações</th>
        </tr>
        <tr v-for="locacao in locacoes" :key="locacao.id">
          <td>{{ locacao.id }}</td>
          <td>{{ locacao.carro.nome }}</td>
          <td>{{ locacao.cliente.nome }}</td>
          <td>{{ locacao.valorTotal }}</td>
          <td>
            <button class="icone" v-on:click="editar(locacao.id)"><font-awesome-icon icon="fa-solid fa-pen-to-square" size="xl" /></button>
            <button class="icone" v-on:click="deletar(locacao.id)"><font-awesome-icon icon="fa-solid fa-trash" size="xl"/></button>
          </td>
        </tr>
      </table>
    </div>
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
  methods: {
    buscarTodos() {
      axios.get('http://localhost:8080/api/locacao/get-all')
        .then(response => this.locacoes = response.data)
    },
    editar(id) {
      console.log(id)
      axios.get(`http://localhost:8080/api/locacao/get-by-id?id=${id}`)
        .then(response => {
          console.log(response)
        })
    },
    deletar(id) {
      console.log(id)
      axios.delete(`http://localhost:8080/api/locacao/delete-by-id?id=${id}`)
        .then(() => {
          alert('Locação excluida com sucesso')
          this.buscarTodos()
        })
    },
    novo() {
      this.$router.push({ name: 'cadastroLocacao' });
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
span {
  color: rgb(10, 10, 11);
  font-size: 30px;

}
</style>
