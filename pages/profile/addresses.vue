<template>
  <ProfileCreate :provinces="data.provinces" :cities="data.cities" />
  <hr>
  <template v-for="address in data.addresses" :key="address.id">
    <ProfileEdite :address="address" :provinces="data.provinces" :cities="data.cities" :refresh="refresh" />
    <hr>
  </template>
</template>
<script setup>
const { data,refresh } = await useFetch('/api/profile/addressess', {
  headers: useRequestHeaders(['cookie'])
})

</script>