<template>
  <div class="wrapper">
    <div><a href="https://www.facebook.com/dwadrwa" target="_blank">
      <uil-facebook size="25"/>
      /dwadrwa
      <span v-if="withName">facebook</span>
    </a></div>
    <div><a href="https://www.instagram.com/dwadrwa/" target="_blank">
      <uil-instagram size="25"/>
      /dwadrwa
      <span v-if="withName">instagram</span>
    </a></div>
  </div>
</template>

<script>
import { UilFacebook, UilInstagram } from '@iconscout/vue-unicons';

export default {
  name: 'SocialIcons',
  components: {
    UilFacebook,
    UilInstagram
  },
  props: {
    withName: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;


  a {
    display: flex;
    align-items: center;

  }

}
</style>
