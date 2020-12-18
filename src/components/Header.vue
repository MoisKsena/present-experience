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
            <button
              type="button"
              class="modal__btn-close mobile-menu"
              v-on:click="show = !show"
            >
              X
            </button>
            <div class="menu-mobile-wrapper">
              
              <ul class="menu__list-mobile">
                <li v-on:click="show = false" class="menu__list-mobile-item"><router-link class="menu__list-item-link" to="/Experience" exact>Выставка "Опыт настоящего"</router-link></li>
                <li v-on:click="show = false" class="menu__list-mobile-item"><router-link class="menu__list-item-link" to="/Pragmem">О проекте Прагмема</router-link></li>
                <li v-on:click="show = false" class="menu__list-mobile-item"><router-link class="menu__list-item-link " to="/Contacts">Контакты</router-link></li>
              </ul>

              <div class="social">
                  <p>К нам можно присоединиться в социальных сетях</p>
                  <div class="social__networks">
                    <a href="https://vk.com/pragmema" target="_blank" class="social__icons">
                      <img src="@/assets/image/social/vk.png" alt="vkontakte">
                    </a>
                    <a href="https://www.facebook.com/pragmema" target="_blank" class="social__icons">
                      <img src="@/assets/image/social/facebook.png" alt="facebook">
                    </a>
                    <a href="https://www.instagram.com/pragmema" target="_blank" class="social__icons">
                      <img src="@/assets/image/social/instagram.png" alt="instagram">
                    </a>
                    <a href="https://www.youtube.com/channel/UC582Ie0VVrNz47ihe-pmzKw" target="_blank" class="social__icons">
                      <img src="@/assets/image/social/youtube.png" alt="youtube">
                    </a>
                  </div>
                  <div class="social__newsletter">
                    <p>И получать рассылку новостей</p>
                    <button class="subscribe-btn m-social" type="button" @click="showModal">подписаться</button>
                  </div>

                  <Modal
                      v-show="isModalVisible"
                      @close="closeModal"
                    />
              </div>
            </div>
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
import Modal from './Modal.vue'

  export default {
     components: {
      Modal,
    },
    data() {
      return {
        show: false,
        isModalVisible: false,
      };
    },
     methods: {
       showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      close() {
        this.$emit('close');
      }
    },
  };
</script>

 