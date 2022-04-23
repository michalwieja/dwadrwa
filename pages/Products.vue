<template>
  <div class="site container products">
    <Title style="padding-top: 10vh" title="realizacje"/>
    <h2>ZOBACZ MOJE WYBRANE REALIZACJE</h2>
    <h3>po więcej zapraszam na IG oraz FB</h3>
    <div v-for="product in products" :key="product.id">
      <Title :title="product.title"/>
      <h3>{{ product.desc }}</h3>
      <div class="products__container">
        <div v-for="file in product.files" :key="file">
          <nuxt-img :src="`/products/${product.id}/${file}`" fit="cover" height="200px"
                    sizes="2xl:25vw"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../galleryConfig.json';

export default {
  name: 'Products',
  data() {
    return {
      products
    };
  },
};
</script>
