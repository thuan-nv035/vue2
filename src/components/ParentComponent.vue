<template>
    <div>
        <ChildComponent>
            <template #slot1>
                I'm slot 1
            </template>
            <template #slot2 ="{content, showMessage}">
                I'm slot 2
                {{content}}
                <button @click="showMessage()">Click me</button>
            </template>

        </ChildComponent>
    </div>
</template>

<script>
    import ChildComponent from "./ChildComponent";
    export default {
        name: "ParentComponent",
        components:{
            ChildComponent
        }
    }
</script>

<style scoped>

</style>