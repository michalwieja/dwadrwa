<template>
  <div v-if="parsed">
    <CoolLightBox :effect="'fade'"
                  :full-screen="true"
                  :index="index"
                  :items="parsed"
                  :use-zoom-bar="true"
                  slideshow-color-bar="#ffffff"
                  @close="index = null"
    />
    <div data-aos="fade-in"
         data-aos-delay="300" data-aos-duration="2000">
      <Title :title="product.title"/>
      <h3>{{ product.desc }}</h3>
      <div class="gridContainer">
        <div v-for="(image, idx) in parsed"
             :key="image"
             :class="`gridElement-${idx} length-${product.files.length}`"
        >
          <nuxt-img
            :src="image"
            fit="cover"
            preload
            @click="index=idx"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import CoolLightBox from 'vue-cool-lightbox';

export default {
  components: { CoolLightBox },
  name: 'Product',
  props: {
    product: {
      type: Object
    },
  },
  data() {
    return {
      index: null,
      parsed: null
    };
  },
  mounted() {
    this.parsed = this.product.files.map(file => `/products/${this.product.id}/${file}`);
  }
};
</script>
