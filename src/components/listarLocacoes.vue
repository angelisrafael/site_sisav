<template>
    <div>
    <h1>Lista de locações</h1>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        <span>{{ cliente.nome }}</span> - <span>{{ cliente.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listaCliente',
  data() {
    return {
      clientes: [
        { id: 1, nome: 'Cliente 1', email: 'cliente1@example.com' },
        { id: 2, nome: 'Cliente 2', email: 'cliente2@example.com' },
        { id: 3, nome: 'Cliente 3', email: 'cliente3@example.com' },
      ]
    };
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
