<template>
   <div class="container">
        <h2>Cadastro de Cliente</h2>
        <form>
            <label for="nome">Nome:</label>
            <input  v-model="cliente.nome" type="text" id="nome"  required>
            
            <label for="email">Email:</label>
            <input v-model="cliente.email" type="email" id="email"  required>

            <label for="cpf">CPF:</label>
            <input v-model="cliente.cpf" type="text" id="cpf">

            <label for="telefone">Telefone:</label>
            <input v-model="cliente.telefone" type="text" id="telefone">
            
            <button v-on:click="salvar" type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'cadastroCliente',
  props: {
    msg: String
  },
  data() {
    return {
      cliente: {}
    };
  },
  created() {
   if (this.$route.params.id) {
    this.buscarCliente(this.$route.params.id)
   }
  },
  methods:{
    buscarCliente(id){
      axios.get(`http://localhost:8080/api/cliente/get-by-id?id=${id}`)
      .then(response => this.cliente = response.data)
    },

    async salvar(){
        if(this.cliente.id){
            await axios.post(`http://localhost:8080/api/cliente/save`,this.cliente)
        }else{
            await axios.put(`http://localhost:8080/api/cliente/update`,this.cliente)
        }
        this.$router.push({ name: 'listaCliente'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 50px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
        }
        
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        
        label {
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        
        button[type="submit"] {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        
        button[type="submit"]:hover {
            background-color: #0056b3;
        }
</style>
