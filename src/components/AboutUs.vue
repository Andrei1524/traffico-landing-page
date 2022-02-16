<template>
  <section class="about-us position-relative">
    <div class="container">
      <div class="about-us-row">
        <div class="tile is-horizontal">
          <div class="tile is-vertical">
            <h2 class="font-size-24px mb-6">About us</h2>
            <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>
            <div class="info-box mt-6">
              <p class="font-weight-700">How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</p>
            </div>
          </div>
          <div class="tile">
            <img src="@/assets/images/landing-figure-about-1.png" alt="" v-animate-css="'slideInRight'">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutUs',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  margin-top: 100px;
}
</style>
