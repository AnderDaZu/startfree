import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // formas para redireccionar a una url
    path: '/about',
    // redirect: '/nosotros', // forma 1
    redirect: { name: 'about' } // forma 2 (recomendada)
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    // :post -> es la forma para definir parámetros dinamicos en la url
    path: '/blog/:post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/user/:user/post/:post',
    name: 'user-post',
    component: () => import('../views/UserPostView.vue')
  },

  {
    // cuando se usen rutas similares donde solo cambian los parámetros dinamicos, una opción para evitar un inconveniente es definir
    // el tipo de dato del parámetro que usara cada ruta, para ello se puede usar expresiones regulares
    // otra opción es que a cada ruta agregarle un parametros unico que permita diferenciar la una de la otra
    // /compras/o/:orderId   --- /compras/p/:productName

    path: '/compras/:orderId(\\d+)',
    name: 'order',
    component: () => import('../views/orderView.vue')
  },
  {
    path: '/compras/:productName',
    name: 'product',
    component: () => import('../views/productView.vue')
  },
  {
    // cuando a algún parametro se le agrega al final ? quiere decir que es opcional
    path: '/users/:user?',
    name: 'users',
    component: () => import('../views/UsersView.vue'),
    children: [
      // rutas hijas - rutas anidadas
      {
        path: '',
        name: 'users.index',
        component: () => import('../views/users/IndexView.vue')
      },
      {
        path: 'profile',
        name: 'users.profile',
        component: () => import('../views/users/ProfileView.vue')
      },
      {
        path: 'courses',
        name: 'users.courses',
        component: () => import('../views/users/CourseView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
