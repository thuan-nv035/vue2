<template>
    <div>
        <button @click = "$store.commit('increment')">Tang</button>
        <button @click = "$store.commit('decrement')">Giam</button>

        <button @click="increment">Tang</button>
        <button @click="decrement">Giam</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'ControlCounter',
        methods: {
            ...mapMutations(['increment','decrement'])
        }
    }
</script>