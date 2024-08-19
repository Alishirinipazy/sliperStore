<template>
  <Slider/>
  <NewFeaturs/>
  <NewProduct/>
  <ProductTabs/>
  <Abouts/>
  <Contactauth/>
</template>
<script setup>


useHead({
  title: 'صفحه اصلی'
})
useSeoMeta({
  title: 'اسلیپر استور',
  ogTitle:'اسلیپر فروشگاه آنلاین دمپایی',
  description:'فروش انواع دمپایی , کفش و پوشاک به صورت آنلاین و حضوری ارسال به سراسر ایران پرداخت امن از طریق درگاه های بانکی',
  ogDescription: 'فروش انواع دمپایی , کفش و پوشاک به صورت آنلاین و حضوری ارسال به سراسر ایران پرداخت امن از طریق درگاه های بانکی',
  ogImage: '@/public/fav.png',
  twitterCard: 'summary_large_image',
})
</script>