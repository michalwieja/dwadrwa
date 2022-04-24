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
            Cześć, nazywam się Filip. Jeśli tu trafiłeś, to prawdopodobnym jest, że
            podzielasz moją
            miłość
            do drewna i szukasz wyjątkowych mebli lub drewnianych dodatków do swojego wnętrza.
            Pozwól
            zatem zaprosić się do mojego świata.</p>
          <h2>pasje</h2>
          <p> Prace rękodzielnicze i majsterkowanie pokochałem już za bajtla, budując szałasy i
            naprawiając
            przyczepę kempingową podczas kaszubskich wakacji z rodzicami. Niedługo później
            zaciekawił
            mnie
            również świat sztuki. Połączenie tych pasji zaprowadziło mnie do szkoły plastycznej,
            którą
            ukończyłem z wyróżnieniem na kierunku metaloplastyki.</p>
          <h2>podróże</h2>
          <p>
            Druga część mojej duszy ciągnęła mnie w świat, dlatego swoje zawodowe życie związałem
            z turystyką. Jako pilot-przewodnik pokazywałem swoim podopiecznym kraje bliższe i
            dalsze,
            sam
            też poznając i ucząc się nowych miejsc i kultur. Szczególnie bliskie są mi Włochy,
            niepowtarzalny klimat tamtejszych winnic, zamiłowanie do natury i prostoty, ale także
            niezwykła architektura. Fuzja tych fascynacji oraz …. pandemia, która niespodziewanie
            uderzyła w mój zawód,
            popchnęły mnie do otwarcia własnej pracowni.
          </p>
          <h2>inspiracje</h2>
          <p>
            Realizuję w niej wszystko to, czym
            nasiąkałem przez lata – rustykalne formy przywiezione
            z włoskiej tawerny, metalowe akcenty, które pamiętam z kuźni w katowickim plastyku, ale
            też nowoczesne połączenia stali i drewna, które odpowiadają moim zamiłowaniom do
            loftowego
            stylu i customowego zacięcia. Wszystko, co oferuję, jest dziełem moich rąk, ale też
            pomysłowości
            i kreatywności. Zawsze fascynowały mnie nieregularne formy wydobywające się spod
            kowadła,
            ich unikatowość i historia, jaką opowiadają. To one wykształciły mój styl.
          </p>
          <h2>porozmawiajmy</h2>

          <p> Chętnie porozmawiam z Wami i poznam Wasze pomysły na meble i drewniane dodatki do
            domu,
            jakie
            chcielibyście mieć. Jeśli urządzacie biuro - podpowiem jaki regał byłoby odpowiedni.
            Wierzę,
            że połączenie Waszych inspiracji z moim doświadczeniem sprawi, że
            w Waszych wnętrzach zagości coś naprawdę wyjątkowego.</p>
        </div>
        <div class="photo" data-aos="fade-in" data-aos-duration="1000">
          <nuxt-img sizes="2xl:400" src="/home.jpg"/>
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
