<template>
    <div>
    <!-- <pre>{{`${process.env.JUROS}---teste`}}</pre> -->
    <form class="container--form"  v-on:submit.prevent>
        <div class="d-fluid row head paddingMargin justify-content-between">
            <div class="col-xl-12">
                <span class="head--span">Simulador</span>
            </div>          
        </div>
        <div class="row paddingMargin">
                <div class="col-xl-12">
                    <label for="nome" class="label">Nome</label>
                    <input type="text" name="nome" v-model.trim="$v.nome.$model" placeholder="Nome"  class="input inputText upLevel "   :class="{ 'form-group--error': $v.nome.$error }" />
                </div>
                <div class="col-xl-12">
                    <label for="mensalidade" class="label">Mensalidade</label>
                    <money v-model.trim="$v.mensalidade.$model" name="mensalidade" class="input inputText upLevel" v-bind="money" :class="{ 'form-group--error': enableCpPrice }"></money>
                </div>
                <div class="col-xl-12">
                    <label for="contribuicao" class="label">Tempo de contribuição</label>
                    <select name="contribuicao" v-model.trim="$v.contribuicao.$model" class="input inputText upLevel" >
                        <option value="1">1 ano</option>
                        <option value="2">2 anos</option>
                        <option value="3">3 anos</option>
                    </select>
                </div>   
                              
        </div>
        <div class="row paddingMargin">
            <div class="col-xl-12 boxFlex">
                <button class="panel--btn-submit rounded-pill" @click="simular()" :disabled="$v.$invalid" :class="{ 'panel--btn-disabled': $v.$invalid }">SIMULAR</Button>
            </div>  
        </div>
        
    </form>
    
    </div>
</template>

<script>
import {Money} from 'v-money';
import {
  required, minLength, minValue, maxLength
} from "vuelidate/lib/validators";

import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "formulario",
    data () {
      return {
        juros: 0.00517,
        contribuicao: 0,        
        nome: '',
        mensalidade:  0.00,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: '',
          precision: 2,
          masked: false
        },
      }
    },
    components: {
      Money
    },
    created(){
      this.clearData();  
    },
    computed: {        
        enableCpPrice(){
            if(this.$v.mensalidade.$model != 0) {
                this.$v.mensalidade.$touch();
            }
        },
    },
    methods:{
        ...mapActions({
            postExpression: "postExpression",
            clearData: "clearData"
        }),
        simular(){
            if(this.$v.$invalid) { return }
            let objc = {
                mensalidade: this.mensalidade,
                nome: this.nome,
                contribuicao:  this.contribuicao * 12,
                juros: this.juros
            }
            this.postExpression(objc);
        },

    },
    validations: {
        nome: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(60)
        },
        contribuicao: {
            required,
            minValue: minValue(0.01)
        },
        mensalidade: {
            required,
            minValue: minValue(0.01)
        }
    }
    
};
</script>

<style lang='scss'>
    @import './style.scss';
</style>
