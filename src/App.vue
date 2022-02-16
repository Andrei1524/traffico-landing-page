<template>
  <div id="app">
    <Top />
    <img
      src="@/assets/images/landing-truck.svg"
      alt=""
      class="truck position-relative"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
    <AboutUs />
    <Faq />
  </div>
</template>

<script>
import Top from '@/components/Top'
import AboutUs from '@/components/AboutUs'
import Faq from '@/components/Faq'

export default {
  components: { Top, AboutUs, Faq },

  data () {
    return {
      isTruckImageInView: false
    }
  }
}
</script>

<style lang="scss">
.landing-scene-image {
  position: absolute;
  left: 0;
  left: -8px;
  top: 0;
}
</style>
