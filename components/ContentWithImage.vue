<template>
  <div :class={reverse} class="content-with-image">
    <div class="content" data-aos="fade-in" data-aos-duration="1000">
      <h2 v-if="title">{{ title }}</h2>
      <div class="text">
        <slot></slot>
      </div>
    </div>
    <div class="image" data-aos="fade-in" data-aos-duration="1000">
      <nuxt-img :src="`${filename}`" sizes="2xl:50vw"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentWithImage',
  props: {
    title: {
      type: String

    },
    filename: {
      type: String,
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
