<template>
    <div class="container">
         <h2>Login</h2>
         <form action="#" method="post">
             <label for="email">Email:</label>
             <input type="email" id="email" name="email" required>
             
             <label for="senha">Senha:</label>
             <input type="password" id="senha" name="senha" required>
             
             <button type="submit">Entrar</button>
         </form>
     </div>
 </template>
 
 <script>
 export default {
   name: 'loginForm',
   props: {
     msg: String
   }
 }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
        body {
             font-family: Arial, Helvetica, sans-serif;
             background-color: #b77f7f;
             margin: 0;
             padding: 20;
         }
         
         .container {
             max-width: 400px;
             margin: 0 auto;
             padding: 50px;
             background-color: #e4eae1;
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
             border-radius: 5px;
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
 