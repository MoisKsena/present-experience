<template>
  <div class="swiper-gallery">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop1" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide class="slide-6"></swiper-slide>
      <swiper-slide class="slide-7"></swiper-slide>
      <swiper-slide class="slide-8"></swiper-slide>
      <swiper-slide class="slide-9"></swiper-slide>
      <swiper-slide class="slide-10"></swiper-slide>
      <swiper-slide class="slide-11"></swiper-slide>
      <swiper-slide class="slide-12"></swiper-slide>
      <swiper-slide class="slide-13"></swiper-slide>
      <swiper-slide class="slide-14"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs1" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide class="slide-6"></swiper-slide>
      <swiper-slide class="slide-7"></swiper-slide>
      <swiper-slide class="slide-8"></swiper-slide>
      <swiper-slide class="slide-9"></swiper-slide>
      <swiper-slide class="slide-10"></swiper-slide>
      <swiper-slide class="slide-11"></swiper-slide>
      <swiper-slide class="slide-12"></swiper-slide>
      <swiper-slide class="slide-13"></swiper-slide>
      <swiper-slide class="slide-14"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import '../assets/scss/swiper.scss'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOptionTop1: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
           pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // methods: {
          //   prev() {
          //     this.$refs.swiper.$swiper.slidePrev();
          //   },
          //   next() {
          //     this.$refs.swiper.$swiper.slideNext();
          //   }
          // }
        },
        swiperOptionThumbs1: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 25,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      this.$nextTick(() => {      
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .thumb-example {
    height: 480px;
  }
  .swiper {
    height: auto;

    .swiper-slide {
      background-size: cover;
      background-position: center;
      &.slide-1 {
        background-image:url('../assets/image/color/color1.jpg');
      }
      &.slide-2 {
        background-image:url('../assets/image/color/color2.jpg');
      }
      &.slide-3 {
        background-image:url('../assets/image/color/color3.jpg');
      }
      &.slide-4 {
        background-image:url('../assets/image/color/color4.jpg');
      }
      &.slide-5 {
        background-image:url('../assets/image/color/color5.jpg');
      }
      &.slide-6 {
        background-image:url('../assets/image/color/color6.jpg');
      }
      &.slide-7 {
        background-image:url('../assets/image/color/color7.jpg');
      }
      &.slide-8 {
        background-image:url('../assets/image/color/color8.jpg');
      }
      &.slide-9 {
        background-image:url('../assets/image/color/color9.jpg');
      }
      &.slide-10 {
        background-image:url('../assets/image/color/color10.jpg');
      }
      &.slide-11 {
        background-image:url('../assets/image/color/color11.jpg');
      }
      &.slide-12 {
        background-image:url('../assets/image/color/color12.jpg');
      }
      &.slide-13 {
        background-image:url('../assets/image/color/color13.jpg');
      }
      &.slide-14 {
        background-image:url('../assets/image/color/color14.jpg');
      }
    }
    &.gallery-top {
      height: 610px;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 110px;
      box-sizing: border-box;
      margin: 10px 0;
    }
    &.gallery-thumbs .swiper-slide {
      width: 183px;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>