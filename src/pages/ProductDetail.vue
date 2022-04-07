<template>
    <div>
        <div>CHi tiết sp</div>
        {{productId}}
        {{slug}}
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "ProductDetail",
        data() {
            return {
                productId: 0,
                slug: ''
                // name: ''
            }
        },
        mounted() {
            this.productId = this.$route.query.id;
            // this.slug = this.$route.query.slug;
            this.name = this.$route.query.name;
        }
    }
</script>

<style scoped>
</style>