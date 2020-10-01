export default {
  async postExpression({ commit }, payload) {

    let expression = {
        expr : `${payload.mensalidade}  (((1 + ${payload.juros}) ^ ${payload.contribuicao} - 1) / ${payload.juros})`
    }
    let resolvido = await this.$axios.post('http://api.mathjs.org/v4/', expression);

    let dadosGravacao = {
      nome: payload.nome,
      contribuicao: payload.contribuicao,
      mensalidade: payload.mensalidade,
      juros: payload.juros,
      resolvido: resolvido.data.result
    }
    
     commit("gravaDados", dadosGravacao);

  },
  clearData({commit}){
    commit("clearDados")
  }
}
