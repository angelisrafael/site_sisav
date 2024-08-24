<template>
  <div class="container">
    <div class="button-container">
      <button class="square-button">
        <i class="fas fa-clock"></i>
        <span>Horário de Aulas</span>
      </button>
      <button class="square-button">
        <i class="fas fa-map-marker-alt"></i>
        <span>Mapa UEM</span>
      </button>
    </div>

    <h1 class="label-perfil">Horários de aulas</h1>

    <div class="horario_aula">
      <table>
        <thead>
          <tr>
            <th>Hr./Aula</th>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
            <th>Sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08:00 - 09:00</td>
            <td>{{ horarios.segunda[1] }}</td>
            <td>{{ horarios.terca[1] }}</td>
            <td>{{ horarios.quarta[1] }}</td>
            <td>{{ horarios.quinta[1] }}</td>
            <td>{{ horarios.sexta[1] }}</td>
            <td>{{ horarios.sabado[1] }}</td>
          </tr>
          <tr>
            <td>09:00 - 10:00</td>
            <td>{{ horarios.segunda[2] }}</td>
            <td>{{ horarios.terca[2] }}</td>
            <td>{{ horarios.quarta[2] }}</td>
            <td>{{ horarios.quinta[2] }}</td>
            <td>{{ horarios.sexta[2] }}</td>
            <td>{{ horarios.sabado[2] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1 class="label-perfil">Mapa UEM</h1>
    <img alt="Vue logo" class="imageUem" src="../assets/mapaUem.jpg">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userRA: localStorage.getItem('userRA'),
      horarios: {
        segunda: { 1: '', 2: '' },
        terca: { 1: '', 2: '' },
        quarta: { 1: '', 2: '' },
        quinta: { 1: '', 2: '' },
        sexta: { 1: '', 2: '' },
        sabado: { 1: '', 2: '' },
      }
    };
  },
  created() {
    this.fetchHorarios();
  },
  methods: {
    async fetchHorarios() {
      try {
        // Supondo que o RA do aluno seja '101', substitua conforme necessário
        //const raAluno = '101';

        const response = await axios.get('http://localhost:3000/disciplina/horarios/' + this.userRA);

        console.log('Resposta da API:', response.data);

        const disciplinas = response.data.data;

        // Preencher a tabela de horários
        disciplinas.forEach(disciplina => {
          const dia = disciplina.dia_semana.toLowerCase().replace('segunda-feira', 'segunda')
                                                 .replace('terça-feira', 'terca')
                                                 .replace('quarta-feira', 'quarta')
                                                 .replace('quinta-feira', 'quinta')
                                                 .replace('sexta-feira', 'sexta')
                                                 .replace('sábado', 'sabado');
          if (this.horarios[dia]) {
            this.horarios[dia][disciplina.horario] = disciplina.nome_disciplina;
          }
        });

        console.log('Horários:', this.horarios);
      } catch (error) {
        console.error('Erro ao buscar horários:', error);
      }
    }
  }
}
</script>
 
<style scoped>

.label-perfil {
  font-size: 25px;
  display: flex;
  align-items: left;
  padding-left: 10%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.imageUem {
  width: 70%;
}

.button-container {
  margin: 5%;
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 20px;
}

.square-button {
  width: 150px;
  height: 100px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #ddd;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.square-button i {
  font-size: 24px; /* Tamanho do ícone */
  margin-bottom: 5px;
}

.square-button:hover {
  background-color: #908f8f;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

table {
    border-collapse: collapse;
    width: 80%;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

thead {
    background-color: #000000;
    color: white;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

th {
    padding-top: 12px;
    padding-bottom: 12px;
}

</style>
 