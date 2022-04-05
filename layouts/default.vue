<template>
  <div class="app">
    <Header/>
    <div class="site">
    <Nuxt/>
    </div>
  </div>

</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'default',
  components: { Header }
};
</script>
