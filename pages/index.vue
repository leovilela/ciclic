<template>
  <div  class="container-fluid">
    <div>
      <div class="row justify-content-center">
        <LogoPrincipal width=150 height=50></LogoPrincipal>
      </div> 
      <div class="row justify-content-center">
        <formulario class="formulario"></formulario>
      </div>     

    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import LogoPrincipal from "~/components/logoPrincipal";
import formulario from "~/components/formulario";

export default {
  
  components: {            
    LogoPrincipal
  },
  
  computed: {        
        ...mapState({
            listagem: state => state.listagem
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
