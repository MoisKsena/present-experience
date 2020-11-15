<template>
  <div class="gallery">
    
    <div>

      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '156px', height: '103px' }"
      ></div>
     
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          require('@/assets/image/lotus/msu6.jpg'),
          require('@/assets/image/lotus/Lotus_2.jpg'),
          require('@/assets/image/lotus/Lotus_3.jpg'),
          require('@/assets/image/lotus/Lotus_4.jpg')
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 

<style lang="scss" scoped> 
 @import '../assets/scss/gallery';
</style>