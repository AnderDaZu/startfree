<template>
    <div v-if="is_list">
        <h2>Acá se mostrará la lista de usuarios</h2>
    </div>
    <div v-else>
        <h2>Aquí se mostrará el detalle de un usuario</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            is_list: !this.$route.params.user ? true : false
        }
    }
}
</script>

<style>

</style>