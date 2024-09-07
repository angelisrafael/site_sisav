<template>
  <div>
    <div class="buttons">
        <button :class="{ active: currentView === 'notasEFaltas' }" @click="currentView = 'notasEFaltas'">Notas e Faltas</button>
        <button :class="{ active: currentView === 'AAC' }" @click="currentView = 'AAC'">AAC</button>
        <button :class="{ active: currentView === 'historico' }" @click="currentView = 'historico'">Histórico Escolar</button>
    </div>
    <div v-if="currentView === 'notasEFaltas'" class="table-container"  id="notasEFaltas">
      <table class="grade-table">
        <thead>
          <tr>
            <th>Cód. da Disc.</th>
            <th>Disciplina</th>
            <th>Situação</th>
            <th>Faltas</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="disciplina in notasEFaltasData" :key="disciplina.id_disciplina">
            <td>{{ disciplina.id_disciplina }}</td>
            <td>{{ disciplina.nome_disciplina }}</td>
            <td>{{ disciplina.situacao }}</td>
            <td>{{ disciplina.faltas }}</td>
            <td>{{ disciplina.media !== null ? disciplina.media : '---' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="currentView === 'AAC'" class="table-container" id="AAC">
      <table class="grade-table">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Nome</th>
            <th>Carga Horária</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="disciplina in aacData" :key="disciplina.nome">
            <td>{{ disciplina.ano }}</td>
            <td>{{ disciplina.nome }}</td>
            <td>{{ disciplina.horas }}</td>
            <td>{{ disciplina.status }}</td>
          </tr>
        </tbody>
      </table>    
    </div>

    <div v-if="currentView === 'historico'" class="table-container" id="historico">
      <table class="grade-table">
        <thead>
          <tr>
            <th>Cód da Disc.</th>
            <th>Disciplina</th>
            <th>Série</th>
            <th>CH</th>
            <th>Média</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="disciplina in historicoData" :key="disciplina.id_disciplina">
            <td>{{ disciplina.id_disciplina }}</td>
            <td>{{ disciplina.nome_disciplina }}</td>
            <td>{{ disciplina.serie }}</td>
            <td>{{ disciplina.carga }}</td>
            <td>{{ disciplina.media !== null ? disciplina.media : '---' }}</td>
            <td>{{ disciplina.situacao }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'telaConsulta',
  data() {
    return {
      userRA: localStorage.getItem('userRA'),
      currentView: '', 
      notasEFaltasData: [],
      aacData: [],
      historicoData: []
    };
  },
  watch: {
    currentView(newValue) {
      if (newValue === 'notasEFaltas') {
        this.fetchNotasEFaltasData();
      } else if (newValue === 'AAC') {
        this.fetchAACData();
      } else if (newValue === 'historico') {
        this.fetchHistoricoData();
      }
    }
  },
  methods: {
    async fetchNotasEFaltasData() {
      try {
        const response = await axios.get('http://localhost:3000/disciplina/media/' + this.userRA);
        this.notasEFaltasData = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados de Notas e Faltas:', error);
      }
    },
    async fetchAACData() {
      try {
        const response = await axios.get('http://localhost:3000/aac/' + this.userRA);
        this.aacData = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados de AAC:', error);
      }
    },
    async fetchHistoricoData() {
      try {
        const response = await axios.get('http://localhost:3000/disciplina/historico/' + this.userRA);
        this.historicoData = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados de Histórico Escolar:', error);
      }
    }
  }
};
</script>

<style>

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

}
.botoes-perfil button.active:hover {
  background-color: rgb(170, 0, 0);
}

.grade-table {
  width: 80%;
  border-collapse: collapse;
  margin: 20px 0;
  margin-top: 40px;
  font-size: 16px;
  text-align: left;
}

.grade-table thead tr {
  background-color: #000;
  color: #ffffff;
  text-align: left;
}

.grade-table th, .grade-table td {
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

button.active {
  background-color: #e62c2c;
}
</style>
