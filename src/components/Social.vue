<template>
   <div class="right-side">
      <div class="logo">
        <a href="/">
          <img src="@/assets/image/logo_monochrom.png" alt="" class="logo">
        </a>
        
      </div>
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
</template>

<style lang="scss" scoped>
 @import '../assets/scss/header';
 @import '../assets/scss/social';
 @import '../assets/scss/subscription';
 @import '../assets/scss/subscription-form';
 @import '../assets/scss/main';
</style>

<script>
import Modal from './Modal.vue'

export default {
  components: {
      Modal,
    },
    data () {
      return {
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
}
</script>