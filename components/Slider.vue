
<template>
  <swiper
  :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperNavigation,SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: true,
    }"
   :navigation="true"
   :pagination="true"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
  <swiper-slide><img src="/assets/img/banner.jpg" class="d-block w-100" alt="..."></swiper-slide>
    <swiper-slide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0c1badf07ffd2b368166eeb1afc255f68e421bd0_1718447231.jpg?x-oss-process=image/quality,q_95" class="d-block w-100" alt="..."></swiper-slide>
    <swiper-slide><img src="/images/slider3.jpg" class="d-block h-100 w-100" alt="..."></swiper-slide>

 
    
  </swiper>
</template>

