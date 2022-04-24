<template>
  <div class="photo">
    <div class="close" @click="$router.back()">
      <uil-times size="20px"/>
    </div>
    <img
      :alt="'Photography'"
      :src="`/products/${$route.params.id}/${$route.params.photo}`"
      class="img"
    >
  </div>
</template>

<script>
import { UilTimes } from '@iconscout/vue-unicons';

export default {
  name: 'Index',
  components: { UilTimes },
  layout: 'photo'
};
</script>

<style lang="scss" scoped>
.photo {
  position: fixed;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vh;

  .wrapper {
    width: 100%;
    height: 100%;
  }

  .img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

</style>
