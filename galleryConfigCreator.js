const fs = require('fs');

const path = require('path');
const galleries = [{
  id: '1',
  title: 'Regał',
  desc: 'Regał wykonany na specjalne zamówienie klienta, dedykowany mieszkaniu\n' +
    'w starej kamienicy, wymiary 1,5 x 3 m, konstrukcja stalowa lakierowana\n' +
    'proszkowo, czarny mat, drewno sosnowe, kolor naturalny',
}, {
  id: '2',
  title: 'PODKŁADKI',
  desc: 'Podkładki pod kubek, wazon, świeczkę, doniczkę…. Wykonane ze starej belki\n' +
    'strychowej, każdy kawałek drewna jest unikatowy, każdy opowiada inną\n' +
    'historię. Modrzew',


}, {
  id: '3',
  title: 'ŚWIECZNIKI',
  desc: 'Świecznik wykonany ze starej belki strychowej, ręczne żłobienie \n' +
    'podkreślające unikatową strukturę drewna. Wymiar dowolny, modrzew',


}, {
  id: '4',
  title: 'PÓŁECZKA NA EKSPRES DO KAWY',
  desc: 'Półeczka po ekspres do kawy na specjalne zamówienie moich Przyjaciół. \n' +
    'Pozwoliła uzyskać dodatkową przestrzeń na blacie w kuchni. Drewno bukowe, kolor….',


},
  {
    id: '5',
    title: 'PÓŁKI, PÓŁECZKI',
    desc: 'Oferuję różnego rodzaju półki i półeczki, na książki, płyty, kwiatki… w moim \n' +
      'domu wykonałem także drewniany parapet, w miejsce starego, betonowego \n' +
      'oraz nowy blat do szafeczki.',


  },
  {
    id: '6',
    title: 'DESKI DO SERWOWANIA DAŃ\n',
    desc: 'Prezentuję deski do serwowania przekąsek, tapasów czy owoców, \n' +
      'zaimpregnowane oliwą naturalną, własnoręcznie żłobione. Możliwość\n' +
      'wykonania różnych rozmiarów.',


  },
  {
    id: '7',
    title: 'BELKI',
    desc: 'Belki strychowe z ponad 100 letnią historią, dodają mieszkaniu rustykalnego \n' +
      'charakteru, ocieplają wnętrze, modrzew',

  }];
const res = galleries.map((gallery) => {
  const p = path.join(process.cwd(), 'static', 'products', gallery.id);
  const files = fs.readdirSync(p);
  return {
    ...gallery,
    files
  };
});

fs.writeFileSync('galleryConfig.json', JSON.stringify(res));
