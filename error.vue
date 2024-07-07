<template>
  
  <LayoutHeader />
  <div class="  errorPage">
    <h1> خطای {{ props.error.statusCode }} </h1>
    <h3>پوزش مطلبیم صفحه درخواستی شما را پیدا نکردیم !</h3>
    <NuxtLink class="btn btn-success my-4"to="/">بریم صفحه اصلی</NuxtLink>
  </div>
   <LayoutFooter />
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

