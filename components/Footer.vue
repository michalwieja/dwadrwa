<template>
  <div class="container footer">Copyright &copy; MW {{ currentDate.getFullYear() }}
    All rights reserved
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style>
.footer {
  bottom: 0;
  text-align: center;
  height: 5vh;
}
</style>
