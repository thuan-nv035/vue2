<template>
    <div>
        <h2>Child Component</h2>
        <div>
            <slot name="slot1">
                Vae, bromium! I'm Child Component! Slot 1
            </slot>

            <slot name="slot2" :content = "content" :showMessage = "showMessage">

            </slot>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ChildComponent",
        data: function() {
            return {
                content: 'Child Component',
                showMessage: function() {
                    alert("haha")
                }
            }
        }
    }
</script>

<style scoped>

</style>