<template>
  <section class="about-us position-relative">
    <div class="container">
      <div class="about-us-rows">
        <div class="columns">
          <div class="column is-half">
            <h2 class="default-text-base font-weight-700 font-size-24px mb-6">
              About us
            </h2>
            <p class="max-width-470">
              The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all.
            </p>
            <div class="info-box mt-6">
              <p class="font-weight-700">
                How do you do when you need to obtain a commercial traffic permit for freight transport to your business?
              </p>
            </div>
          </div>
          <div class="column is-half">
            <b-image
              :src="require('@/assets/images/landing-figure-about-1.png')"
              alt="landing figure aboua 1"
              class="figure-1"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-half">
            <b-image
              :src="require('@/assets/images/landing-figure-about-2.svg')"
              alt="landing figure about 2"
              class="figure-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div class="column is-half">
            <h2 class="default-text-base font-weight-700 font-size-24px mb-6">
              How to apply
            </h2>
            <p class="max-width-470">
              When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutUs'
}
</script>

<style lang="scss" scoped>
.about-us {
  margin-top: 100px;
}

@media only screen and (max-width: 769px) {
  .figure-1 {
    margin-top: 0;
  }
}
</style>
