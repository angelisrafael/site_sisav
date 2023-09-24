<template>
    <div class="container">
         <h2>Login</h2>
         <form>
             <label for="email">Email:</label>
             <input  v-model="usuario.email" type="email" id="email" required>
             
             <label for="senha">Senha:</label>
             <input  v-model="usuario.senha" type="password" id="senha" required>
             <div class="login">
                 <button style="background-color: rgb(40, 81, 76);" v-on:click="cadastrar" type="submit">Cadastrar</button>
                 <button v-on:click="login" type="submit">Entrar</button>
             </div>
         </form>
     </div>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
   name: 'loginForm',
   props: {
     msg: String
   },
   data(){
    return{
        usuario: {},
    }
   },
   methods:{
    login(){
        axios.post('http://localhost:8080/api/usuario/validate-credentials', this.usuario)
        .then((response) => {
            if (response.data){
                this.$router.push({ name: 'telaPrincipal'});
            }
            else{
                alert('Email ou senha invalida')
            }
        })
    },
    cadastrar(){
        this.$router.push({ name: 'cadastroUsuario'});
    }
   }
 }
 </script>
 
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
             background-color: #333;
             box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
             border-radius: 5px;
             color: white;
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
             width: 94%;
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
         .login{
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
         }
 </style>
 