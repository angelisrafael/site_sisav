<template>
    <div class="container">
         <h2>Cadastro de locação</h2>
         <form action="#" method="post">
             <label for="cliente">Cliente:</label>
             <input type="text" id="cliente" name="cliente" required>

             <label for="carro">Carro:</label>
             <input type="text" id="carro" name="carro" required>
             
             
             <label for="placa">Placa:</label>
             <input type="text" id="placa" name="placa" required>
             
             <button type="submit">Cadastrar</button>
         </form>
     </div>
 </template>
 
 <script>
 export default {
   name: 'cadastroLocacao',
   props: {
     msg: String
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
 