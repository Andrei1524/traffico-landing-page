<template>
  <section class="faq position-relative">
    <div class="container">
      <div class="columns is-justify-content-space-between">
        <div class="column is-half">
          <h2 class="default-text-base font-weight-700 font-size-24px mb-6">Faq</h2>
          <p class="font-family-dm font-size-48px default-text-brown">Questions and Answers on Professional Traffic Permits:</p>
        </div>
        <div class="column is-half">
          <img src="@/assets/images/landing-figure-faq.png" alt="" class="figure-1" v-animate-css="'slideInRight'">
        </div>
      </div>

      <div class="faq-collapses">
        <FaqCollapse />
      </div>
    </div>
  </section>
</template>

<script>

import FaqCollapse from '@/components/FaqCollapse'

export default {
  name: 'Faq',
  components: {
    FaqCollapse
  }
}
</script>

<style lang="scss" scoped>
</style>
