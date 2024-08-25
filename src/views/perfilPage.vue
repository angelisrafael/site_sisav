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
            <label for="ra">RA</label>
            <input type="text" id="ra" v-model="dadosPessoais.ra" readonly>
          </div>
          <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" v-model="dadosPessoais.nome" readonly>
          </div>
          <div class="form-group">
            <label for="serie">Série Atual</label>
            <input type="text" id="serie" :value="serieFormatada" readonly>
          </div>
        </form>
        <div style="height: 50px"></div>
      </div>
      <div v-if="activeSection === 'documentosPessoais'" class="documentos-pessoais">
        <h2 class="label-perfil" style="padding-bottom: 50px">Documentos Pessoais</h2>
        <table style="margin-bottom:100px">
          <tbody>
            <tr v-for="documento in documentos" :key="documento.numero">
              <td>{{ documento.nome }}</td>
              <td>{{ documento.numero }}</td>
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
      activeSection: 'dadosPessoais',
      dadosPessoais: {
        ra: '',
        nome: '',
        serie: ''
      },
      documentos: [] // Array para armazenar os documentos
    };
  },
  computed: {
    serieFormatada() {
      return this.dadosPessoais.serie ? `${this.dadosPessoais.serie}ª série` : '';
    }
  },
  methods: {
    alterarFoto() {
      // Lógica para alterar a foto de perfil
    },
    async fetchDadosPessoais() {
      try {
        const response = await fetch('http://localhost:3000/usuario/101');
        const result = await response.json();
        if (result.message === 'success') {
          this.dadosPessoais.ra = result.data.ra;
          this.dadosPessoais.nome = result.data.nome;
          this.dadosPessoais.serie = result.data.serie;
        }
      } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
      }
    },
    async fetchDocumentos() {
      try {
        const response = await fetch('http://localhost:3000/documentos/101');
        const result = await response.json();
        if (result.message === 'Disciplinas encontradas') {
          this.documentos = result.data;
        }
      } catch (error) {
        console.error('Erro ao buscar documentos:', error);
      }
    },
    salvarDadosPessoais() {
      console.log(this.dadosPessoais);
    },
    sair() {
      this.$router.push({ name: 'loginAvap'});
    }
  },
  created() {
    this.fetchDadosPessoais();
    this.fetchDocumentos(); 
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
