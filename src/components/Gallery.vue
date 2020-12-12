<template>
  <div class="gallery">
    
    <div>

      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '353px', height: '260px' }"
      ></div>
     
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/gallery';
</style>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          require('@/assets/image/experience/foto-archive/2exp.jpg'),
          require('@/assets/image/experience/foto-archive/3exp.png'),
          require('@/assets/image/experience/foto-archive/4exp.png')
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