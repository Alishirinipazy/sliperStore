<template>
  <div class="col-lg-4  col-sm-6 col-xs-12  ">
    <div class="card-show">

      <img :src="itemFeaturs?.icon" width="120" height="120" alt="">
      <p>{{itemFeaturs?.name}}</p>
      <ul>
        <li class="w-75">{{itemFeaturs?.dec1}} </li>
        <li class="w-75">{{itemFeaturs?.dec2}}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  itemFeaturs:Object,
})
</script>
<style scoped>

.card-show {
  position: relative;
  background: #222831;
  height: 12rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #222831;
  font-family: bold;
  color: #e69c00;
  transition: 0.5s;
  overflow: hidden;
}

img {
  transition: 0.5s;
  position: absolute;
  background: #e69c00;
  border-radius: 50%;
  left: 35%;
  bottom: 50px;
}
ul {
  position: absolute;
  transition: 0.5s;
  bottom:5%;
  right: -100%;
}
p {
  transition: 0.5s;
  position: absolute;
  bottom: -5px;
  left: 35%;

}

.card-show:hover img {
  width: 100px;
  height: 100px;
  left: 10px;
  background: #ffffff;
}
.card-show:hover p {
  color : #222831;
  bottom:120px;
  left: 59%;

}
.card-show:hover {
  animation: colorChange 0.5s both;
}
.card-show:hover ul {

  color: #222831;
  right:1%;
}
@keyframes colorChange {
  0% {
    background-color: #735a36;
  }
  50% {
    background-color: #b98d49;
  }
  100% {
    background-color: #e69c00;
  }
}
</style>  