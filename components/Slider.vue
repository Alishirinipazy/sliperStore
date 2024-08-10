
<template>
  <swiper
  :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperNavigation,SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 2500,
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
    <swiper-slide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9b4d2d3240a181d8744fadec0d68e68113748002_1706357574.gif?x-oss-process=image?x-oss-process=image/format,webp" class="d-block w-100" alt="..."></swiper-slide>
    <swiper-slide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5734c0805d1749534a8cbc5b13eeb5bf83a24032_1722759055.jpg?x-oss-process=image/quality,q_95/format,webp" class="d-block w-100" alt="..."></swiper-slide>


 
    
  </swiper>
</template>

