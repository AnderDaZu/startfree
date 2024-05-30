<template>
    <h2>Hi there from Blog 😉</h2>
</template>

<script>
export default {
    beforeCreate(){
        console.log('before create from blog view');
    },  
    created() {
        console.log('created from blog view')
    },
    beforeMount() {
        console.log('before mount from blog view')
    },
    mounted() {
        console.log('mounted from blog view')
    },
    beforeUpdate() {
        console.log('before update from blog view');
    },
    updated() {
        console.log('updated from blog view')
    },
    beforeUnmount() {
        console.log('before unmount from blog view')
    },
    unmounted() {
        console.log('Unmounted from blog view')
    }
}
</script>

<style scoped>

</style>