<template>
  <div class="home">
    <p>おすすめのコーヒー紹介します</p>
    <img src="../assets/images/coffee-back.jpg">
  </div>
</template>

<script>
//import MainContents from '@/components/MainContents.vue'

export default {
  name: 'Home'
}
</script>

<style scoped>
p{
  top: 160px;
  left: 200px;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  z-index: 0;
}
img {
  width: 100%;
  min-height: 100vh;
}
</style>

