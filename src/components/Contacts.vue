<template>
  <div class="contacts">
    <h1>Контакты</h1>

    <div class="contacts__wrapper">
      <div class="contacts__main">
        <div class="contacts__main-foto">
           <img src="@/assets/image/contacts.png" alt="Adon`eva">
        </div>
       
        <div class="contacts__main-text">
          <p class="contacts__main-text-name">Светлана Борисовна Адоньева</p>
          <p class="contacts__main-text-sign">
            Светлана Борисовна Адоньева — куратор выставки «Опыт настоящего», куратор фото-книги «Свободное время. Из фотоархива В. С. Мариничева».
          </p>
          <p class="contacts__main-text-desc">
            Фольклорист, антрополог, доктор филологических наук, профессор. Автор научных публикаций и книг, в том числе — «Сказочный текст и традиционная
            культура» (2000), «Категория ненастоящего времени» (2001), «Прагматика фольклора» (2004), «Дух народа и другие духи» (2009), «Символический
            порядок» (2011), («Адоньева С., Олсон Л. Миры русской деревенской женщины: традиция, трансгрессия, компромисс» (в соавт. с Л. Олсон) (2016).
            Лауреат Приза Американского фольклорного общества и Чикагского университета за лучшую книгу по фольклору 2013 г. (Laura J. Olson, Svetlana
            Adonyeva. The Worlds of Russian Village Women: Tradition, Transgression, Compromise. University of Wisconsin Press, 2013).
          </p>
          <p class="contacts__main-text-desc">
            Один из учредителей АНО «Пропповский Центр: гуманитарные исследования в области традиционной культуры». Руководитель исследовательского
            проекта «Первичные знаки, или Прагмемы».
          </p>
        </div>
      </div>
      
      <div class="contacts__list">
        <div class="contacts__list-title">
          Контакты проекта:
        </div>
        <div class="contacts__list-mail">
          <p class="contacts__list-mail mail">E-mail:</p>
          <p>pragmema-1@yandex.ru</p>
        </div>
        <div class="contacts__list-tel">
          <p class="contacts__list-tel tel">Телефон:</p>
          <p>+7 (921) 887 78 00</p>
        </div>
      </div>
    </div>

    <Subscription v-show="subscriptionState == 'none'" 
       v-on:subscriptionresult="subscriptionResult"
       />
    <ModalSuccess v-show="subscriptionState == 'success'" v-bind:state="subscriptionState"/>
  </div>
</template>

<style lang="scss" scoped>
 @import '../assets/scss/contacts';
 @import '../assets/scss/main';
</style>

<script>
import Subscription from './Subscription.vue'
import ModalSuccess from './ModalSuccess.vue'

  export default {
    name: 'Contacts',
    data () {
      return {
        subscriptionState: 'none',
      };
    },
    components: {
      Subscription,
      ModalSuccess
    },
    methods:{
      subscriptionResult ()
      {
        console.log('subscribed');
        this.subscriptionState = 'success';        
      },
    }
  }
</script>