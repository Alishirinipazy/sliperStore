<template>
  <div class="container my-4">
    <div class="body-new-product w-100  rounded p-4">
      <swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="5"
          :breakpoints="{
              '320': { slidesPerView: 2 },
              '768': { slidesPerView: 3 },
              '1200': { slidesPerView: 5 }
            }"
          :loop="false"
          :effect="'creative'"
          :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
          :creative-effect="{
      prev: {
        shadow: false,
        translate: ['0%', 0, 0],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
      >
        <swiper-slide>
          <div class="rounded my-4  w-100 d-flex flex-column justify-content-center align-items-center"
               style="height: 22rem;background: rgb(185,141,73)">

            <h5 class="text-center">
              پرفروش ترین ها
              <i class="bi-bag-dash-fill "></i>
            </h5>
          </div>
        </swiper-slide>
        <template v-for="(item,index) in data?.data?.products" :key="index">
          <swiper-slide>

            <NewProductSlide :product="item"/>

          </swiper-slide>
        </template>
        <swiper-slide>
          <div class="rounded my-4 mx-1 w-100 d-flex flex-column justify-content-center align-items-center"
               style="height: 22rem;background: rgba(153,153,153,0.51)">
            <nuxt-link to="/menu?sortBy=bestseller">
              <h5 class="text-center">
                مشاهده همه
                <i class="bi-arrow-left-circle-fill text-warning "></i>
              </h5>
            </nuxt-link>

          </div>
        </swiper-slide>


      </swiper>
    </div>
  </div>
</template>
<script setup>

const {public: {apiBase}} = useRuntimeConfig();
const {data} = await useFetch(() => `${apiBase}/menu`, {
  query: {sortBy: 'bestseller'}
});
</script>
<style scoped>
a {
  color: #e69c00;
  transition: 0.5s;
}

a :hover {
  color: #222831;
}
</style>