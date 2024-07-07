<template>
    <ClientOnly>
        <button class="btn btn-dark disabled" v-if="!showBtn">
            <vue-countdown :time=" 10 * 1000"   :transform="transformSlotProps" @end="endTime" v-slot="{  minutes, seconds }" >
               {{ seconds }} : {{ minutes }} 
            </vue-countdown>
        </button>
        <button class="btn btn-danger" v-else @click="resend" type="button">
            <div v-if="loading" class="spinner-grow spinner-grow-sm  text-dark ms-3"></div>
            ارسال دوباره
        </button>
    </ClientOnly>
</template>
<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useToast } from 'vue-toastification';
const  toast = useToast();
const showBtn = ref(false);
const errorMSG = ref([]);
const loading = ref(false)
function endTime (){
    showBtn.value = true
}
function transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    }
async function resend(){
    try {
        await $fetch ('/api/auth/checkOtpResend',{
            method:"POST"
        })
        toast.info("ارسال مجدد کد انجام شد")
        loading.value = true
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    } finally {
        loading.value = false
    }
   
}
</script>