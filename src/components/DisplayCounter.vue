<template>
    <div>
        {{$store.state.count}}
        {{count}}
        {{$store.state.human}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'DisplayCounter',

        computed: {
            ...mapState(['count'])
        }
    }
</script>