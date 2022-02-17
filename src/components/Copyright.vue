<template>
  <div class="container">
    <div class="columns is-vcentered is-justify-content-space-between">
      <div class="column">
        <h4>Copyright</h4>
      </div>
      <div class="column is-flex  is-justify-content-end">
        <div class="block copyright-images is-flex">
          <b-image
            class="social-img ml-6"
            :src="require('@/assets/images/fb.png')"
            alt="fb"
          />
          <b-image
            class="social-img ml-6"
            :src="require('@/assets/images/twitter.png')"
            alt="fb"
          />
          <b-image
            class="social-img ml-6"
            :src="require('@/assets/images/ig.png')"
            alt="fb"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>
