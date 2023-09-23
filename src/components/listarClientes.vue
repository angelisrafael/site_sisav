<template>
  <div>
    <h1>Lista de Clientes</h1> 
    <div class="icone-container">
      <button class="novo icone" v-on:click="novo()"><font-awesome-icon :icon="['fas', 'circle-plus']" size="lg" /></button>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>CPF</th>
          <th>Ações</th>
        </tr>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.id }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.cpf }}</td>
          <td>
            <button class="icone" v-on:click="editar(cliente.id)"><font-awesome-icon icon="fa-solid fa-pen-to-square" size="xl"/></button> 
            <button class="icone" v-on:click="deletar(cliente.id)"><font-awesome-icon icon="fa-solid fa-trash" size="xl"/></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'listaCliente',
  data() {
    return {
      clientes: []
    };
  },
  created() {
   this.buscarTodos()
  },
  methods:{
    buscarTodos(){
      axios.get('http://localhost:8080/api/cliente/get-all')
      .then(response => this.clientes = response.data)
    },

    editar(id){
        this.$router.push({ name: 'atualizarCliente', params:{id: id} });
    },

    deletar(id){
      console.log(id)
      axios.delete(`http://localhost:8080/api/cliente/delete-by-id?id=${id}`)
      .then( () => {
        alert('Cliente excluido com sucesso')
        this.buscarTodos()
      })
    },
    
    novo(){
      this.$router.push({ name: 'cadastroCliente'});
    }
  },
  props: {
    msg: String
  }
}
</script>


<style>
  .table {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content:center;
  }

  .table table,th,td {
    border-collapse: separate;
    border: 2px solid rgb(40, 81, 76);
    border-radius: 5px;
  }

  .table table {
    width: 80%;
  }

  .table table th {
    background-color: rgb(40, 81, 76);
    text-align: center;
    color: white;
  }

  .table table td {
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }

  .novo .fa-lg{
    font-size: 4.25em;
  }

  .icone{
    border: none;
    background-color: white;
    color: black;
  }

  .icone :hover{
    color: #408ee2;
  }

  .icone-container{
    width: 80%;
    display: flex;
    margin-right: auto;
    justify-content: right;
    margin-left: auto;
    padding-bottom: 15px;
    padding-right: 75px;
  }


</style>
