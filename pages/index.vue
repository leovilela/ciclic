<template>
  <div  class="container-fluid">
    <div>
      <div class="row justify-content-center">
        <FormPedido class="formPedido"></FormPedido>
      </div>     

    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import LogoPrincipal from "~/components/logoPrincipal";
import FormPedido from "~/components/formPedido";

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
