<template>
  <div class="container">
    <div class="buttons">
      <button :class="{ active: currentView === 'novas' }" @click="currentView = 'novas'">Novas</button>
        <button :class="{ active: currentView === 'solicitacoes' }" @click="currentView = 'solicitacoes'">Minhas Solicitações</button>
    </div>

    <div class="table-container">
      <table class="grade-table">
        <div v-if="currentView === 'solicitacoes'" class="table-container" id="historico">
          <table class="grade-table">
            <thead>
              <tr>
                <th>Cód da disciplina.</th>
                <th>Nome do documento</th>
                <th>Data</th>
                <th>Solicitado por</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitacoes in solicitacoes" :key="solicitacoes.id">
                <td>{{ solicitacoes.id }}</td>
                <td>{{ solicitacoes.nome_documento }}</td>
                <td>{{ solicitacoes.data_criacao }}</td>
                <td>{{ solicitacoes.solicitado_por }}</td>
                <td>{{ solicitacoes.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userRA: localStorage.getItem('userRA'),
      currentView: '',
      solicitacoes: [],
    };
  },
  watch: {
    currentView(newValue) {
      if (newValue === 'solicitacoes') {
        this.fetchNotasEFaltasData();
      }
    }
  },
  methods: {
    async fetchNotasEFaltasData() {
      try {
        const response = await axios.get('http://localhost:3000/solicitacoes/' + this.userRA);
        this.solicitacoes = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados de Notas e Faltas:', error);
      }
    },

  },

  name: 'minhasSolicitacoes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #ffffff;
  padding: 30px;
}

button {
  margin: 0 10px;
  padding: 15px 30px;
  border: none;
  background-color: #000000;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ea7474;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}

.grade-table {
  width: 80%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
}

.grade-table thead tr {
  background-color: #000;
  color: #ffffff;
  text-align: left;
}

.grade-table th,
.grade-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.grade-table tbody tr {
  background-color: #f4f4f4;
}

.grade-table tbody tr:nth-of-type(even) {
  background-color: #e9e9e9;
}

.grade-table tbody tr:hover {
  background-color: #d1d1d1;
}

.grade-table tbody td div {
  margin-bottom: 5px;
}
</style>