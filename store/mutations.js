export default {  
  clearDados(state){
    state.mensalidade = "";
    state.contribuicao = "";
    state.nome = "";
    state.juros = 0;
    state.resultado = 0;
  },
  gravaDados(state, payload){
    state.mensalidade = payload.mensalidade;
    state.contribuicao = payload.contribuicao;
    state.nome = payload.nome;
    state.juros = payload.juros;
    state.resultado = payload.resolvido;
  }
}
