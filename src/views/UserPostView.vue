<template>
    <h2>Bienvenido al post {{ post }} de {{ name }}</h2>
</template>

<script>
export default {
    data(){
        return {
            name: this.$route.params.user,
            post: this.$route.params.post
        }
    },
    mounted(){
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>