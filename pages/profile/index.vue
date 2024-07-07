<template>
    <FormKit type="form" @submit="edit" :incomplete-message="false" :actions="false">
        <div class="row g-3">
            <div class="col col-md-6">
                <FormKit type="text" name="name" id="name" label="نام و نام خانوادگی" label-class="form-label"
                    input-class="form-control" validation="required"
                    :validation-messages="{ required: 'کادر نام و نام خانوادگی خالی است ' }"
                    message-class="form-text text-danger" :value="user.name" />
            </div>
            <div class="col col-md-6">
                <FormKit type="email" name="email" id="email" label="ایمیل" label-class="form-label"
                    input-class="form-control" validation="required | email"
                    :validation-messages="{ required: 'کادر ایمیل  خالی است ', email: 'ایمیل شما نا معتبر می باشد' }"
                    message-class="form-text text-danger" :value="user.email" />
            </div>
            <div class="col  col-md-6">
                <label class="form-label">شماره تلفن</label>
                <input type="text" disabled class="form-control" :value="user.cellphone">
            </div>
        </div>
        <button type="submit" class="btn btn-primary mt-4">
         ویرایش</button>
    </FormKit>
</template>
<script setup>
import { useToast } from 'vue-toastification';
const toast = useToast();
const errorMSG = ref([]);
const { data: user } = await useFetch('/api/profile/info', {
    headers: useRequestHeaders(['cookie'])
})
async function edit(formData) {
    
    try {
        await $fetch('/api/profile/info/edit', {
            method: 'POST',
            body: formData
        })
        toast.success("تغییرات شما با موفقیت انجام شد")
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    }
}
</script>