<template>
  <div class="modal-backdrop">
    <div class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      
      <div class="modal__body" v-show="state =='subscribe'">
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
        
        <div class="modal__body-wrapper">
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
      </div>

      <div class="modal__body" v-show="state == 'success'">
        <div class="modal__body-wrapper-success">
          <div class="modal__body-success">
            <img src="@/assets/image/success.png" alt="success">
            <p>
            Ваше сообщение успешно отправлено!
            </p>
          </div>     
          <div class="modal__body-return" @click="close">
            <a @click="closeModal">Вернуться на сайт</a>
          </div>
        </div>
      </div>

      <div class="modal__body" v-show="state == 'fail'">
        <div class="modal__body-text">
          <p>
           Что-то пошло не так! Попробуй еще раз!
          </p>
        </div>     
        <div class="" @click="close">
          <a @click="closeModal">Вернуться на сайт</a>
        </div>
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
        state: 'subscribe'        
      };
    },
    methods: {
      subscriptionResult ()
      {
        this.state = 'success';        
      },
      close() {
        this.$emit('close');
      },
      closeModal: function () {
        this.show = false
      }
    },
  };
</script>