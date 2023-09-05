<template>
     <div class="container">
        <div class="button-container">
            <button class="button">Cadastrar cliente</button>
            <button class="button">Cadastrar usuário</button>
            <button class="button">Cadastrar carro</button>
            <button class="button">Botão 4</button>
        </div>
    </div>
 </template>
 
 <script>
 export default {
   name: 'telaPrincipal',
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

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .button-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
        }

        .button {
            padding: 20px 30px;
            background-color: #7fb9f6;
            color: #fbfbfb;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .button:hover {
            background-color: #408ee2;
        }
 </style>
 