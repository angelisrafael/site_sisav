<template>
  <div class="container">

    <div class="button-container">
      <button class="square-button">
        <i class="fas fa-clock"></i>
        <p style="font-size:10px"></p>
        <span>Horário de Aulas</span>
      </button>
      <button class="square-button">
        <i class="fas fa-map-marker-alt"></i>
        <p style="font-size:10px"></p>
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
                <td>Matemática</td>
                <td>Português</td>
                <td>História</td>
                <td>Geografia</td>
                <td>Ciências</td>
                <td>Educação Física</td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td>Inglês</td>
                <td>Matemática</td>
                <td>Português</td>
                <td>História</td>
                <td>Geografia</td>
                <td>Artes</td>
            </tr>
            <!-- Adicione mais linhas conforme necessário -->
        </tbody>
    </table>

    </div>


    <h1 class="label-perfil">Mapa UEM</h1>
    <img alt="Vue logo" class="imageUem" src="../assets/mapaUem.jpg">
  </div>
</template>
 
<script>
export default {
  name: 'telaPrincipal',
  props: {
    msg: String
  },

  methods: {


  }
}
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
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
 