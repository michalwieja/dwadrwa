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
  text-align: center;
  padding: 2vh;
}
</style>
