<template>
  <div id="gallery1">

    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
      
      <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
          <img :src="slide">
      </div>
    </agile>

    <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
      <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
        <img :src="slide" alt="">
      </div>

       <button type="button" slot="prevButton" class="agile__nav-button agile__nav-button--prev">
          <img src="@/assets/image/arrowLeft.png" alt="">
        </button>
        <button type="button" slot="nextButton" class="agile__nav-button agile__nav-button--next">
          <img src="@/assets/image/arrowRight.png" alt="">
        </button>
    </agile>
      <!-- <div class="agile__actions"> -->
        
      <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
   @import '../assets/scss/agilegallery';
</style>

<script>  
import { VueAgile } from 'vue-agile'


export default { 
  //el: '#gallery1',
    components: {
        agile: VueAgile 
    },
    data () {
		return {
			asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: false
			},
			
			options2: {
				autoplay: true,
				centerMode: true,
				dots: false,
				navButtons: false,
				slidesToShow: 3,
				responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5
                    }
                },
                
                {
                    breakpoint: 1000,
                    settings: {
                        navButtons: true
                    }
                }
            ]
				
			},
			
			slides: [
					require('@/assets/image/blackAndWhite_3/1.jpg'),
          require('@/assets/image/blackAndWhite_3/2.jpg'),
          require('@/assets/image/blackAndWhite_3/3.jpg'),
          require('@/assets/image/blackAndWhite_3/4.jpg'),
          require('@/assets/image/blackAndWhite_3/5.jpg'),
          require('@/assets/image/blackAndWhite_3/6.jpg'),
          require('@/assets/image/blackAndWhite_3/7.jpg'),
          require('@/assets/image/blackAndWhite_3/8.jpg'),
          require('@/assets/image/blackAndWhite_3/9.jpg'),
          require('@/assets/image/blackAndWhite_3/10.jpg'),
          require('@/assets/image/blackAndWhite_3/11.jpg'),
          require('@/assets/image/blackAndWhite_3/12.jpg'),
          require('@/assets/image/blackAndWhite_3/13.jpg'),
          require('@/assets/image/blackAndWhite_3/14.jpg'),
          require('@/assets/image/blackAndWhite_3/15.jpg'),
          require('@/assets/image/blackAndWhite_3/16.jpg'),
          require('@/assets/image/blackAndWhite_3/17.jpg'),
          require('@/assets/image/blackAndWhite_3/18.jpg'),
          require('@/assets/image/blackAndWhite_3/19.jpg'),
          require('@/assets/image/blackAndWhite_3/20.jpg'),
          require('@/assets/image/blackAndWhite_3/21.jpg'),
          require('@/assets/image/blackAndWhite_3/22.jpg'),
				]
		}
	},
	mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	}
}

</script>

