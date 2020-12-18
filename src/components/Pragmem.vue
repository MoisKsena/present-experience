<template>

  <div class="pragmem">
    <div class="pragmem__sign">
      <h1 class="pragmem__title">О проекте прагмема</h1>
      <div class="pragmem__title-sign">«Прагмема» является авторским проектом АНО «Пропповский центр»</div>
      <div class="pragmem__link">
        <p class="pragmem__link-text">больше о проекте на сайте <a href="http://www.pragmema.ru/" target="_blank" class="pragmem__link-item">http://www.pragmema.ru/</a></p>
      </div>
    </div>
    <div class="pragmem__wrapper">
      <div class="pragmem__main-text">
        <p v-html="'Проект Прагмема — это&nbsp;независимый исследовательский&nbsp;проект, объектом которого служит российская повседневность, представленная в&nbsp;коллективных символических практиках.'">
          
        </p>
        <p v-html="'Прагмемы — это первичные матрицы восприятия и&nbsp;интерпретации, создающие реальность. Они&nbsp;же&nbsp;— естественно&nbsp;—&nbsp;формируют сценарий действия. Современный россиянин, воспитанный отечественной школой с&nbsp;ее&nbsp;наивным позитивизмом, мало знает о&nbsp;собственной жизненной практике. А&nbsp;это&nbsp;— та&nbsp;повседневная работа по&nbsp;признанию, контролю и&nbsp;любви, которую совершает каждый, не выпуская из рук гаджет, принимая и вручая подарки, пропалывая родительские дачные грядки, выбирая себе одежду или&nbsp;образование для детей, множа свои фотографии в социальных сетях, ухаживая за могилами и&nbsp;т.д. и&nbsp;т.п.'">
          
        </p>
      </div>

      <div class="pragmem__video">
        <!-- <img src="@/assets/image/pragmem.png" alt=""> -->
        <iframe src="https://www.youtube.com/embed/LOUERS6YCYQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <Subscription v-show="subscriptionState == 'none'" 
       v-on:subscriptionresult="subscriptionResult"
       />
    <ModalSuccess v-show="subscriptionState == 'success'" @close="closeModal"/>
  </div>

</template>

<style lang="scss" scoped>
 @import '../assets/scss/pragmem';
 @import '../assets/scss/main';
</style>

<script>
  import Subscription from './Subscription.vue'
  import ModalSuccess from './ModalSuccess.vue'


  export default {
    name: 'Pragmem',
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
      closeModal() {
        this.subscriptionState = 'none'; 
      }
    }
  }
</script>
