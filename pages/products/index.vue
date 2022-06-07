<template>
  <div class="site container products">
    <Title style="padding-top: 10vh" title="realizacje"/>
    <h2>ZOBACZ MOJE WYBRANE REALIZACJE</h2>
    <h3>po więcej zapraszam na <a href="https://www.instagram.com/dwadrwa/"
                                  target="_blank">
      <IgIcon style="height: 30; width: 30"/>
    </a> <a href="https://www.facebook.com/dwadrwa" target="_blank">
      <FbIcon style="height: 30; width: 30"/>
    </a></h3>
    <div v-for="product in products" :key="product.id">
      <Title :title="product.title"/>
      <h3>{{ product.desc }}</h3>
      <div class="gridContainer">
        <div v-for="(element, index) in product.files" :key="element"
             :class="`gridElement-${index} length-${product.files.length}`"
             data-aos="fade-in" data-aos-duration="1000">
          <nuxt-img
            :src="`/products/${product.id}/${element}`"
            fit="cover"
            preload
            @click="handleClick(product.id, element)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../../galleryConfig.json';

export default {
  name: 'Products',
  data() {
    return {
      products
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
