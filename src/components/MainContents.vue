<template>
  <div class="MainContents">
    <h1>{{ msg }}</h1>
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
.MainContents{
  width: 95%;
}
h3 {
  margin: 40px 0 0;
}
</style>
