<template>
  <div id="app">
    <img :alt="imageAlt" :src="image" />
    <div>{{ product }}</div>
    <a :href="productLink">Link</a>
    <div :style="{ color: activeColor }">{{ price }}</div>
    <div>tien sau giam gia: {{money()}}</div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      imageAlt: 'ps5 alt',
      product: 'ps5',
      productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
      quantity: 10,
      price: 10000,
      discount: 0.2,
      inStock: true,
      classObject: {
        'bg-green': true,
        'bg-blue': false
      }
    }
  },
  methods: {
    money() {
      const priceDiscount = this.price - (this.price * this.discount)
      return priceDiscount
    }
  },
  computed: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 300px;
  height: 300px;
}
.text-red {
  color: red;
}
</style>
