<template>
  <section class="footer-section position-relative">
    <b-image
      :src="require('@/assets/images/footer-truckmobil.png')"
      alt=""
      class="truck position-relative"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    />
    <b-image
      :src="require('@/assets/images/footer-bg.png')"
      alt="footer-bg"
      class="footer-bg"
    />
    <div class="container">
      <div class="columns is-variable is-3-desktop">
        <div class="column is-two-fifths">
          <div class="info-box info-box-transparent-bg mt-6">
            <p>
              We provide traffic management consultants so you get started quickly, contact us for a quote today!
            </p>
          </div>
        </div>
        <div class="column is-two-fifths">
          <div class="box p-6">
            <b-field label="Name">
              <b-input v-model="form.name" />
            </b-field>

            <b-field
              label="Email"
              type="is-danger"
              message="This email is invalid"
            >
              <b-input
                v-model="form.email"
                type="email"
              />
            </b-field>

            <div class="buttons">
              <a class="button is-primary default-btn font-weight-700">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Top',
  data () {
    return {
      form: {
        name: 'Hendrik Larsson',
        email: 'Your email address'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 80vh;
}

.truck {
  position: absolute;
  top: -200px;
  left: 0;
}

.footer-bg {
  position: absolute;
  width: 100%;
  left: -205px;
  bottom: 100px;
}
</style>
