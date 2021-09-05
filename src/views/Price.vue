<template>
  <div class="price">
    <div class="wrapper">
      <select v-model="selectedKey" v-on:change="selected">
        <!--<option value="menu" selected>{{selectedKey}}</option>-->
        <option v-for="m in merchandise" :key="m.value">{{m.text}}</option>
      </select>
      <div class="cwrapper">
        <div class="card" v-for="shop in shops" v-bind:key="shop.shopname">
          <img v-bind:src="require('../assets/images/'+shop.shopname+'/shop.png')">
          <div class="card-text">
            <p>{{shop[selectedKey]}}</p>
            <p>{{shop[price]}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import doutor from '../assets/api/doutor.json'
import tully from '../assets/api/tully.json'
import starbucks from '../assets/api/starbucks.json'
import komeda from '../assets/api/komeda.json'

export default {
  name: 'Price',
  data: function () {
    return {
      selectedKey: 'コーヒー',
      price: 'コーヒーの値段',
      //img_src: require('../assets/images/dammy.png'),
      img_src: 'dammy',
      merchandise: [
        {value: 'coffee',text: 'コーヒー'},
        {value: 'latte',text: 'カフェラテ'},
        {value: 'mocha',text: 'モカ'},
        {value: 'tea',text: 'ティー'},
      ],
      shops: [
        doutor,
        tully,
        starbucks,
        komeda
      ]
    }
  },
  methods:{
    selected(){
      this.price = this.selectedKey + 'の値段' 
    },
    createURL(text,key){
      //alert('../assets/images/'+text+'/'+key+'.png')
      return require('../assets/images/'+text+'/'+key+'.png')
    }
  }
  /*created(){
    axios
      .get('../assets/api/test.json')
      .then(response => (
        this.info = response
      ))
      .catch(error => (
              console.log(error)
      ))
  }*/
}
</script>

<style scoped>

.price{
  min-height: 100vh;
  background-color: #FAF0E6;
}
.wrapper{
  display: flex;
  padding: 10px 20px;
}
select{
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 50px;
}
.cwrapper{
  display: grid;
  gap: 30px;
  /*grid-template-columns: repeat(auto-fill,minmax(250px,1fr));*/
  grid-template-columns: 250px 250px;
  margin: 0 auto;
}
.card{
  width: 260px;
  font-weight: bold;
  color: #6091d3;/*文字色*/
  border: solid 3px #2c3e50;/*線*/
  border-radius: 20px;/*角の丸み*/
}
.card-text{
  border-top: solid 3px #2c3e50;
}
img{
  width: 250px;
  height: 150px;
  margin-top: 5px;
  border-radius: 10px;
}
</style>
