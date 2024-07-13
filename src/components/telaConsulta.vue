<template>
  <div>
   
    <div class="buttons">
        <button>Notas e faltas</button>
        <button>AAC</button>
        <button>Histórico escolar</button>
        <button>Comprovante de matrícula</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'telaConsulta',
  data() {
    return {
      clientes: []
    };
  },
  created() {

  },
  methods:{
 
  },
  props: {
    msg: String
  }
}
</script>


<style>

.buttons {
  font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

button {
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #cd6a6a;
}

</style>
