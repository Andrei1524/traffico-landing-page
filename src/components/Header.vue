<template>
  <div class="container">
    <div class="header">
      <b-navbar :transparent="true">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }" class="font-size-32px">
            TRAFICO.
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item href="#" class="ml-6">
            ABOUT
          </b-navbar-item>
          <b-navbar-item href="#" class="ml-6">
            HOW TO
          </b-navbar-item>
          <b-navbar-item href="#" class="ml-6">
            FAQS
          </b-navbar-item>
          <b-navbar-item tag="div" class="ml-6">
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
