<template>
  
  <LayoutHeader />
  <div class="  errorPage">
    <h1> خطای {{ props.error.statusCode }} </h1>
    <h3 v-if="props.error.statusCode !== 404">به مشکلی خوردیم بجه ها دارن درستش می کنند بازم ببخشد </h3>
    <h3 v-else>پوزش مطلبیم صفحه درخواستی شما را پیدا نکردیم !</h3>
    <NuxtLink class="btn btn-success my-4" to="/">بریم صفحه اصلی</NuxtLink>
  </div>
   <LayoutFooter />
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

