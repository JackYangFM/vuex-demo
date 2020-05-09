export default {
  minusPriceAsync({ commit }, payload ) {
    setTimeout( () => {
      commit( 'minusPrice', payload )
    }, 1000)
  }
}
