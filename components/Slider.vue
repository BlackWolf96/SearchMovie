<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div><img src="~/static/ssd.png"></div>
      <div><img src="~/static/ssd.png"></div>
      <div><img src="~/static/ssd.png"></div>
      <div><img src="~/static/ssd.png"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel }
}
</script>

<style lang="scss" scoped>
div{
  img{
    width:100%;
    height:500px;
  }
}
</style>
