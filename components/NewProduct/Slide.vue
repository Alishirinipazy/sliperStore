<template>

  <div class="card mx-1 my-4" style="height: 22rem">
    <img src="/images/l2Food.gif" v-img="product.primary_image" :alt="product.name" class="card-img-top">

    <div class="card-body  border-black border-top">

      <div class="detail-box">
        <h5>
          <NuxtLink :to="`/products/${product.slug}`"> {{ product.name }}</NuxtLink>
        </h5>

        <div class="options d-flex justify-content-between align-items-center">

          <p v-if="!product.is_sale">
            <del> {{numberFormat(product.price)  }} تومان</del>
            <br>
            {{numberFormat(product.sale_price)}}
            <span>تومان</span>
          </p>
          <p v-else>
            {{numberFormat(product.price) }}
            <span>تومان</span>
          </p>
          <button @click="addToCart(product)" >
            <i class="bi bi-cart-fill text-white fs-5"></i>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})

import {useCardStor} from "@/store/cart.js"

const cart = useCardStor();
function addToCart(product) {
  cart.remove(product.id);
  cart.addToCart(product, 1);
}
</script>

<style scoped>
button {

  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #ffbe33;


}
a {
  color: #222831 !important;
  font-weight: bold;
  font-size: 90%;
}
a:hover{
  color: #e69c00 !important;
}
p {
  margin: 0;
}
</style>