<template>
  <div  class="container-fluid">
    <div>
      <div class="row justify-content-center">
        <LogoPrincipal width=150 height=50></LogoPrincipal>
      </div> 
      <div class="row justify-content-center">
        <formulario class="formulario" v-if="resultadoFinal <= 0"></formulario>
        <resultado v-else></resultado>
      </div>     

    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import LogoPrincipal from "~/components/logoPrincipal";
import formulario from "~/components/formulario";
import resultado from "~/components/resultado";

export default {
  
  components: {            
    LogoPrincipal
  },
  
  computed: {        
        ...mapState({
            contribuicao: state => state.contribuicao,
            mensalidade: state => state.mensalidade,
            contribuicao: state => state.contribuicao,
            nome: state => state.nome,    
            juros: state => state.juros,
            resultadoFinal: state => state.resultado
        }),
    },

  methods: {

  },

  data () {
      return {        
      }
    }

  
}
</script>


<style lang='scss'>
  @import './style.scss';
</style>
