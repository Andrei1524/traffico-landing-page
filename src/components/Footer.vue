<template>
  <section class="footer-section position-relative">
    <b-image
      :src="require('@/assets/images/footer-truckmobil.png')"
      alt=""
      class="truck position-relative"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    />
    <b-image
      :src="require('@/assets/images/footer-bg.png')"
      alt="footer-bg"
      class="footer-bg"
    />
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
  height: 80vh;
}

.truck {
  position: absolute;
  top: -200px;
  left: 0;
}

.footer-bg {
  position: absolute;
  height: 600px;
  width: 100%;
  left: -205px;
  bottom: 100px;
}
</style>
