<template>
    <div id="app">
        <div class="wrapper">
            <div class="productList">
                <div class="productItem" v-for = "(item, index) in products" :key="index">
                    <img :src="item.image" alt="">
                    <h1>{{item.name}}</h1>
                    <p>{{item.desc}}</p>
                    <p>{{item.price | formatCurrency}}</p>
                    <p >{{item.colors}}</p>
                    <p>{{item.date | formatDate}}</p>
                    <p v-if = "item.hot === true">San pham ban chay</p>
                    <p v-else>San pham ban khong chay</p>
                    <button @click="addToCart(item.id)" >Add to cart</button>
                </div>x
            </div>
            <div class="cart">
                <h1>Cart List</h1>
                <div class="cartItem" v-for="(cart, index) in carts" :key="index" >
                    <img :src="cart.image" alt="">
                    <h1>{{cart.name}}</h1>
                    <p>{{cart.price | formatCurrency}}</p>
                    <div>
                        <span @click = "increaseQuantity"> + </span>
                        <span> {{quantity}}</span>
                        <span @click = "decreaseQuantity"> - </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                quantity: 1,
                products: [
                    {
                        id: 1,
                        name: "samsung",
                        price: 5000,
                        date: "12 - 2 - 2000",
                        hot: true,
                        branch: "HanQuoc",
                        desc: "sdkufvdibv dk isuv uksdvlsiufv lisuev iu lsiuv",
                        image: "https://i.pinimg.com/236x/6a/ba/30/6aba30101b588950f5b8c50ec00b0a33.jpg",
                        colors: [
                            "black",
                            "red"
                        ],
                        quantities: 12
                    },
                    {
                        id: 2,
                        name: "samsung",
                        price: 5000,
                        date: "12 - 2 - 2000",
                        hot: false,
                        branch: "HanQuoc",
                        desc: "sdkufvdibv dk isuv uksdvlsiufv lisuev iu lsiuv",
                        image: "https://i.pinimg.com/236x/ee/ac/03/eeac0349ce9578361544e3bb5743430e.jpg",
                        colors: [],
                        quantities: 12
                    },
                    {
                        id: 3,
                        name: "samsung",
                        price: 5000,
                        date: "12 - 2 - 2000",
                        hot: true,
                        branch: "HanQuoc",
                        desc: "sdkufvdibv dk isuv uksdvlsiufv lisuev iu lsiuv",
                        image: "https://i.pinimg.com/236x/c2/f9/28/c2f928f3b757c08d70ebfaa2589157da.jpg",
                        colors: [],
                        quantities: 12
                    },
                ],
                carts: []
            }
        },
        computed: {

        },

        methods: {
            addToCart(id) {
                if (this.carts.find(product => product.id === id)) {
                    return this.quantity++
                    // alert("...")
                } else {
                    this.carts.push(this.products.find(product => product.id === id));
                    localStorage.setItem('listCart', JSON.stringify(this.carts));
                }
            },
            increaseQuantity() {
                return this.quantity++
            },
            decreaseQuantity() {
                return this.quantity--
            },
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
        margin-left: 30px;
    }

    img {
        width: 300px;
        height: 300px;
    }
    .wrapper {
        display: flex;
    }
</style>
