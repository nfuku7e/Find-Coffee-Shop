<template>
  <div class="hwrapper">
    <div class="header">
      <div class="logowrapper">
        <img class="logo" alt="Coffee logo" src="../assets/images/coffee.png">
        <router-link to="/" tag="div"><h1>Find Coffee Shop</h1></router-link>
      </div>
      <nav>
        <ul>
          <router-link to="/" tag="li">HOME</router-link>
          <router-link to="/price" tag="li">PRICE</router-link>
          <router-link to="/map" tag="li">MAP</router-link>
          <router-link to="/contact" tag="li">CONTACT</router-link>
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
  height: 90px;
  position: relative;
  top: 0;
  z-index: 1;
}
.header{
  width: 100%;
  height: 90px;
  position: fixed;
  background-color: #EFEFEF;
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
h1{
  cursor: pointer;
}
ul{
  display: flex;
  list-style-type: none
}
li{
  font-weight: bold;
  margin: 0 40px 0 0;
  cursor: pointer;
}
</style>