<template>
  <div class="gallery12">
    
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')'}"
      ></div>
   
  </div>
</template>

<style lang="scss" scoped> 
 @import '../assets/scss/gallery12';
</style>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          require('@/assets/image/experience/foto-archive/28exp.jpg'),
          require('@/assets/image/experience/foto-archive/29exp.jpg')
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 

