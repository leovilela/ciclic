<template>
    <div>
    <!-- <pre>{{`${process.env.JUROS}---teste`}}</pre> -->
    <form class="container--form"  v-on:submit.prevent >
        <div class="d-fluid row head paddingMargin justify-content-between">
            <div class="col-xl-12">
                <span class="head--span">Olá {{nome}}, juntando {{mensalidade|currency}} todo mês, você terá {{resultado|currency}} em {{contribuicao/12}} anos</span>
            </div>          
        </div>
        
        <div class="row paddingMargin">
            <div class="col-xl-12 boxFlex">
                <button class="panel--btn-submit rounded-pill" @click="reiniciar()" >SIMULAR NOVAMENTE</Button>
            </div>  
        </div>
        
    </form>
    
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { moneyFormatter } from "~/utils/currency.utils";

export default {
    name: 'resultado',
    data() {
        return {
        };
    },
    
    filters: {
        currency(value) {
        if (!value) {
            return
        }
        return moneyFormatter(value)
        }
    },
    methods: {
        ...mapActions({
            clearData: "clearData"
        }),
        reiniciar(){
            this.clearData()
        }
    },
    computed: {        
        ...mapState({
            mensalidade: state => state.mensalidade,
            contribuicao: state => state.contribuicao,
            nome: state => state.nome,    
            juros: state => state.juros,
            resultado: state => state.resultado
        })
    },

};
</script>

<style lang='scss'>
    @import './style.scss';
</style>
