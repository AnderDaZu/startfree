<template>
    <div class="mt-4">
        <h1>Inicia Contador</h1>
        <p>Valor: {{ counter }}</p>

        <button @click="add" type="button" class="px-5 py-2.5 mt-4 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Sumar</button>
        <button @click="sub" type="button"  class="px-5 py-2.5 mt-4 ml-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center" :disabled="disabling">Restar</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    computed: {
        disabling(){
            return this.counter === 0
        }
    },
    methods: {
        add(){
            this.counter++
        },
        sub(){
            if (this.counter >= 1) {
                this.counter--
            }
        }
    }
}
</script>

<style scoped>
/* el atributo scoped se aplica para indicar que los estilos definidos en este componente solo se apliquen a los elementos de este componente */
</style>