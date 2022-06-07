const fs = require('fs');

const path = require('path');
const galleries = [
  {
    id: '1',
    title: 'regał',
    desc: 'Regał wykonany na specjalne zamówienie klienta, dedykowany mieszkaniu w\u00A0starej kamienicy, wymiary 1,6\u00A0x\u00A03m, konstrukcja stalowa lakierowana proszkowo, czarny mat, drewno sosnowe, kolor dębowy.',
  }, {
    id: '2',
    title: 'podkładki',
    desc: 'Podkładki pod kubek, wazon, świeczkę, doniczkę…. Wykonane ze starej belki strychowej, każdy kawałek drewna jest unikatowy, każdy opowiada inną historię. Modrzew.',
  }, {
    id: '3',
    title: 'świeczniki',
    desc: 'Świecznik wykonany ze starej belki strychowej, ręczne żłobienie podkreślające unikatową strukturę drewna. Wymiar dowolny, modrzew.',
  }, {
    id: '4',
    title: 'półeczka na ekspress do kawy',
    desc: 'Półeczka pod ekspres do kawy na specjalne zamówienie. Pozwoliła uzyskać dodatkową przestrzeń na blacie w\u00A0kuchni. Drewno bukowe, kolor dębowy.',
  },
  {
    id: '5',
    title: 'półki, półeczki',
    desc: 'Realizuję różnego rodzaju półki, o\u00A0dowolnych rozmiarach oraz kolorach, z wybranego przez klienta materiału. Istnieje możliwość zamontowania „lewitujących” półek - bez widocznych mocowań.',
  },
  {
    id: '6',
    title: 'deski do serwowania dań',
    desc: 'Deski do serwowania przekąsek, tapasów czy owoców, zaimpregnowane naturalną oliwą, własnoręcznie żłobione. Możliwość wykonania różnych rozmiarów.',
  },
  {
    id: '7',
    title: 'pozostałe',
    desc: 'Na specjalne zamówienia klientów, zrealizowałem różne dodatkowe projekty, takie jak kwietniki, wieszaki na ubrania z\u00A0wykorzystaniem ponad 100-letnich, odrestaurowanych przeze mnie gwoździ, belki strychowe i\u00A0wiele innych.',
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
