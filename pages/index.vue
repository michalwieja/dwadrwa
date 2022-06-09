<template>
  <div>
    <div class="hero container">
      <Hero/>
      <Socials/>
    </div>
    <div class="container">
      <Title title="o mnie"/>
      <div class="content-container">
        <div class="text" data-aos="fade-in" data-aos-duration="1000">
          <p>
            Cześć, mam na imię Filip. Jeśli tu trafiłeś, to prawdopodobnym jest, że
            podzielasz moją
            miłość
            do drewna i&nbsp;szukasz wyjątkowych mebli lub dodatków z&nbsp;drewna i&nbsp;stali do
            swojego wnętrza.
            Pozwól
            zatem zaprosić się do mojego świata.</p>
          <h2 class="text-underline">pasje</h2>
          <p> Prace rękodzielnicze i&nbsp;majsterkowanie pokochałem już będąc dzieckiem, budując
            szałasy i&nbsp;naprawiając
            przyczepę kempingową podczas kaszubskich wakacji z rodzicami. Niedługo później
            zaciekawił
            mnie
            również świat sztuki. Połączenie tych pasji zaprowadziło mnie do szkoły plastycznej,
            którą
            ukończyłem z wyróżnieniem na kierunku metaloplastyki.</p>
          <h2>podróże</h2>
          <p>
            Druga część mojej duszy ciągnęła mnie w&nbsp;świat, dlatego swoje zawodowe życie
            związałem
            z&nbsp;podróżami i&nbsp;eksploracją nowych zakątków świata. Jako pilot-przewodnik
            pokazywałem swoim podopiecznym kraje bliższe i&nbsp;dalsze,
            sam
            też poznając i&nbsp;ucząc się nowych miejsc i&nbsp;kultur. Szczególnie bliskie mojemu
            sercu są
            Włochy,
            niepowtarzalny klimat tamtejszych winnic, zamiłowanie do natury i&nbsp;prostoty, ale
            także
            niezwykła architektura. Fuzja tych fascynacji oraz… pandemia, która niespodziewanie
            uderzyła w&nbsp;mój zawód,
            popchnęły mnie do otwarcia własnej pracowni Dwa&nbsp;Drwa.
          </p>
          <h2>inspiracje</h2>
          <p>
            Realizuję w&nbsp;niej wszystko to, czym
            nasiąkałem przez lata – rustykalne formy przywiezione
            z&nbsp;włoskiej tawerny, metalowe akcenty, które pamiętam z kuźni w&nbsp;katowickim
            Plastyku, ale
            też nowoczesne połączenia stali i&nbsp;drewna, które odpowiadają moim zamiłowaniom do
            loftowego
            stylu i&nbsp;customowego zacięcia. Wszystko, co oferuję, jest dziełem moich rąk, ale też
            pomysłowości
            i&nbsp;kreatywności. Zawsze fascynowały mnie nieregularne formy wydobywające się spod
            kowadła,
            ich unikatowość i&nbsp;historia, jaką opowiadają. To one wykształciły mój styl.
          </p>
          <h2>porozmawiajmy</h2>

          <p>Chętnie porozmawiam z Wami i&nbsp;poznam Wasze pomysły i&nbsp;oczekiwania na meble i&nbsp;dodatki&nbsp;z
            drewna i&nbsp;stali do
            domu,
            jakie
            chcielibyście mieć. Jeśli urządzacie biuro - podpowiem, jaki regał byłby odpowiedni.
            Wierzę,
            że połączenie Waszych inspiracji z&nbsp;moim doświadczeniem sprawi, że
            w&nbsp;Waszych wnętrzach zagości coś naprawdę wyjątkowego.</p>
        </div>
        <div class="photo" data-aos="fade-in" data-aos-duration="1000">
          <nuxt-img sizes="2xl:500" src="/home.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from '../components/Socials.vue';
import Title from '../components/Title.vue';

export default {
  components: {
    Title,
    Socials,

  }
};
</script>
