<template>
  <div class="container copyright">
    <div class="columns is-mobile is-vcentered is-justify-content-space-between">
      <div class="column">
        <h4>Copyright</h4>
      </div>
      <div class="column is-flex is-justify-content-end">
        <div class="block copyright-images is-flex">
          <b-image class="social-img" :src="require('@/assets/images/fb.png')" alt="fb" />
          <b-image class="social-img" :src="require('@/assets/images/twitter.png')" alt="fb" />
          <b-image class="social-img" :src="require('@/assets/images/ig.png')" alt="fb" />
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

<style lang="scss">
@import "@/assets/variables.scss";

.copyright {
  padding-top: 27px !important;
  padding-bottom: 27px !important;
}

.social-img {
  margin-left: 3rem;
}

@media only screen and (max-width: 769px) {
  .copyright {
    background-color: $background;
  }

  .social-img {
    margin-left: 2rem;
  }
}
</style>
