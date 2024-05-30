<template>
    <h2>Sección de cursos del usuario con id: {{ user }}</h2>
</template>

<script>
export default {
    data(){
        // return {
        //     user_id: this.$route.params.user
        // }
    },
    props: [
        'user'
    ]
}
</script>

<style>

</style>