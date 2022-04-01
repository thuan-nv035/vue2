<template>
    <div id="app">
        <div class='display'>{{display}}</div>
        <div class="content">
            <input @click="getNumber(0)" type="button" value="0">
            <input @click="getNumber(1)" type="button" value="1">
            <input @click="getNumber(2)" type="button" value="2">
            <input @click="getNumber(3)" type="button" value="3">
            <input @click="getNumber(4)" type="button" value="4">
            <input @click="getNumber(5)" type="button" value="5">
            <input @click="getNumber(6)" type="button" value="6">
            <input @click="getNumber(7)" type="button" value="7">
            <input @click="getNumber(8)" type="button" value="8">
            <input @click="getNumber(9)" type="button" value="9">
            <input @click="add()" type="button" value="+">
            <input @click="sub()" type="button" value="-">
            <input @click="multy()" type="button" value="*">
            <input @click="divide()" type="button" value="/">
            <input @click="equal()" type="button" value="=">
            <input @click="clear" type="button" value="x">
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                operator: null,
                display: 0,
                operatorClicked: false,
                previous: null
            }
        },

        methods: {
            clear() {
                return this.display = 0
            },

            getNumber(number) {
                if (this.operatorClicked ==rue) {
                    this.display = ''
                    this.operatorClicked = false
                }
                this.display =
                    this.display === 0
                        ? (this.display = number)
                        : '' + this.display + number;
            },
            add() {
                this.operator = (a, b) => a + b;
                this.previous = this.display;
                this.operatorClicked = true;
            },
            sub() {
                this.operator = (a, b) => a - b
                this.previous = this.display;
                this.operatorClicked = true
            },
            multy() {
                this.operator = (a, b) => a * b
                this.previous = this.display;
                this.operatorClicked = true
            },
            divide() {
                this.operator = (a, b) => a / b
                this.previous = this.display;
                this.operatorClicked = true
            },
            equal() {
                this.display = this.operator(Number(this.previous), Number(this.display));
                this.previous = null;
                this.operatorClicked = true;
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

    .display {
        width: 200px;
        text-align: center;
        background: #ddd;
        border: 1px solid #111;
        font-size: 2.5rem;
        cursor: default;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .content {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4, 30px);
        grid-template-rows: repeat(6, 30px);
        gap: 10px;
    }
</style>
