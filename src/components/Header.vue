<template>
  <header class="header">
    
      <ul class="menu__list" id="menu">
        <li class="menu__list-item">
          <router-link class="menu__list-item-link" to="/experience">Выставка "Опыт настоящего"</router-link>
        </li>
          
        <li class="menu__list-item">
          <router-link class="menu__list-item-link" to="/pragmem">О проекте Прагмема</router-link>
        </li>
        <li class="menu__list-item">
          
          <router-link class="menu__list-item-link" to="/contacts">Контакты</router-link>
        </li>
      </ul>
      
  </header>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/header';
</style>

<script>

  export default {
   
  }
</script>

 