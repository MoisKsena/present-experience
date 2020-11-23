import Vue from 'vue'
import VueRouter from 'vue-router'
//import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
import Pragmem from './components/Pragmem.vue'
import Contacts from './components/Contacts.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Experience',
//     component: Experience,
//     redirect: '/experience'
//   },
//   {
//     path: '/experience',
//     name: 'Experience',
//     component: Experience,
//   },
//   {
//     path: '/pragmem',
//     name: 'Pragmem',
//     component: Pragmem,
//   },
//   {
//     path: '/contacts',
//     name: 'Contacts',
//     component: Contacts,
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Experience',
      component: Experience,
      redirect: '/experience'
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
    },
    {
      path: '/pragmem',
      name: 'Pragmem',
      component: Pragmem,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    }
  ]
})


export default router