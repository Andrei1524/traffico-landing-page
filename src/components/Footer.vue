<template>
  <section
    id="footer"
    class="footer-section position-relative"
  >
    <div class="footer">
      <b-image
        :src="require('@/assets/images/footer-truckmobil.png')"
        alt=""
        class="truck position-relative"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
      <div class="container">
        <div class="columns footer-form is-variable is-3-desktop is-vcentered is-justify-content-space-between">
          <div class="column is-two-fifths is-align-self-flex-end">
            <div class="info-box info-box-transparent-bg mt-6">
              <p class="font-size-24px">
                We provide traffic management consultants so you get started quickly, contact us for a quote today!
              </p>
            </div>
          </div>
          <div class="column is-two-fifths">
            <div class="box p-6">
              <b-field
                label="Name"
                class="mb-5"
              >
                <b-input v-model="form.name" />
              </b-field>

              <b-field
                label="Email"
                type="is-danger"
                message="This email is invalid"
              >
                <b-input
                  v-model="form.email"
                  placeholder="your email address"
                  type="email"
                />
              </b-field>

              <div class="buttons mt-4">
                <a
                  class="button is-primary default-btn font-weight-700"
                  @click="handleGetStarted"
                >
                  GET STARTED
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-mobile footer-navbar is-flex is-vcentered is-justify-content-space-between">
          <div class="column is-two-fifths">
            <a
              href="#"
              class="font-family-dm"
            ><h3 class="title is-4 font-weight-500">TRAFICO.</h3></a>
          </div>

          <div class="column footer-navbar-right">
            <div class="is-flex is-justify-content-end">
              <a
                href="#"
                class="mr-6"
              ><h3 class="title is-6 font-weight-400">ABOUT</h3></a>
              <a
                href="#"
                class="mr-6 ml-6"
              ><h3 class="title is-6 font-weight-400">HOW TO</h3></a>
              <a
                href="#"
                class="ml-6"
              ><h3 class="title is-6 font-weight-400">FAQS</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Copyright />
  </section>
</template>

<script>
import { MainController } from '@/controllers/main'
import Copyright from '@/components/Copyright'

export default {
  name: 'Top',
  components: {
    Copyright
  },

  data () {
    return {
      form: {
        name: 'Hendrik Larsson',
        email: null
      },

      MainController
    }
  },

  methods: {
    handleGetStarted () {
      MainController.getStarted(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    background: #0F264C;
    border-top-right-radius: 100px;
  }
}

.truck {
  position: absolute;
  top: -200px;
  left: 0;
  z-index: 2;
}

.footer-form {
  position: relative;
  top: unset;
}

.footer-navbar {
  margin-top: 100px;
}

@media only screen and (min-width: 1216px) {
  .footer-form {
    top: -110px;
  }

  .container {
    padding-right: 14em !important;
  }

  .footer {
    height: 85vh;

    &:before {
      width: 85%;
      height: 90%;
    }
  }
}

@media only screen and (max-width: 769px) {
  .footer-navbar {
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    .column:first-child {
      text-align: center;
    }
  }

  .footer-navbar-right {
    a {
      margin: 1em !important;
    }
  }

  .footer {
    &:before {
      height: 100% !important;
    }
  }
}

@media only screen and (max-width: 496px) {
  .footer {
    height: 100%;
  }
}
</style>
