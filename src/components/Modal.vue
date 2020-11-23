<template>
  <div class="modal-backdrop">
    <div class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header class="modal__header">
        <button
          type="button"
          class="modal__btn-close"
          @click="close"
        >
          X
        </button>

        <h2 class="modal__title">НОВОСТИ ПРОЕКТА ПРАГМЕМА</h2>
      </header>
      <div class="modal__body" v-show="isFormVisible">
        <div class="modal__body-text">
          <p>
            Если вы хотите получать новости исследовательского проекта Прагмема (www.pragmema.ru), оставьте ваши контакты в форме ниже.
          </p>
          <ul>
            <li>Мы будем присылать вам письма не чаще одного раза в неделю.</li>
            <li>Вы сможете отказаться от подписки в любой момент.</li>
          </ul>
        </div>
        
        <SubscriptionForm v-on:subscriptionresult="subscriptionResult"/>
      </div>

      <div class="modal__body" v-show='isFormSuccessfullySubmitted'>
        <div class="modal__body-text">
          <p>
           All is OK
          </p>
          
        </div>     
       
      </div>

       <div class="" @click="close">
        <router-link to="/experience">Вернуться на сайт</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/modal';
  @import '../assets/scss/subscription';
  @import '../assets/scss/subscription-form';
</style>

<script>
import SubscriptionForm from './SubscriptionForm.vue'

  export default {
    name: 'modal',
    components: {
      SubscriptionForm,
    },
    data () {
      return {
        isFormVisible: true,
        isFormSuccessfullySubmitted: false
      };
    },
    methods: {
      subscriptionResult ()
      {
        this.isFormVisible = false;
        this.isFormSuccessfullySubmitted = true;
      },
      close() {
        this.$emit('close');
      },
    },
  };
</script>