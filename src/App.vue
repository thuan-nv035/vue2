<template>
    <div id="app">
        <myButton></myButton>
        <mySelect></mySelect>
        <ParentComponent></ParentComponent>

        <custom-button :href="link" >

        </custom-button>
    </div>
</template>

<script>

    import ParentComponent from "./components/ParentComponent"

    export default {
        name: 'App',
        components: {
            ParentComponent
        },
        data() {
            return {
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
