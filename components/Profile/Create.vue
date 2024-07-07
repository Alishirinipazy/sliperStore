<template>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
        aria-expanded="false" aria-controls="collapseExample">
        ایجاد آدرس جدید
    </button>
    <div class="collapse mt-3" id="collapseExample">
        <FormKit type="form" id="createAddress" @submit="create" #default="{ value }" :incomplete-message="false" :actions="false">
            <div class="card card-body">
                <div class="row g-4">
                    <div class="col col-md-6 col-12">
                        <FormKit type="text" name="title" id="title" label=" عنوان آدرس" label-class="form-label"
                            input-class="form-control " validation="required" placeholder="محل کار,خانه"
                            :validation-messages="{ required: 'کادر عنوان خالی است ' }"
                            message-class="form-text text-danger" />
                    </div>
                    <div class="col col-md-6 col-12">
                        <FormKit type="text" name="cellphone" id="cellphone" label="شماره تماس" label-class="form-label"
                            input-class="form-control" :validation="[['required'], ['matches', /^(\+98|0)?9\d{9}$/]]"
                            :validation-messages="{ required: 'کادر شماره تماس خالی است ', 'matches': 'شماره تماس نا معتبر است' }"
                            message-class="form-text text-danger" />
                    </div>
                    <div class="col col-md-6 col-12">
                        <FormKit type="text" name="postal_code" id="postal_code" label="کد پستی" label-class="form-label"
                            input-class="form-control" validation="required"
                            :validation-messages="{ required: 'کادر شماره تماس خالی است ' }"
                            message-class="form-text text-danger" />
                    </div>
                    <div class="col col-md-6 col-12">
                        <FormKit type="select" name="province_id" id="province_id" label="استان" label-class="form-label"
                            @change="change" input-class="form-select" validation="required"
                            :validation-messages="{ required: 'کادر استان خالی است ' }"
                            message-class="form-text text-danger">
                            <option v-for="province in props.provinces" :key="province.id" :value="province.id">{{
                                province.name }}</option>
                        </FormKit>
                    </div>
                    <div class="col col-md-6 col-12">
                        <FormKit type="select" ref="cityEl" name="city_id" id="city_id" label="شهر" label-class="form-label"
                            input-class="form-select" validation="required"
                            :validation-messages="{ required: 'کادر شهر خالی است ' }" message-class="form-text text-danger">
                            <option v-for="city in props.cities.filter((item) => item.province_id == value.province_id)"
                                :key="city.id" :value="city.id">{{ city.name }}</option>
                        </FormKit>


                    </div>
                    <div class="col col-md-12">
                        <FormKit type="textarea" name="address" id="address" label=" آدرس دقیق" label-class="form-label"
                            input-class="form-control" validation="required"
                            :validation-messages="{ required: 'کادر آدرس خالی است ' }"
                            message-class="form-text text-danger" />
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary mt-4">ایجاد</button>
                </div>
            </div>
        </FormKit>
    </div>
</template>
<script setup>
import { useToast } from 'vue-toastification';
import {reset} from "@formkit/core"
const toast = useToast();
const errorMSG = ref([]);
const cityEl = ref(null);
const props = defineProps(['provinces', 'cities'])
async function create(formData) {
    try {
        await $fetch('/api/profile/addressess/create', {
            method: 'POST',
            body: formData
        })
        reset("createAddress")
        toast.success("ایجاد آدرس شما با موفقیت انجام شد")
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    }
}
function change(el) {
    cityEl.value.node.input(props.cities.find((item) => item.province_id == el.target.value).id)
}

</script>