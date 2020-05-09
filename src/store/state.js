export default {
  state: {
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{
    saleProducts: (state) => {
      return state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
    }
  }
}
