<template>
     <div class="card-body">
                            <div class="form_container">
                                <form @submit.prevent="login">
                                    <div class="mb-3">
                                        <label for="cellphone" class="form-label">شماره موبایل</label>
                                        <input type="text" v-model="cellphone" class="form-control" id="cellphone">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-auth">ورود
                                    <div v-if="loading" class="spinner-grow spinner-grow-sm  text-dark ms-3"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
</template>
<script setup>
import { useToast } from 'vue-toastification';
const emit = defineEmits(['showCheckOtpForm'])
const toast = useToast();
const cellphone = ref(null);
const pattern = /^(\+98|0)?9\d{9}$/;
const errors = ref([])
const loading = ref(false);
const errorMSG = ref([]);
async function login() {
    if (cellphone.value == null) {
        toast.error("لطفا شماره موبایل را وارد کنید");
        return
    }
    if (!pattern.test(cellphone.value)) {
        toast.error("فرمت شماره موبایل اشتباه است!");
        return
    }
    try {
        loading.value = true;
        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { cellphone: cellphone?.value }
        
        })
        toast.success(`کد تایید به شماره ${cellphone?.value } ارسال شد`);
        emit('showCheckOtpForm')
    } catch (error) {
        errorMSG.value = Object.values(error?.data?.data?.message).flat()
        toast.warning(`${errorMSG.value}`)
        
    }
    finally{
        loading.value = false
    }
}

</script>