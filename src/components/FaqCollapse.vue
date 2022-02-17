<template>
  <section class="faq-collapses">
    <b-loading
      v-model="loading"
      :is-full-page="false"
      :can-cancel="true"
    />
    <b-collapse
      v-for="(collapse, index) of collapsesData"
      :key="index"
      class="card"
      :class="{'max-height-90': isOpen !== index, 'card-shadow': isOpen === index}"
      animation="slide"
      :open="isOpen === index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div
          class="card-header"
          :class="{'card-shadow': isOpen === index}"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <span>{{ props.open ? '-' : '+' }}</span>
          </a>
        </div>
      </template>

      <div class="card-content">
        <div class="content">
          {{ collapse.Message }}
        </div>
      </div>
    </b-collapse>
    <b-button
      v-if="totalItemsLength !== collapsesData.length "
      type="is-primary"
      class="load-more-btn height-90"
      expanded
      @click="handleGetCollapsesData(5)"
    >
      <span class="default-text-base font-weight-700">LOAD MORE</span>
    </b-button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Collapse',

  data () {
    return {
      isOpen: 0,
      nrOfItemsToLoad: 10,
      totalItemsLength: 0,
      collapsesData: [],
      loading: false
    }
  },

  async created () {
    await this.handleGetCollapsesData(0)
  },

  methods: {
    async handleGetCollapsesData (loadMore) {
      this.loading = true
      this.nrOfItemsToLoad += loadMore
      const res = await axios.get('https://hook.integromat.com/syyhp9cj3ikey0hhi089wb3xjdy5d9s6')
      this.totalItemsLength = res.data.response.length
      this.collapsesData = res.data.response.splice(0, this.nrOfItemsToLoad)
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.faq-collapses {
  display: grid;
  grid-template: 'a b';
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.max-height-90 {
  max-height: 90px;
}

.load-more-btn {
  grid-column-end: b;
}

.card-shadow {
  box-shadow: 0px 7px 27px 0px #fcddd4ba !important;
}

@media only screen and (max-width: 695px) {
  .faq-collapses {
    display: block;

    .collapse {
      margin-bottom: 20px;
    }
  }
}
</style>
