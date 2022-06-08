<template>
  <div class="site container offer">
    <Title style="padding-top: 10vh" title="oferta"/>
    <div class="subtitle"
         data-aos="fade-in" data-aos-duration="1000">
      KONCEPCJA - WIZJA
      LOKALNA – POMIARY
      – PROJEKT –
      WIZUALIZACJA – WYCENA –
      MONTAŻ
    </div>
    <ContentWithImage filename="oferta_1.jpg" style="padding-top: 5vh">
      <div class="text">
        <p>Co oferuję? Nieskończoną ilość pomysłów i&nbsp;kombinacji na użycie drewna we wnętrzach,
          dlatego moja oferta ma charakter otwarty.
          <nuxt-link class="link" to="/products">Tu&nbsp;znajdziesz rzeczy, które do tej pory
            zrealizowałem.
          </nuxt-link>
        </p>
        <p>Jeśli szukasz customowych mebli na wymiar do biura czy domu, napisz do mnie – omówimy
          szczegóły, dokonam wyceny i&nbsp;przygotuję dla Ciebie projekt. W&nbsp;razie większych
          realizacji -
          przyjadę na wizję lokalną, dokonam pomiarów i&nbsp;przygotuję wizualizację mebla w&nbsp;Twoim
          wnętrzu. </p></div>
    </ContentWithImage>
    <ContentWithImage filename="oferta_2.jpg" reverse style="padding-top: 5vh">
      <div class="text"><p>Jeśli szukasz dodatków z&nbsp;drewna i&nbsp;stali do domu, takich jak
        kwietniki,
        świeczniki czy deskę do serwowania tapasów – zapraszam do kontaktu, razem stworzymy coś
        idealnego dla Twojej przestrzeni.</p></div>
    </ContentWithImage>
    <ContentWithImage filename="oferta_3.jpg" style="padding-top: 5vh">
      <div class="text"><p>Wszystko, co oferuję, jest dziełem moich rąk i&nbsp;wyobraźni. Kocham
        drewno,
        jego nieregularną strukturę i&nbsp;niepowtarzalność. Z każdego kawałka staram się wydobyć
        jego
        unikatowy charakter. </p></div>
    </ContentWithImage>
    <div class="subtitle"
         data-aos="fade-in" data-aos-duration="1000">
      INDYWIDUALNE PODEJŚCIE DO KAŻDEGO KLIENTA - SPERSONALIZOWANE PRODUKTY
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import ContentWithImage from '../components/ContentWithImage.vue';

export default {
  name: 'offer',
  components: {
    ContentWithImage,
    Title
  }
};
</script>
