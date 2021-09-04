<template>
  <div class="MainContents">
    <img src="../assets/coffee-back.jpg">
  </div>
</template>

<script>
export default {
  name: 'MainContents',
  props: {
    msg: String
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
