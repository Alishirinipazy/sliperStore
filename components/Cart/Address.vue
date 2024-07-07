<template>
    <div>
        انتخاب آدرس
    </div>
    <select @change="(el)=>emit('setAddressId',el.target.value)" style="width: 200px;" class="form-select ms-3" aria-label="Default select example">
        <option value="">انتخاب آدرس</option>
        <option v-for="(address) in addresses" :key="address.id" :value="address.id">{{ address.title }}</option>
    </select>
    <NuxtLink to="/profile/addresses" class="btn btn-primary">
        ایجاد آدرس
    </NuxtLink>
</template>
<script setup>
const {data:addresses} = await useFetch('/api/cart/addresses')
const emit = defineEmits(['setAddressId'])

</script>