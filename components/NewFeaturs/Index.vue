<template>
  <section class="card-area layout_padding">
    <div class="container">
      <div class="row cent gy-5">
        <Item v-for="(item,index) in itemFeaturs" :key="index" :itemFeaturs="item"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import Item from "~/components/NewFeaturs/Item.vue";


const itemFeaturs = ref({
  call: {
    name: 'پشتیبانی 24 ساعته',
    icon: '/_nuxt/public/images/call.png',
    dec1: 'در تمام پلتفرم ها',
    dec2: 'در تمام ساعات شبانه روز',
  }, time: {
    name: 'ارسال سریع و امن',
    icon: '/_nuxt/public/images/time.png',
    dec1: 'ارسال در تهران با پیک های اسلیپر',
    dec2: 'ارسال به کل کشور با پیک پیشتاز',
  },map:{
    name: 'امکان خرید حضوری',
    icon: '/_nuxt/public/images/map.png',
    dec1: 'خرید حضوری در آدرس های زیر صفحه',
    dec2: 'لطفا با هماهنگی قبلی با پشتیبانی ها',
  }
})
</script>