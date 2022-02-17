<template>
  <section
    id="top"
    class="position-relative"
  >
    <Header />
    <div class="container">
      <div class="intro position-relative max-width-700">
        <h1
          class="font-size-100px default-text is-size-3-mobile"
        >
          Your awesome traffic permit consultant.
        </h1>
        <b-button
          type="is-primary"
          class="default-btn font-weight-700 mt-6"
        >
          GET STARTED
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Top',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;

  background-image: url("../assets/images/landing-scene.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.intro {
  padding-top: 90px;

  h1 {
    font-family: "DM Serif Display", serif;
    line-height: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .intro {
    padding-top: 110px;
  }
}
</style>
