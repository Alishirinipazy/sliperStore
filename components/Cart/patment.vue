<template>
    <button :disabled="loading" @click="payment" class="user_option btn-auth mt-4">
        پرداخت
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const loading = ref(false)
const errorMSG = ref([]);
const props = defineProps(['coupon', 'addressId', 'cart']);
async function payment() {

    if (props.addressId === "" || props.addressId === null) {
        toast.error("ناززیی.. آدرس انتخاب نشده");
        return
    }
    try {
        loading.value = true;
        const data = await $fetch('/api/payment/send', {
            method: 'POST',
            body: {
                cart: props.cart,
                coupon: props.coupon.code,
                address_id: props.addressId
            }

        })
        toast.success("در حال ارسال اطلاعات به صفحه پرداخت")
        await navigateTo(data.url,{
            external:true
        })
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    }
    finally {
        loading.value = false
    }
}
</script>