<template>
  <div>
    <div class="buttons">
        <button @click="currentView = 'notasEFaltas'">Notas e Faltas</button>
        <button @click="currentView = 'AAC'">AAC</button>
        <button @click="currentView = 'historico'">Histórico Escolar</button>
        <button @click="currentView = 'comprovante'">Comprov. de Matrícula</button>
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
          <tr>
            <td>9999</td>
            <td>LABORATÓRIO DE ENGENH. DE SOFTWARE</td>
            <td>Matriculado</td>
            <td>4</td>
            <td>
              <div>Av. 1 - 9,0</div>
              <div>Av. 2 - 9,0</div>
              <div>Média - 9,0</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="currentView === 'AAC'" class="table-container" id="AAC">
      <table class="grade-table">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Disciplina</th>
            <th>Série</th>
            <th>CH</th>
            <th>Notas</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td>Matemática discreta</td>
            <td>1</td>
            <td>68,0</td>
            <td>80,0</td>
            <td>Aprovado</td>
          </tr>
        </tbody>
      </table>

    
    </div>

    <div v-if="currentView === 'historico'" class="table-container" id="historico">
      <table class="grade-table">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Atividade</th>
            <th>Tipo AAC</th>
            <th>CH</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td>Curso de HTML completo</td>
            <td>Curso</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="Button" v-if="currentView === 'comprovante'">
        Comprovante de matrícula
        <button>Fazer Download</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'telaConsulta',
  data() {
    return {
      currentView: 'notasEFaltas' // Default view
    };
  },
  created() {},
  methods: {},
  props: {
    msg: String
  }
}
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
  height: 20vh;

}
.botoes-perfil button.active:hover {
  background-color: rgb(170, 0, 0);
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
</style>
