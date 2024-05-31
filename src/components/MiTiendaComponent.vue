<template>
    <h2>Mi tienda</h2>
    <h3>Datos del usuario</h3>
    <h4>Nombre: {{ nombre }} - tam: {{ nombreSize }}</h4>
    <h4>Apellido: {{ apellido }} - tam: {{ apellidoSize }}</h4>
    <h4>Nombre completo: {{ getFullName }} - tam: {{ fullNameSize }}</h4>
</template>

<script>
import { mapState, mapGetters } from 'vuex' // para mapear los estados que definimos en store
export default {
    computed: {
        ...mapState(['nombre', 'apellido']),
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