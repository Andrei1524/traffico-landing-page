<template>
  <div id="app">
    <Top />
    <img v-animate-css="'slideInLeft'" src="@/assets/images/landing-truck.svg" alt="" class="truck position-relative">
    <AboutUs/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import AboutUs from '@/components/AboutUs'

export default {
  components: { Top, AboutUs }
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
