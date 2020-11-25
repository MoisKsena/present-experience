<template>
  <div class="modal-backdrop">
     <div class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal__body">
          <div class="modal__body-wrapper-success">
            <div class="modal__body-success">
              <p>
              Ваше сообщение успешно отправлено!
              </p>
              
            </div>     
            <div class="modal__body-return" @click="close">
              <router-link to="/experience">Вернуться на сайт</router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/modal';
  //@import '../assets/scss/subscription';
  //@import '../assets/scss/subscription-form';
</style>

<script>
export default {
   name: 'ModalSuccess',

    methods: {
      close() {
        this.$emit('close');
      },
    }
}
</script>