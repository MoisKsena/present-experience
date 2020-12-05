import Vue from 'vue'
import VueRouter from 'vue-router'
import Experience from './components/Experience.vue'
import Pragmem from './components/Pragmem.vue'
import Contacts from './components/Contacts.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Experience',
      component: Experience,
      redirect: '/Experience',
      meta: { title: 'выставка «опыт настоящего»' }
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience,
      meta: { title: 'выставка «опыт настоящего»' }
    },
    {
      path: '/Pragmem',
      name: 'Pragmem',
      component: Pragmem,
      meta: { title: 'Проект Прагмема' }
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
      meta: { title: 'Контакты' }
    }
  ]
})


export default router