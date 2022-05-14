<template>
  <div class="site container contact">
    <ContentWithImage filename="kontakt.jpg" style="padding-top: 10vh">
      <div class="contact__title">kontakt</div>
      <div class="contact__data">
        <div class="contact__row">Filip Karkosz</div>
        <div><a class="contact__row" href="tel:"> tel. + 48 503 478 360</a></div>
        <div><a class="contact__row" href="mailto:karkoszf@gmail.com">mail:
          karkoszf@gmail.com</a>
        </div>
      </div>
    </ContentWithImage>
  </div>
</template>

<script>
import ContentWithImage from '../components/ContentWithImage.vue';

export default {
  name: 'Contact',
  components: {
    ContentWithImage
  }
};
</script>
