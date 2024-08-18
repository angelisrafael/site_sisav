<template>
  <div class="perfil-container">
    <div class="header-perfil">
      <h1 class="label-perfil">Meu Perfil</h1>
      <button class="sair-button" @click="sair">
        <i class="fas fa-sign-out-alt"></i> Sair
      </button>
    </div>
    <div class="perfil-content">
      <div class="foto-perfil">
        <img src="../assets/logoAvap.png" alt="Foto de Perfil" />
        <button class="edit-button" @click="alterarFoto">
          <i class="fas fa-pencil-alt"></i>
        </button>
      </div>
      <div class="botoes-perfil">
        <button :class="{ active: activeSection === 'dadosPessoais' }" @click="activeSection = 'dadosPessoais'">Dados Pessoais</button>
        <button :class="{ active: activeSection === 'documentosPessoais' }" @click="activeSection = 'documentosPessoais'">Documentos Pessoais</button>
      </div>
    </div>
    <div class="detalhes-perfil">
      <div v-if="activeSection === 'dadosPessoais'" class="dados-pessoais">
        <h2 class="label-perfil">Dados Pessoais</h2>
        <div style="height: 50px"></div>
        <form @submit.prevent="salvarDadosPessoais">
          <div class="form-group">
            <label for="nome">Dados Acadêmicos</label>
            <input type="text" id="nome" v-model="dadosPessoais.nome" readonly>
          </div>
          <div class="form-group">
            <label for="email">Dados do Aluno</label>
            <input type="email" id="email" v-model="dadosPessoais.email" readonly>
          </div>
          <div class="form-group">
            <label for="telefone">Endereço do Aluno</label>
            <input type="tel" id="telefone" v-model="dadosPessoais.telefone" readonly>
          </div>
        </form>
        <div style="height: 50px"></div>
      </div>
      <div v-if="activeSection === 'documentosPessoais'" class="dados-pessoais">
        <h2 class="label-perfil" style="padding-bottom: 50px">Documentos Pessoais</h2>
        <table>
          <thead>
            <tr>
              <th>Origem</th>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RG</td>
              <td>123456789</td>
              <td>01/01/2020</td>
              <td>SSP</td>
            </tr>
            <tr>
              <td>CPF</td>
              <td>987654321</td>
              <td>01/01/2020</td>
              <td>Receita Federal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'dadosPessoais', // Seção padrão ao carregar a página
      dadosPessoais: {
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        estado: ''
      }
    };
  },
  methods: {
    alterarFoto() {
      // Lógica para alterar a foto de perfil
    },
    salvarDadosPessoais() {
      // Lógica para salvar os dados pessoais
      console.log(this.dadosPessoais);
    },
    sair() {
      this.$router.push({ name: 'loginAvap'});
    }
  }
}
</script>

<style scoped>
.label-perfil {
  font-size: 25px;
}

.perfil-container {
  width: 75%;
  padding-left: 12.5%;
  padding-right: 12.5%;
  padding-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.header-perfil {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sair-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.sair-button:hover {
  background-color: rgb(199, 0, 0);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
}

.sair-button i {
  margin-right: 5px;
}

.perfil-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
}

.foto-perfil {
  position: relative;
  display: inline-block;
}

.foto-perfil img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid black;
}

.edit-button {
  position: absolute;
  bottom: 30px;
  right: 20px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: rgb(223, 223, 223);
  color: rgb(203, 0, 0);
}

.botoes-perfil {
  padding-top: 40px;
  display: flex;
  gap: 10px;
}

.botoes-perfil button {
  padding: 10px 20px;
  color: white;
  background-color: black;
  border-radius: 10px;
  width: 200px;
  font-size: 13px;
  font-weight: bold;
  border: none;
}

.botoes-perfil button.active {
  background-color: red;
}

.botoes-perfil button:hover {
  background-color: rgb(66, 66, 66);
}

.botoes-perfil button.active:hover {
  background-color: rgb(170, 0, 0);
}


.detalhes-perfil {
  margin-top: 40px;
  width: 100%;
}

.dados-pessoais h2, .documentos-pessoais h2 {
  margin-top: 0;
  color: #2c3e50;
  display: flex;
  align-items: left;
}

.dados-pessoais p, .documentos-pessoais p {
  margin-bottom: 15px;
}


.form-group {
  margin-bottom: 45px;
  height: 30px;
  width: 35%;
  margin-left: 32.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  width: 100%;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  flex-direction: inline;
  align-items: left;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  color: white;
  background-color: black;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: rgb(66, 66, 66);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  font-weight: bold;
  text-align: left;
  font-size: 14px;
}

th {
  background-color: #000000;
  color: white;
  font-weight: bold;
}
</style>
