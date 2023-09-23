<template>
     <div class="container">
        <div class="button-container">
            <button @click="atualizarCliente" class="button">Atualizar cliente</button>
            <button @click="cadastrarUsuario" class="button">Cadastrar usuário</button>
            <button @click="cadastrarCarro" class="button">Cadastrar carro</button>
            <button @click="cadastrarCliente" class="button">Cadastrar cliente</button>
            <button @click="cadastrarLocacao" class="button">Cadastrar locação</button>
            <button @click="listarCliente" class="button">Listar clientes</button>
            <button @click="listarLocacao" class="button">Listar locação</button>
            <button @click="listarVeiculo" class="button">Listar veículos</button>
            
        </div>
    </div>
 </template>
 
 <script>
 export default {
   name: 'telaPrincipal',
   props: {
     msg: String
   },

   methods: {
    atualizarCliente() {
        this.$router.push({ name: 'atualizarCliente', params: { id: 1 } });
    },
    cadastrarUsuario() {
        this.$router.push({ name: 'cadastroUsuario', params: { id: 1 } });
    },
    cadastrarCarro() {
        this.$router.push({ name: 'cadastroCarro', params: { id: 1 } });
    },
    cadastrarCliente() {
        this.$router.push({ name: 'cadastroCliente', params: { id: 1 } });
    },
    cadastrarLocacao() {
        this.$router.push({ name: 'cadastroLocacao', params: { id: 1 } });
    },
    listarCliente() {
        this.$router.push({ name: 'listaCliente', params: { id: 1 } });
    },
    listarLocacao() {
        this.$router.push({ name: 'listarLocacoes', params: { id: 1 } });
    },
    listarVeiculo() {
        this.$router.push({ name: 'MostrarVeiculo', params: { id: 1 } });
    },
    
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
 