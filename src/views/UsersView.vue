<template>
    <!-- <div v-if="is_list">
        <h2>Acá se mostrará la lista de usuarios</h2>
    </div>
    <div v-else>
        <h2>Aquí se mostrará el detalle de un usuario</h2>
    </div> -->
    <h1>Acá encontrarás todo del usuario con id: {{ user }}</h1>

    <nav>
        <!-- <router-link to="/users/20">Home User</router-link> | -->

        <!-- <router-link :to="'/users/' + user_id">Home User</router-link> | -->
        <!-- <router-link :to="'/users/' + user_id + '/profile'">Perfil</router-link> | -->
        <!-- <router-link :to="'/users/' + user_id + '/courses'">Cursos</router-link> -->

        <!-- Rutas con nombre -->
        <router-link :to="{name: 'users.index'}">Home User</router-link> |
        <!-- Cuando una ruta depende de un parámetro, este se debe pasar como en los siguientes casos 👇 -->
        <router-link :to="{name: 'users.profile', params: {user: user}}">Perfil</router-link> |
        <router-link :to="{name: 'users.courses', params: {user: user}}">Cursos</router-link>
    </nav>
    <router-view/>
</template>

<script>
export default {
    data(){
        return {
            // is_list: !this.$route.params.user ? true : false,
            // user_id: this.$route.params.user
        }
    },
    props: [
        'user' // el valor de este prop se obtiene del valor que se envia en el parámetro user, para esto se debe activar los props en la ruta
    ]
}
</script>

<style>

</style>