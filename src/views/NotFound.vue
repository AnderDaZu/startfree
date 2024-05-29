<template>
    <h2>404 | Página no encontrada</h2>

    <!-- 
        Si en el enrutador index.js se define de la siguiente manera:
        👉 path: '/:pathMatch(.*)*'
        Esto puede capturar cualquier número de segmentos en la ruta y lo guarda en un array
        👉 $route.params -> { "pathMatch": [ "user", "Anderson", "post", "45", "788" ] }

        En cambio si en el enrutador index.js se define así:
        👉 path: '/:pathMatch(.*)'
        Esto capturará solo una coincidencia plana
        👉 $route.params -> { "pathMatch": "user/Anderson/post/45/788" }
    -->
</template>

<script>
export default {

}
</script>

<style>

</style>