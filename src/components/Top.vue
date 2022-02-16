<template>
  <section>
    <img src="@/assets/images/landing-scene.svg" alt="" class="landing-scene-image">
    <div class="container">
      <div class="intro">
        <h1 class="font-size-100px default-text">Your awesome traffic permit consultant.</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Top',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.landing-scene-image {
  position: absolute;
  left: 0;
  top: 0;
}

.intro {
  margin-top: 90px;
  max-width: 741px;

  h1 {
    font-family: 'DM Serif Display', serif;
    line-height: 100%;
  }
}
</style>
