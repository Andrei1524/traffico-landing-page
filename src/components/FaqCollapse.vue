<template>
  <section class="faq-collapses">
    <b-collapse
      class="card"
      :class="{'max-height-90': isOpen !== index}"
      animation="slide"
      v-for="(collapse, index) of collapsesData"
      :key="index"
      :open="isOpen === index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3">
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
  </section>
</template>

<script>
export default {
  name: 'collapse',

  props: {
    collapsesData: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      isOpen: 0
    }
  }
}
</script>

<style>
.faq-collapses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.max-height-90 {
  max-height: 90px;
}
</style>
