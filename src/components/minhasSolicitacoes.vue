<template>
    <div class="container">
        <div class="buttons">
            <button @click="currentView = 'notasEFaltas'">Novas</button>
            <button @click="currentView = 'AAC'">Minhas Solicitações</button>
            <button @click="currentView = 'historico'">Programas e Disciplinas</button>
            <button @click="currentView = 'comprovante'">Disciplinas Ofertadas</button>
        </div>

        <div class="table-container">
            <table class="grade-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de criação</th>
                        <th>Solicitado por</th>
                        <th>Alterado Por</th>
                        <th>Status</th>
                        <th>Ultima alteração</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123.456</td>
                        <td>Emissão de histórico escolar</td>
                        <td>04/11/2023</td>
                        <td>ra11865</td>
                        <td>ra169581</td>
                        <td>Concluído</td>
                        <td>04/11/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
 
<script>
export default {
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
  background-color: #f4f4f4;
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
 