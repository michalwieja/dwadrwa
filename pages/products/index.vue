<template>
  <div class="site container products">
    <Title style="padding-top: 10vh" title="realizacje"/>
    <h2>ZOBACZ MOJE WYBRANE REALIZACJE</h2>
    <h3>po więcej zapraszam na IG oraz FB</h3>
    <div v-for="product in products" :key="product.id">
      <Title :title="product.title"/>
      <h3>{{ product.desc }}</h3>
      <div class="column-wrapper">
        <div class="column">
          <nuxt-img
            v-for="element in getPartOfGallery(1, product)"
            :key="element"
            :src="`/products/${product.id}/${element}`"
            preload
            @click="handleClick(product.id, element)"
          />
        </div>
        <div class="column">
          <nuxt-img
            v-for="element in getPartOfGallery(2, product)"
            :key="element"
            :src="`/products/${product.id}/${element}`"
            preload
            @click="handleClick(product.id, element)"
          />
        </div>
        <div class="column">
          <nuxt-img
            v-for="element in getPartOfGallery(3, product)"
            :key="element"
            :src="`/products/${product.id}/${element}`"
            preload
            @click="handleClick(product.id, element)"
          />
        </div>
      </div>
      <!--      <div class="products__container">-->
      <!--        <div v-for="file in product.files" :key="file">-->
      <!--          <nuxt-img :src="`/products/${product.id}/${file}`" fit="cover"-->
      <!--                    sizes="2xl:20vw"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->


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
      console.log(id, filename);
      this.$router.push(`/products/${id}/${filename}`);
    },
    getPartOfGallery(part = 1, gallery) {
      return gallery?.files.filter((el, index) => {
        return (index + part) % 3 === 0;
      });
    }
  }
};
</script>
