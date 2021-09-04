<template>
  <div class="hwrapper">
    <div class="header">
      <div class="logowrapper">
        <img class="logo" alt="Coffee logo" src="../assets/coffee.png">
        <h1>Find Coffee Shop</h1>
      </div>
      <nav>
        <ul>
          <li>HOME</li>
          <li>PRICE</li>
          <li>MAP</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.hwrapper{
  width: 100%;
  background-color: #EFEFEF;
  position: fixed
}
.header{
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logowrapper{
  margin: 0 auto 0 20px;
  align-items: center;
  display: flex;
}
.logo{
  width: 50px;
  height: 40px;
}
ul{
  display: flex;
  list-style-type: none
}
li{
  font-weight: bold;
  margin: 0 40px 0 0;
}
</style>