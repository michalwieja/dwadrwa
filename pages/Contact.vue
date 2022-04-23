<template>
  <div class="site container contact">
    <ContentWithImage filename="kontakt.jpg" style="padding-top: 10vh">
      <Title title="kontakt"/>
      <div class="contact__data">
        <div class="contact__row">Filip Karkosz</div>
        <div><a class="contact__row" href="tel:"> tel. + 48 600 600 600</a></div>
        <div><a class="contact__row" href="mailto:karkoszf@gmail.com">mail:
          karkoszf@gmail.com</a>
        </div>
      </div>
    </ContentWithImage>
  </div>
</template>

<script>
import ContentWithImage from '../components/ContentWithImage.vue';
import Title from '../components/Title.vue';

export default {
  name: 'Contact',
  components: {
    Title,
    ContentWithImage
  }
};
</script>
