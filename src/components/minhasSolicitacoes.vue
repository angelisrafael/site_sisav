<template>
  <div class="container">
    <div class="buttons">
      <button :class="{ active: currentView === 'novas' }" @click="openPopup">Novas</button>
      <button :class="{ active: currentView === 'solicitacoes' }" @click="currentView = 'solicitacoes'">Minhas Solicitações</button>
    </div>

    <div class="table-container">
      <table class="grade-table">
        <div v-if="currentView === 'solicitacoes'" class="table-container" id="historico">
          <table class="grade-table">
            <thead>
              <tr>
                <th>Cód da solicitação</th>
                <th>Nome do documento</th>
                <th>Data</th>
                <th>Solicitado por</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitacoes in solicitacoes" :key="solicitacoes.id">
                <td>{{ solicitacoes.id }}</td>
                <td>{{ solicitacoes.nome_documento }}</td>
                <td>{{ solicitacoes.data_criacao }}</td>
                <td>{{ solicitacoes.solicitado_por }}</td>
                <td>{{ solicitacoes.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </table>
    </div>

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <h2>Nova Solicitação</h2>
        <input v-model="novaSolicitacao.nome" type="text" placeholder="Nome da solicitação" />
        <h6></h6>
        <span v-if="erro" class="erro-msg">{{ erro }} </span>
        <h6></h6> 
        <button @click="adicionarSolicitacao">Enviar</button>
        <button @click="closePopup">Fechar</button>
      </div>
    </div>

    <div v-if="showSuccessPopup" class="popup-overlay">
      <div class="popup">
        <h2>Solicitação enviada com sucesso!</h2>
        <button @click="fecharPopupDeSucesso">Fechar</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      userRA: localStorage.getItem('userRA'),
      currentView: '',
      solicitacoes: [],
      showPopup: false, 
      showSuccessPopup: false, 
      novaSolicitacao: {
        nome: ''
      },
      erro: '' 
    };
  },
  watch: {
    currentView(newValue) {
      if (newValue === 'solicitacoes') {
        this.fetchSolicitacoesData(); 
      }
    }
  },
  methods: {
    openPopup() {
      this.showPopup = true;
      this.erro = ''; 
    },
    closePopup() {
      this.showPopup = false;
    },
    async adicionarSolicitacao() {
      if (!this.novaSolicitacao.nome.trim()) {
        this.erro = 'Por favor, insira o nome da solicitação.'; 
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/solicitacoes', {
          nome_documento: this.novaSolicitacao.nome.trim(),
          ra_aluno: this.userRA
        });

        if (response.status === 200 || response.status === 201) {
         
          this.novaSolicitacao.nome = ''; 
          this.closePopup(); 
          this.showSuccessPopup = true; 
        } else {
          console.error('Erro ao enviar solicitação:', response);
          this.erro = 'Erro ao enviar solicitação. Tente novamente.';
        }
      } catch (error) {
        console.error('Erro ao adicionar solicitação:', error);
        this.erro = 'Erro ao enviar solicitação. Tente novamente.';
      }
    },
    fecharPopupDeSucesso() {
      this.showSuccessPopup = false; 
      this.currentView = 'solicitacoes'; 
    },
    async fetchSolicitacoesData() {
      try {
        const response = await axios.get('http://localhost:3000/solicitacoes/' + this.userRA);
        this.solicitacoes = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados de solicitações:', error);
      }
    }
  },

  name: 'minhasSolicitacoes',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 80vh; 
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px; 
}

.table-container {
  flex: 1; 
  margin-top: 100px;
  padding: 10px; 
}

.grade-table {
  width: 100%; 
  border-collapse: collapse;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  text-align: center;
}

.popup input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
}

.popup button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.erro-msg {
  color: red;
  margin-bottom: 10px;
}

.mensagem-sucesso {
  color: green;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #ffffff;
  padding: 30px;
}

button {
  margin: 0 10px;
  padding: 15px 30px;
  border: none;
  background-color: #000000;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}


button:hover {
  background-color: #ea7474;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
}

.grade-table {
  width: 80%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
}

.grade-table thead tr {
  background-color: #000;
  color: #ffffff;
  text-align: left;
}

.grade-table th,
.grade-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.grade-table tbody tr {
  background-color: #f4f4f4;
}

.grade-table tbody tr:nth-of-type(even) {
  background-color: #e9e9e9;
}

.grade-table tbody tr:hover {
  background-color: #d1d1d1;
}

.grade-table tbody td div {
  margin-bottom: 5px;
}
</style>