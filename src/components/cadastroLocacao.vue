<template>
    <div class="container">
        <h2>Cadastro de locação</h2>
        <form>
            <label for="cliente">Cliente:</label>
            <select v-model="locacao.cliente" id="cliente">
                <option v-bind:value ="cliente" v-for="cliente in clientes" :key="cliente.id">{{cliente.nome}} - {{cliente.cpf}}</option>
            </select>

            <label for="carro">Carro:</label>
            <select v-model="locacao.carro" id="carro">
                <option v-bind:value ="carro" v-for="carro in carros" :key="carro.id">{{carro.nome}} - {{carro.modelo}} - {{carro.placa}}</option>
            </select>


            <label for="dataRetirada">Data de Retirada:</label>
            <input style="max-width: 95%;" v-model="locacao.dataInicio" type="date" id="dataRetirada" required>

            <label for="dataRetorno">Data de Retorno:</label>
            <input style="max-width: 95%;" v-model="locacao.dataRetorno" type="date" id="dataRetorno" required>

            <label for="valor">Valor Total:</label>
            <input style="max-width: 95%;" v-model="locacao.valorTotal" type="number" min="0" step="any" id="valor" required>

            <button  v-on:click="cadastrar()" type="submit">{{ this.$route.params.id ? 'Atualizar' : 'Cadastrar' }}</button>
        </form>
    </div>
</template>
 
<script>
import axios from 'axios';
export default {
    name: 'cadastroLocacao',
    props: {
        msg: String
    },
    data() {
        return {
            clientes: {},
            carros: {},
            locacao: {}
        };
    },
    created() {
        this.buscarClientes()
        this.buscarCarros()
        if (this.$route.params.id) {
            this.buscarLocacao(this.$route.params.id)
        }
    },
    methods: {
    buscarClientes() {
        axios.get('http://localhost:8080/api/cliente/get-all')
             .then(response => this.clientes = response.data)
    },
    buscarCarros() {
        axios.get('http://localhost:8080/api/carro/get-all')
             .then(response => this.carros = response.data)
    },
    buscarLocacao(id) {
        axios.get(`http://localhost:8080/api/locacao/get-by-id?id=${id}`)
             .then(response => this.locacao = response.data)
    },
    cadastrar(){
        axios.post('http://localhost:8080/api/locacao/save', this.locacao)
             .then( () => {
                alert('Locação realizada com sucesso')
                this.$router.push({ name: 'listarLocacoes'});
             })
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
input[type="password"],
input[type="date"],
input[type="number"],
select {
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
 