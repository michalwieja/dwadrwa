export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dwadrwa - z miłości do drewna',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'Dwa Drwa to autorska, kreatywna pracownia drewna, w której tworzę customowe meble na wymiar oraz domowe dodatki z drewna i metalu. Oferta pracowni ma charakter otwarty – powstają tu produkty, które są wynikiem połączenia potrzeb klienta z moim doświadczeniem. Dwa Drwa - z miłości do drewna.',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Dwadrwa - z miłości do drewna'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Dwa Drwa to autorska, kreatywna pracownia drewna, w której tworzę customowe meble na wymiar oraz domowe dodatki z drewna i metalu. Oferta pracowni ma charakter otwarty – powstają tu produkty, które są wynikiem połączenia potrzeb klienta z moim doświadczeniem. Dwa Drwa - z miłości do drewna.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/dwadrwa1200x630.jpg'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/aos',
    ssr: false
  }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
