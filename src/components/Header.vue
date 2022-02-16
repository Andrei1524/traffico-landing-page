<template>
  <div class="container">
    <div class="header">
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            TRAFICO.
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item href="#">
            ABOUT
          </b-navbar-item>
          <b-navbar-item href="#">
            HOW TO
          </b-navbar-item>
          <b-navbar-item href="#">
            FAQS
          </b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                CONTACT US
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.navbar {
  padding-top: 40px;
}
</style>
