<template>
     <div class="container">
        <div class="button-container">
            <button class="button">Botão 1</button>
            <button class="button">Botão 2</button>
            <button class="button">Botão 3</button>
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
            height: 100vh;
        }

        .button-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
        }

        .button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .button:hover {
            background-color: #0056b3;
        }
 </style>
 