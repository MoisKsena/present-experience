<template>
  <div class="footer">
    
    <div class="footer__promotion">
      <div class="footer__social">
        <div class="footer__title">проект прагмема в<br />социальных сетях</div>
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
      </div>

      <div class="footer__promotion-main">

        <div class="announcements">
          <div class="footer__title">АНОНСЫ</div>
          <div class="announcements__wrapper">
            <div class="announcements__item">
              <div class="announcements__item-image">
                <img src="@/assets/image/footer/announce.png" alt="">
              </div>
              <div class="announcements__item-text">
                Скатков Андрей.
                Мария Орлова.
                Одежда и несвобода.
              </div>
            </div>
          </div>
        </div>

        <div class="projects">
          <div class="footer__title">ДРУГИЕ ПРОЕКТЫ</div>
          <div class="projects__wrapper">
            <div class="projects__item">
            <div class="projects__item-image">
              <img src="@/assets/image/footer/proj1.png" alt="">
            </div>
            <div class="projects__item-text">
              Электронный архив
              «Российская
              повседневность»
            </div>
            </div>
            <div class="projects__item">
              <div class="projects__item-image">
                <img src="@/assets/image/footer/proj2.png" alt="">
              </div>
              <div class="projects__item-text">
                Свод русского фольклора.
                Былины. Звуковой аналог
              </div>
            </div>
            <div class="projects__item">
              <div class="projects__item-image">
                <img src="@/assets/image/footer/proj3.png" alt="">
              </div>
              <div class="projects__item-text">
                Русский фольклор
                в современных записях
              </div>
            </div>
            <div class="projects__item">
              <div class="projects__item-image">
                <img src="@/assets/image/footer/proj4.png" alt="">
              </div>
              <div class="projects__item-text">
                Фольклор
                и фольклористика СПбГУ
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    <div class="footer__line"></div>
    <div class="footer__copyright">
      <p>© Прагмема 2011-2020</p>
      <p>Студия «M» — 2020</p>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
  @import '../assets/scss/footer';
  @import '../assets/scss/social';
</style>