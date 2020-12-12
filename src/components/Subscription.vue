<template>
  <div class="subscription">
    <div class="subscription__text">
      <p>
        Если вы хотите получать новости об обновлении выставки «Опыт настоящего», а также исследовательского проекта Прагмема, оставьте ваши контакты в форме.
      </p>
      <ul>
        <li>
          Мы будем присылать вам письма не чаще одного раза в неделю.
        </li>
        <li>
          Вы сможете отказаться от подписки в любой момент.
        </li>
      </ul>
    </div>

    <SubscriptionForm 
      v-on:subscriptionresult="subscriptionResult"
      />
  </div>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/Subscription';
 @import '../assets/scss/subscription-form';
 @import '../assets/scss/main';
</style>

<script>
import SubscriptionForm from './SubscriptionForm.vue'

  export default {
    name: 'Subscription',
    components: {
      SubscriptionForm,
    },
    methods: {
      subscriptionResult ()
      {
         this.$emit('subscriptionresult');      
      },
    }
  }
</script>