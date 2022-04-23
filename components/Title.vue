<template>
  <div class="title-container" data-aos="fade-in" data-aos-duration="1000">
    <div class="section-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
