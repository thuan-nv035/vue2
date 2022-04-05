<template>
    <div class="app">
        <div v-for="(item, index) in productsItem" :key="index">
            {{ item.name}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "ItemComponent",
        components: {

        },
        props: ['productsItem'],
        mounted() {
            console.log('success')
        }

    }
</script>

<style scoped>

</style>