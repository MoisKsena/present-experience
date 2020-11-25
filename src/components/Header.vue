<template>
  <header class="header">
    
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
      
  </header>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/header';
</style>

<script>

  export default {
   
  }
</script>

 