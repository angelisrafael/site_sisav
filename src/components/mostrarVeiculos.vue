<template>
    <div class="container">
        <header>
        <h1>VA locs</h1>
    </header>
    <div class="container">
        <h2>Carros em Destaque</h2>
        <div class="movie-list">
            <div class="movie">
                <img src="../assets/carro1.jpeg" alt="carro 1">
                <h3>hb20</h3>
                <p>Ano: 2022
                    4 portas
                    Ar-condicionado
                    Vidro elétrico
                    Trava elétrica
                    Air bag
                    Dir. Hidráulica
                    ABS
                    1 mala(s) grande(s)
                    1 mala(s) pequena(s)
                    4 pessoas
                </p>
            </div>
            <div class="movie">
                <img src="../assets/carro2.jpeg" alt="carro 2">
                <h3>corolla cross</h3>
                <p>Ano: 2022
                    4 portas
                    Ar-condicionado
                    Vidro elétrico
                    Trava elétrica
                    Air bag
                    Dir. Hidráulica
                    ABS
                    1 mala(s) grande(s)
                    1 mala(s) pequena(s)
                    5 pessoas
                </p>
            </div>
            <div class="movie">
                <img src="../assets/carro3.jpeg" alt="carro 3">
                <h3>honda civic</h3>
                <p>Ano: 2022
                    4 portas
                    Ar-condicionado
                    Vidro elétrico
                    Trava elétrica
                    Air bag
                    Dir. Hidráulica
                    ABS
                    1 mala(s) grande(s)
                    1 mala(s) pequena(s)
                    5 pessoas
                </p>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2023 Locadora de carros VA locs</p>
    </footer>
     </div>
 </template>
 
 <script>
 export default {
   name: 'MostrarVeiculo',
   props: {
     msg: String
   }
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

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
 </style>
 