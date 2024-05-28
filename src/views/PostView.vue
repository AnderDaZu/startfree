<template>
  <h2>Bienvenido al post: {{ name }}</h2>
</template>

<script>
export default {
    data(){
        return {
            // 👇 trae el texto que se define como parámetro en la url, el paarámetro post se define en el router
            name: this.$route.params.post
        }
    }
}
</script>

<style>

</style>