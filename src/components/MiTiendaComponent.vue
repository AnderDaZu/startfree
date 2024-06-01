<template>
    <h2>Mi tienda</h2>

    <h3 class="mt-10">Nombre: {{ nombre }}</h3>

    <form @submit.prevent="actualizarNombreComponente" class="my-10">
        <input type="text" v-model="nombreComponente">
        <button class="ml-4">Actualizar nombre</button>
    </form>

    <button class="mt-10" @click="decrement" :disabled="is_disabled">Disminuir</button>
    <h3>Contador: {{ count }}</h3>
    <button @click="increment">Aumentar</button>    

    <h3>Datos del usuario</h3>
    <h4>Nombre: {{ nombre }} - tam: {{ nombreSize }}</h4>
    <h4>Apellido: {{ apellido }} - tam: {{ apellidoSize }}</h4>
    <h4>Nombre completo: {{ getFullName }} - tam: {{ fullNameSize }}</h4>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' // para mapear los estados que definimos en store
export default {
    data(){
        return {
            nombreComponente: ''
        }
    },
    methods: {
        // ...mapMutations(['increment', 'decrement', 'actualizarNombre']),
        // actualizarNombreComponente(){
            //     this.actualizarNombre(this.nombreComponente)
            //     this.nombreComponente = ''
            // }
        
        ...mapMutations(['increment', 'decrement']),
        // commit -> permite llamar a la ejecución x método definido en la tienda
        // dispatch -> permite llamar a la ejecución x acción definida en la tienda
        ...mapActions(['actualizarNombreAccion', 'confirmarActualizacionNombre']),
        actualizarNombreComponente(){
            // this.$store.dispatch('actualizarNombreAccion', this.nombreComponente)
            // this.actualizarNombreAccion(this.nombreComponente).then(() => {
            //     this.nombreComponente = ''
            // })
            this.confirmarActualizacionNombre(this.nombreComponente).then(() => {
                this.nombreComponente = ''
            })
        },

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
    .my-10 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .mx-10 {
        margin-left: 4px;
        margin-right: 4px;
    }
    .mt-10 {
        margin-top: 10px;
    }
    .mb-10 {
        margin-bottom: 10px;
    }
    .ml-4 {
        margin-left: 4px;
    }
    .mr-4 {
        margin-right: 4px;
    }

</style>