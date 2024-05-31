<template>
    <h2>Mi tienda</h2>
    <h3>Datos del usuario</h3>
    <h4>Nombre: {{ nombre }}</h4>
    <h4>Apellido: {{ apellido }}</h4>
</template>

<script>
import { mapState } from 'vuex' // para mapear los estados que definimos en store
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
    }
}
</script>

<style>

</style>