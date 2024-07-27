<template>
  <div class="body2">
    <h1>UEM</h1>
    <h1>Sobre a UEM</h1>
    <p>A Universidade Estadual de Maringá (UEM) é uma instituição pública de ensino superior localizada em Maringá,
      Paraná. Fundada em 1969, a UEM é reconhecida por sua excelência acadêmica e pela qualidade de seus cursos de
      graduação e pós-graduação. Com um corpo docente altamente qualificado e infraestrutura moderna, a universidade
      oferece uma ampla gama de cursos nas áreas de Ciências Humanas, Exatas, Biológicas, Agrárias e Tecnológicas.</p>

    <h2>Missão</h2>
    <p>A missão da UEM é promover a educação superior de qualidade, a pesquisa científica e a extensão universitária,
      contribuindo para o desenvolvimento social, econômico e cultural da região e do país. A instituição busca formar
      profissionais competentes e cidadãos críticos, comprometidos com a ética, a justiça social e a sustentabilidade.</p>

    <h2>Visão</h2>
    <p>Ser uma universidade de referência nacional e internacional, reconhecida pela excelência no ensino, na pesquisa e
      na extensão, e pela sua contribuição significativa para a sociedade.</p>

    <h2>Valores</h2>
    <ul>
      <li><strong>Excelência Acadêmica:</strong> Compromisso com a qualidade do ensino, pesquisa e extensão.</li>
      <li><strong>Ética e Transparência:</strong> Conduta ética e transparente em todas as atividades.</li>
      <li><strong>Inclusão e Diversidade:</strong> Promoção de um ambiente inclusivo e diverso.</li>
      <li><strong>Inovação:</strong> Incentivo à inovação e ao desenvolvimento tecnológico.</li>
      <li><strong>Sustentabilidade:</strong> Compromisso com práticas sustentáveis e respeito ao meio ambiente.</li>
    </ul>

    <h2>Estrutura</h2>
    <p>A UEM conta com diversos campi e centros de ensino espalhados pela região, oferecendo uma infraestrutura que inclui
      laboratórios de ponta, bibliotecas, centros de pesquisa e espaços de convivência. Além disso, a universidade mantém
      parcerias com instituições nacionais e internacionais, promovendo intercâmbios e colaborações que enriquecem a
      experiência acadêmica de seus estudantes e pesquisadores.</p>
  </div>
</template>

<script>
export default {
  name: 'pageSobre',
  data() {
    return {
      locacoes: [
      ]
    };
  },
  created() {

  },
  methods: {

  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.body2 {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 50;
  padding: 20px;
  align-items: end;

}

h1,
h2,
h3 {
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

span {
  color: rgb(10, 10, 11);
  font-size: 30px;

}</style>
