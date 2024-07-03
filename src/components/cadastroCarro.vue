<template>
    <div class="container">
        <h2>Cadastro de carro</h2>
        <form>
        
            <label style="justify-content: left;" for="nome">Nome:</label>
            <input type="text" v-model="carro.nome" id="nome" required>

            <label for="ano">Ano:</label>
            <input type="text" v-model="carro.ano" id="ano" required>

            <label for="marca">Marca:</label>
            <input type="text" v-model="carro.marca" id="marca">

            <label for="modelo">Modelo:</label>
            <input type="text" v-model="carro.modelo" id="modelo">

            <label for="placa">Placa:</label>
            <input type="text" v-model="carro.placa" id="placa" required>

            <label for="especificacoes">Especificações:</label>

            <textarea style="min-width: 415px; max-width: 415px;" v-model="carro.especificacoes" id="especificacoes"
                rows="4" cols="50"> </textarea>

            <button type="submit" v-on:click="save">{{ this.$route.params.id ? 'Atualizar' : 'Cadastrar' }}</button>
        </form>
    </div>
</template>
 
<script>
import axios from 'axios';
export default {
    name: 'cadastroCarro',
    data() {
        return {
            carro: {}
        };
    },
    created() {
        if (this.$route.params.id) {
            this.buscarCarro(this.$route.params.id)
        }
    },
    methods: {
        buscarCarro(id) {
            axios.get(`http://localhost:8080/api/carro/get-by-id?id=${id}`)
                .then(response => this.carro = response.data)
        },

        async save() {
            if (this.carro.id) {
                await axios.post('http://localhost:8080/api/carro/save', this.carro)
            }
            else {
                axios.put('http://localhost:8080/api/carro/update', this.carro)
            }
            alert('Carro salvo com sucesso')
            this.$router.push({ name: 'MostrarVeiculo' });
        }
    }
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
 