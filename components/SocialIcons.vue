<template>
  <div>
    <div>
      <a href="https://www.facebook.com/elladiumplaza/" target="_blank">
        <uil-facebook />
        <span v-if="withName">facebook</span>
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/elladiumplaza/" target="_blank">
        <uil-instagram />
        <span v-if="withName">instagram</span>
      </a>
    </div>
  </div>
</template>

<script>
import { UilFacebook, UilInstagram } from '@iconscout/vue-unicons'

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
}
</script>
