<template>
  <section
    id="faq"
    class="position-relative"
  >
    <div class="container">
      <div class="columns is-justify-content-space-between">
        <div class="column is-half is-align-self-center">
          <h2 class="default-text-base font-weight-700 font-size-24px mb-6">
            Faq
          </h2>
          <p class="font-family-dm font-size-48px default-text-brown">
            Questions and Answers on Professional Traffic Permits:
          </p>
        </div>
        <div class="column is-half">
          <b-image
            :src="require('@/assets/images/landing-figure-faq.png')"
            alt="landing figure faq"
            class="figure-1"
          />
        </div>
      </div>

      <!--  usually i would do the loop here and pass the title and message to the props, but i did this because of buefy  -->
      <FaqCollapse />
    </div>
  </section>
</template>

<script>
import FaqCollapse from '@/components/FaqCollapse'

export default {
  name: 'Faq',
  components: {
    FaqCollapse
  },

  data () {
    return {
      isOpen: 0
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 250px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 90%;
    height: 110%;
    top: 0;
    right: 0;
    background: #FDEDE8;
    border-top-left-radius: 100px;
    z-index: -1;
  }
}

.container {
  z-index: 2;
}
</style>
