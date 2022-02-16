<template>
  <b-collapse
    class="card"
    animation="slide"
    aria-id="contentIdForA11y3">
    <template #trigger="props">
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3">
        <p class="card-header-title">
          Component
        </p>
        <a class="card-header-icon">
          <span>{{ props.open ? '-' : '+' }}</span>
        </a>
      </div>
    </template>

    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'collapse'
}
</script>
