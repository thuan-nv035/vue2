<template>
    <div class="app">
        <div v-for = "(item, index) in productsItem" :key="index">
            {{ item.name}}
            <p v-if="item.isChecked"> Da xac nhan </p>
            <p v-else>Chua xac nhan</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckComponent",
        props: ['productsItem']
    }
</script>

<style scoped>

</style>