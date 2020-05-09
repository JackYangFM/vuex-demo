export default {
  minusPrice (state, payload ) {
    state.products.forEach( product => {
      product.price -= payload
    })
  },
  addPrice (state, payload ) {
    state.products.forEach( product => {
      product.price += payload
    })
  }
}
