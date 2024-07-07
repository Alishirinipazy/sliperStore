<template>
    <div class="input-group mb-3">
        <input v-model="coponCode" type="text" class="form-control" placeholder="کد تخفیف">
        <button @click="checkCoupon" class="input-group-text" id="basic-addon2">اعمال کد
            تخفیف</button>
    </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const coponCode = ref('');
const errorMSG = ref([]);
const props = defineProps(['coupon']);
async function checkCoupon() {

    if (coponCode.value === "" || coponCode.value === null) {
        toast.error("ناززیی.. کد تخفیف را وارد کنید");
        return
    }
    try {
        
        const data = await $fetch('/api/cart/checkCoupon', {
            method: 'POST',
            body: { code: coponCode.value }
        })
        toast.success("کد تخفیف تایید شد")
    props.coupon.code = coponCode.value;
    props.coupon.percent = data.percentage;
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat().toString();
        toast.warning(`${errorMSG.value}`)
        console.log(error,"the errrrrrr");
    }
  
}
</script>