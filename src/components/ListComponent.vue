<template>
    <div>
<!--        <div v-for = "(item, index) in products" :key="index">-->

<!--        </div>-->
        <ItemComponent :productsItem = "products"></ItemComponent>
        <CheckComponent :productsItem = "products"></CheckComponent>
    </div>
</template>

<script>
    import ItemComponent from './ItemComponent'
    import CheckComponent from "@/components/CheckComponent";

    export default {
        name: "ListComponent",
        components: {
            ItemComponent,
            CheckComponent
        },
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'PS5',
                        isChecked: false
                    },
                    {
                        id: 2,
                        name: 'PS4',
                        isChecked: false
                    },
                    {
                        id: 3,
                        name: 'PS3',
                        isChecked: false
                    }
                ],
                checkId: null
            }
        },
    }
</script>

<style scoped>

</style>