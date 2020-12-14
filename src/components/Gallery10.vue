<template>
  <div class="gallery1">
    
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
 @import '../assets/scss/gallery10';
</style>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          require('@/assets/image/experience/foto-archive/26exp.jpg')
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 

