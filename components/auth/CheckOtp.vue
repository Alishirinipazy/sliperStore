<template>
    <div class="card-body">
        <div class="form_container">
            <form @submit.prevent="CheckOtp">
                <div class="mb-3">
                    <label for="cellphone" class="form-label">کد تایید</label>
                    <input type="text" v-model="otp" class="form-control" id="cellphone">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                <button type="submit" class="btn btn-primary btn-auth">تایید
                    <div v-if="loading" class="spinner-grow spinner-grow-sm  text-dark ms-3"></div>
                </button>
                <AuthResendOtp />
            </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { useToast } from 'vue-toastification';
const { authUser } = useAuth();
const toast = useToast();
const otp = ref(null);
const pattern = /^[0-9]{6}$/;
const errorMSG = ref([])
const loading = ref(false);
async function CheckOtp() {
    if (otp.value == null) {
        toast.error("لطفا کد تایید را وارد کنید");
        return
    }
    if (!pattern.test(otp.value)) {
        toast.error("فرمت  کد تایید اشتباه است!");
        return
    }
    try {
        loading.value = true;
        const data = await $fetch('/api/auth/checkOtp', {
            method: 'POST',
            body: { otp: otp.value }
        })
        toast.success("شما با موفقیت وارد حساب شده اید")
        authUser.value = data
        return navigateTo('/')
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)

    }
    finally {
        loading.value = false
    }
}

</script>