<template>
    <div id="app">
        <p>Danh dach san pham</p>
        <div v-for="(item, index) in products" :key="index">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
            <p>{{item.publicDate}}</p>
            <img :src="item.image" alt="">
            <a @click="message('them vao gio hang')" href="">Them vao gio hang</a>
        </div>
        <p>San pham hot</p>
        <div v-for="(item, index) in hotProducts" :key="index">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
            <p>{{item.publicDate}}</p>
            <img :src="item.image" alt="">
            <a @click="message('them vao gio hang')" href="">Them vao gio hang</a>
        </div>

        <p>Phuong thuc thanh toan</p>
        <div v-for="(item,index) in paymentMethods " :key="index">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {},
        data() {
            return {
                cart: [],
                products: [
                    {
                        id: 1,
                        name: "PS5",
                        price: 5555,
                        publicDate: "05-05-2021",
                        image:
                            "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
                        hot: true,
                    },
                    {
                        id: 2,
                        name: "PS4",
                        price: 4444,
                        publicDate: "04-04-2021",
                        image:
                            "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
                        hot: true,
                    },
                    {
                        id: 3,
                        name: "PS3",
                        price: 3333,
                        publicDate: "03-03-2021",
                        image:
                            "https://game.haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg",
                        hot: false,
                    },
                ],
                paymentMethods: [
                    {text: "COD", value: 1},
                    {text: "Banking", value: 2},
                    {text: "Ứng dụng bên thứ 3", value: 3},
                ],
                selectedPayment: 2,
            };
        },
        methods: {
            message: function (mess) {
                alert(mess)
            }
        },
        computed: {
            hotProducts() {
                return this.products.filter(product => product.hot);
            },
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
        margin: 10px;
    }
</style>
