<template>
  <div class="faq-container">
    <div class="button-container">
      <button class="square-button">
        <i class="fas fa-clock"></i>
        <p style="font-size:10px"></p>
        <span>Horário de Aulas</span>
      </button>
      <button class="square-button">
        <i class="fas fa-map-marker-alt"></i>
        <p style="font-size:10px"></p>
        <span>Mapa UEM</span>
      </button>
    </div>
    <h1 class="label-pgt-freq">Perguntas Frequentes</h1>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question-container">
        <div class="faq-question" @click="toggleAnswer(index)">
          <h3>{{ faq.question }}</h3>
          <span class="toggle-icon">{{ faq.showAnswer ? '-' : '+' }}</span>
        </div>
        <p v-if="faq.showAnswer" class="faq-answer">{{ faq.answer }}</p>
      </div>
    </div>
    <h2 class="label-reclame">Reclame Aqui</h2>
    <div class="reclame-aqui">
      <div class="textarea-container">
        <textarea v-model="mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
        <button @click="enviarMensagem">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Como posso alterar minha senha?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          showAnswer: false
        },
        {
          question: "Onde posso encontrar o histórico das minhas solicitações?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          showAnswer: false
        },
        {
          question: "Como posso entrar em contato com o suporte?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          showAnswer: false
        }
      ],
      mensagem: ''
    }
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
    enviarMensagem() {
      if (this.mensagem) {
        alert(`Mensagem enviada: ${this.mensagem}`);
        this.mensagem = '';
      } else {
        alert('Por favor, digite uma mensagem.');
      }
    }
  }
}
</script>

<style scoped>
.label-pgt-freq {
  width: 85%;
  display: flex;
  justify-content: left;
  font-size: 25px;
}

.label-reclame {
  padding-top: 20px;
  width: 85%;
  display: flex;
  justify-content: left;
  font-size: 25px;
}

.faq-container {
  width: 75%;
  padding-left: 12.5%;
  padding-right: 12.5%;
  padding-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 20px;
}

.square-button {
  width: 150px;
  height: 100px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #ddd;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.square-button i {
  font-size: 24px; /* Tamanho do ícone */
  margin-bottom: 5px;
}

.square-button:hover {
  background-color: #908f8f;
}

.faq-item {
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq-question-container {
  width: 100%;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #000000;
  padding: 0.7em;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.faq-question h3 {
  margin: 0;
  color: #ffffff;
}

.toggle-icon {
  font-size: 1.5em;
  color: #ffffff;
}

.faq-answer {
  margin-top: 0.5em;
  display: flex;
  justify-content: left;
  padding: 1em;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.reclame-aqui {
  margin-top: 20px;
}

.textarea-container {
  position: relative;
}

.reclame-aqui textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.reclame-aqui button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #cd0303;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reclame-aqui button:hover {
  background-color: #800000;
}

h1, h2 {
  color: #2c3e50;
}

a {
  color: #b30000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
