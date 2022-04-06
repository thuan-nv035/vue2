<template>
    <div id="app">
        <div>
            <myButton></myButton>
            <custom-button >

            </custom-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

        },
        data(){
            return{
                link: 'abc',
            }
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
</style>
