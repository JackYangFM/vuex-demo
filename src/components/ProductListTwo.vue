<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
      <button @click="handleMinusPrice">减少价格</button>
      <button @click="handleMinusPriceAsync">异步减少价格</button>
      <button @click="handleAddPriceAsync">增加价格</button>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['minusPriceAsync']),
    ...mapMutations(['minusPrice', 'addPrice']),
    handleMinusPrice() {
      this.minusPrice(2)
    },
    handleMinusPriceAsync() {
      this.minusPriceAsync(5)
    },
    handleAddPriceAsync() {
      this.addPrice(2)
    }
  }
}
</script>

<style scoped>
  #product-list-two {
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  
  #product-list-two ul {
    padding: 0;
    list-style-type: none;
  }
  
  #product-list-two li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
  
  .price {
    font-weight: bold;
    color: #860CE8;
    display: block;
  }
</style>
