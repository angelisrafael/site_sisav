<template>
    <div class="container">
         <h2>Cadastro de Usuário</h2>
         <form>
             <label for="nome">Nome:</label>
             <input  v-model="usuario.nome" type="text" id="nome" required>
             
             <label for="email">Email:</label>
             <input  v-model="usuario.email" type="email" id="email" required>
             
             <label for="senha">Senha:</label>
             <input v-model="usuario.senha" type="password" id="senha" required>

             <label for="senha">Confirme a senha:</label>
             <input v-model="senha" type="password" id="senha" required>
             
             <button v-on:click="cadastrar" type="submit">Cadastrar</button>
         </form>
     </div>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
   name: 'cadastroUsuario',
   props: {
     msg: String,
   },
   data(){
    return {
        usuario: {},
        senha: String
    }
   },
   methods: {
        async cadastrar(){
            if(await this.validarSenha())return
            axios.post('http://localhost:8080/api/usuario/save', this.usuario)
                .then(() => {
                        this.$router.push({ name: 'loginForm'});
                        alert('Usuário cadastrado com sucesso')
                })
        },
        async validarSenha(){
            if(this.senha !== this.usuario.senha){
                alert('As senhas precisam ser iguais!')
                return true
            }
            if(this.usuario.senha.length < 8 ){
                alert('A precisa conter no mínimo 8 caracteres!')
                return true
            }
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
 