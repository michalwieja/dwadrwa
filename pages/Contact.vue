<template>
  <div class="site container contact">
    <ContentWithImage filename="kontakt.jpg" style="padding-top: 10vh">
      <div class="contact__title">kontakt</div>
      <div class="contact__data">
        <div class="contact__row">Filip Karkosz</div>
        <div><a class="contact__row" href="tel:"> tel. + 48 503 478 360</a></div>
        <div><a class="contact__row" href="mailto:kontakt@dwadrwa.pl">mail:
          kontakt@dwadrwa.pl</a>
        </div>
        <div>
          <a href="https://www.instagram.com/dwadrwa/" target="_blank">
            <IgIcon style="height: 30; width: 30"/>
          </a>
          <a href="https://www.facebook.com/dwadrwa" target="_blank">
            <FbIcon style="height: 30; width: 30"/>
          </a>
        </div>
        <div class="contact__small-row">Stacjonuję na terenie Śląska, jednak szerokość geograficzna
          mnie nie ogranicza w&nbsp;działaniu
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
