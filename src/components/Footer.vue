<template>
  <div class="fwrapper">
    <div class="footer">
        <small>© yanao</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.fwrapper{
  width: 100%;
  height: 30px;
  align-items: center;
  position: relative;
}
.footer{
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  background-color: #EFEFEF;
}
</style>