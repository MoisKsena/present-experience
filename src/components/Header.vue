<template>
  <header class="header">
      <ul class="mobile-sign-page">
        <li class="mobile-sign-page__item">{{$route.meta.title}}</li>
      </ul>
      <ul class="menu__list" id="menu">
        <li class="menu__list-item">
          <router-link class="menu__list-item-link" to="/Experience" exact>Выставка "Опыт настоящего"</router-link>
        </li>
          
        <li class="menu__list-item">
          <router-link class="menu__list-item-link" to="/Pragmem">О проекте Прагмема</router-link>
        </li>

        <li class="menu__list-item">
          <router-link class="menu__list-item-link" to="/Contacts">Контакты</router-link>
        </li>
      </ul>
      
      <div class="hamburger-menu">
        <div v-on:click="show = !show" class="menu-btn"><img src="@/assets/image/menu-burger.png" alt="menu-burger"></div>

        <transition name="slide-fade">
          <div class="menu__box" id="menu-mobile" v-if="show">
            <ul>
              <li v-on:click="show = false" class="menu__list-item"><router-link class="menu__list-item-link" to="/Experience" exact>Выставка "Опыт настоящего"</router-link></li>
              <li v-on:click="show = false" class="menu__list-item"><router-link class="menu__list-item-link" to="/Pragmem">О проекте Прагмема</router-link></li>
              <li v-on:click="show = false" class="menu__list-item"><router-link class="menu__list-item-link " to="/Contacts">Контакты</router-link></li>
            </ul>
          </div>
          
        </transition>
      </div>
  </header>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/header';
 @import '../assets/scss/burger-menu';
</style>

<script>
  export default {
    data() {
      return {
        show: false
      };
    }
  };
</script>

 