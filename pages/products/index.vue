<template>
  <div class="site container products">
    <Title style="padding-top: 10vh" title="realizacje"/>
    <h2>ZOBACZ MOJE WYBRANE REALIZACJE</h2>
    <h3>po&nbsp;więcej&nbsp;zapraszam&nbsp;na
      <a href="https://www.facebook.com/dwadrwa" target="_blank">
        <FbIcon style="height: 30px; width: 30px"/>
      </a>
      <a href="https://www.instagram.com/dwadrwa/" target="_blank">
        <IgIcon style="height: 30px; width: 30px"/>
      </a>
    </h3>
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import products from '../../galleryConfig.json';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import Product from '../../components/Product.vue';

export default {
  components: {
    Product,
  },
  name: 'Products',
  data() {
    return {
      products,
      index: null,
    };
  },
  methods: {
    handleClick(id, filename) {
      this.$router.push(`/products/${id}/${filename}`);
    },
  }
};
</script>

<style lang="scss">


</style>
