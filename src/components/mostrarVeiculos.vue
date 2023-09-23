<template>
    <div class="container">
        <header>
            <h1>VA locs</h1>
        </header>
        <div class="container">
            <h1>Carros em Destaque</h1>
            <div class="movie-list" v-for="carros in carros" :key="carros.id">
                <div class="movie">
                    <img src="../assets/carro3.jpeg" alt="carro 3">
                    <h3>{{ carros.nome }}</h3>
                    <p>Ano:{{ carros.ano }}<br>
                        Especificações: {{ carros.especificacoes }}
                    </p>
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
            carros: [
            // { id: 1, nome: 'Cliente 1', especificacoes: 'cliente1@example.com', ano:2023 },
            // { id: 2, nome: 'Cliente 2', especificacoes: 'cliente2@example.com', ano:2023  },
            // { id: 3, nome: 'Cliente 3', especificacoes: 'cliente3@example.com', ano:2023  },
            ]
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
    font-size: 36px;
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

.movie:hover {
    transform: scale(1.02);
}

.movie img {
    max-width: 100%;
    height: auto;
}

</style>
 