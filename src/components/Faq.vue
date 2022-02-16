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

      <FaqCollapse v-if="collapsesData.length > 0" :collapsesData="collapsesData" />

    <!--  usually i would do the loop here and pass the title and message to the props, but i did this because of buefy  -->
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import FaqCollapse from '@/components/FaqCollapse'

export default {
  name: 'Faq',
  components: {
    FaqCollapse
  },

  data () {
    return {
      isOpen: 0,
      collapsesData: []
    }
  },

  async created () {
    await this.handleGetCollapsesData()
  },

  methods: {
    async handleGetCollapsesData () {
      const res = await axios.get('https://hook.integromat.com/syyhp9cj3ikey0hhi089wb3xjdy5d9s6')
      this.collapsesData = res.data.response.splice(0, 10)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
