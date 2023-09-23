<template>
    <div class="container">
        <div class="container">
            <h1>Lista de Carros</h1>
            <div class="icone-container">
                <button class="novo icone" v-on:click="novo()"><font-awesome-icon :icon="['fas', 'circle-plus']"
                        size="lg" /></button>
            </div>
            <div class="movie-list">
                <div class="movie" v-for="carro in carros" :key="carro.id">
                    <div class="content">
                        <div class="acoes">
                            <button class="icone" v-on:click="editar(carro.id)"><font-awesome-icon icon="fa-solid fa-pen-to-square" size="xl"/></button> 
                            <button class="icone" v-on:click="deletar(carro.id)"><font-awesome-icon icon="fa-solid fa-trash" size="xl"/></button>
                        </div>
                        <img src="../assets/carro3.jpeg" alt="carro 3">
                        <h3>{{ carro.nome }}</h3>
                        <span><b>Id:</b> {{ carro.id }}</span><br>
                        <span><b>Nome:</b> {{ carro.nome }}</span><br>
                        <span><b>Marca:</b> {{ carro.marca }}</span><br>
                        <span><b>Modelo:</b> {{ carro.modelo }}</span><br>
                        <span><b>Placa:</b> {{ carro.placa }}</span><br>
                        <span><b>Especificações:</b> {{ carro.especificacoes }}</span><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios';
export default {
    name: 'MostrarVeiculo',
    props: {
        msg: String
    },
    data() {
        return {
            carros: []
        };
    },
    created() {
        axios.get('http://localhost:8080/api/carro/get-all')
            .then(response => {
                console.log(response.data)
                this.carros = response.data;
            })
            .catch(error => {
                console.error('Erro ao obter os dados:', error);
            });
    },
    methods: {
        buscarTodos() {
            axios.get('http://localhost:8080/api/carro/get-all')
                .then(response => this.carros = response.data)
        },
        editar(id) {
            this.$router.push({ name: 'atualizarCarro', params:{id: id} });
        },
        deletar(id) {
            console.log(id)
            axios.delete(`http://localhost:8080/api/carro/delete-by-id?id=${id}`)
                .then(() => {
                    alert('Carro excluido com sucesso')
                    this.buscarTodos()
                })
        },
        novo() {
            this.$router.push({ name: 'cadastroCarro' });
        }
    },
}
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

h1 {
    margin: 0;
    font-size: 60px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-top: 15px;
}

.movie {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    width: calc(33.33% - 20px);
    padding: 20px;
    transition: transform 0.2s;

}

.content {
    text-align: left;
    font-weight: 300;
}

.movie:hover {
    transform: scale(1.02);
}

.movie img {
    max-width: 100%;
    height: auto;
}

.acoes{
    display: flex;
    padding-bottom: 15px;
    justify-content: right;
}
</style>
 