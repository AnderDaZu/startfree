<template>
    <h2>Mi tienda</h2>

    <button @click="decrement" :disabled="is_disabled">Disminuir</button>
    <h3>Contador: {{ count }}</h3>
    <button @click="increment">Aumentar</button>    

    <h3>Datos del usuario</h3>
    <h4>Nombre: {{ nombre }} - tam: {{ nombreSize }}</h4>
    <h4>Apellido: {{ apellido }} - tam: {{ apellidoSize }}</h4>
    <h4>Nombre completo: {{ getFullName }} - tam: {{ fullNameSize }}</h4>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex' // para mapear los estados que definimos en store
export default {
    methods: {
        ...mapMutations(['increment', 'decrement']),
        // forma de realizar más larga 👇, forma de realizar lo mismo de manera corta ☝️
        /*
            increment(){
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            }
        */
    },
    computed: {
        ...mapState(['nombre', 'apellido', 'count', 'is_disabled']),
        // forma de realizar más larga 👇, forma de realizar lo mismo de manera corta ☝️
        /*
            nombre(){
                return this.$store.state.nombre
            },
            apellido(){
                return this.$store.state.apellido
            }
        */
        ...mapGetters(['getFullName', 'fullNameSize', 'nombreSize', 'apellidoSize'])
        // forma de realizar más larga 👇, forma de realizar lo mismo de manera corta ☝️
        /*
            nombreSize(){ // opción 1
                return this.$store.state.nombre.length
            }
            nombreSize(){ // opción 2
                return this.$store.getters.nombreLength
            },
            apellidoSize(){
                return this.$store.getters.apellidoLength
            },
            getFullName(){
                return this.$store.getters.getFullName
            },
            fullNameSize(){
                return this.$store.getters.fullNameLength
            },
        */
    }
}
</script>

<style>

</style>