<template>
    <h2>Sección de perfil del usuario con id: {{ user_id }}</h2>
</template>

<script>
export default {
    data(){
        return {
            user_id: this.$route.params.user
        }
    }
}
</script>

<style>

</style>