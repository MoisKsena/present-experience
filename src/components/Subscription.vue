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

    <div class="subscription__sign">
      <input type="text" id="name" name="name" placeholder="ваше имя" class="subscription__sign-name">
      <input type="text" id="mail" name="e-mail" placeholder="ваш email" class="subscription__sign-mail">

      <button class="subscribe-btn m-subscription">подписаться</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/subscription';
 @import '../assets/scss/main';
</style>

<script>
  export default {
    name: 'Subscription',
  }
</script>