<template>
  <div class="title-container">
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
