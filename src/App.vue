<template>
    <div id="app">
<!--        <router-link to="/">Home</router-link>-->
<!--        <router-link to="/lien-he">Contact</router-link>-->
<!--        <router-link to="/dang-nhap">Login</router-link>-->

<!--        <br>-->
<!--        <router-link :to="{name: 'home', query:{id:1}}">Home</router-link>-->
<!--        <router-link :to="{name: 'contact'}">contact</router-link>-->
<!--        <router-link :to="{name: 'login'}">login</router-link>-->
<!--        <br>-->

<!--        <router-link :to="{path: '/', query:{id:1}}">Home</router-link>-->
<!--        <router-link :to="{path: '/lien-he'}">contact</router-link>-->
<!--        <router-link :to="{path: '/dang-nhap'}">login</router-link>-->
<!--        <br>-->

<!--        <button @click="_goToContactPage">Chuyen sang trang contact</button>-->

<!--        <router-view></router-view>-->
<!--        <ControlCounter></ControlCounter>-->
<!--        <DisplayCounter></DisplayCounter>-->
<!--        <DisplayHomeProduct></DisplayHomeProduct>-->
<!--        <button @click="$store.dispatch('loadHomeProducts')">Get Home Product</button>-->
<!--        <button @click="_setHuman()">Set Human</button>-->

        {{$store.state.home.homeData}}
    </div>
</template>

<script>
    // import HomeComponent from "./components/Home"
    import ControlCounter from './components/ControlCounter'
    import DisplayCounter from "@/components/DisplayCounter";
    import DisplayHomeProduct from './components/DisplayHomeProduct'
    import {mapActions, mapMutations, mapState} from "vuex";
    export default {

        name: 'App',
        components: {
            // HomeComponent
            // ControlCounter,
            // DisplayCounter,
            // DisplayHomeProduct
        },
        methods: {
            _goToContactPage() {
                this.$router.push({name: 'contact'});
                // this.$router.replace({name: 'contact'})
                this.$router.back() //quay tro lai page truoc
                this.$router.go(-1) // quay tro lai page truoc
                this.$router.forward() //tien toi trang sau
                this.$router.push({name:'contact',query:{id:1}});
                return
            },
            _setHuman() {
                this.$store.commit('setHuman',
                    {name: 'Nguyen Van Thuan Viet Nam'});
                // this.setHuman({name: 'Nguyen Thanh Luan Viet Nam'});
            }
        },
        mounted() {
            fetch(process.env.BASE_API + 'home')//hard code
        },
        computed: {
            nameOfUser() {
                const {name} = this.user//ES6
                return name;
            },
            ...mapState('home', ['homeData']),
            ...mapState('cart', ['cartData'])
        },
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

</style>
