<template>
  <section class="footer position-relative">
    <img
      src="@/assets/images/footer-truckmobil.png"
      alt=""
      class="truck position-relative"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
    <div class="container">
      footer
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
section {
  background-image: url("../assets/images/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.truck {
  position: absolute;
  top: -200px;
  left: 0;
}
</style>
