<template>
    <FormKit type="form" @submit="edite" #default="{ value }" :incomplete-message="false" :actions="false">
        <div class="card card-body">
            <div class="row g-4">
                <div class="col col-md-6">
                    <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                        input-class="form-control" validation="required"
                        :validation-messages="{ required: 'کادر عنوان خالی است ' }" message-class="form-text text-danger"
                        :value="props.address.title" />
                </div>
                <div class="col col-md-6">
                    <FormKit type="text" name="cellphone" id="cellphone" label="شماره تماس" label-class="form-label"
                        input-class="form-control" :validation="[['required'], ['matches', /^(\+98|0)?9\d{9}$/]]"
                        :validation-messages="{ required: 'کادر شماره تماس خالی است ', 'matches': 'شماره تماس نا معتبر است' }"
                        message-class="form-text text-danger" :value="props.address.cellphone" />
                </div>

                <div class="col col-md-6">
                    <FormKit type="text" name="postal_code" id="postal_code" label="کد پستی" label-class="form-label"
                        input-class="form-control" validation="required"
                        :validation-messages="{ required: 'کادر کد پستی خالی است ' }" message-class="form-text text-danger"
                        :value="props.address.postal_code" />
                </div>
                <ClientOnly fallback-tag="span" fallback="در حال بارگذاری.....">
                    <div class="col col-md-6">
                        <FormKit type="select" name="province_id" id="province_id" label="استان" label-class="form-label"
                            @change="change" input-class="form-select" validation="required"
                            :validation-messages="{ required: 'کادر استان خالی است ' }"
                            message-class="form-text text-danger" :value="props.address.province_id">
                            <option v-for="province in props.provinces" :key="province.id" :value="province.id">{{
                                province.name }}</option>
                        </FormKit>
                    </div>
                    <div class="col col-md-6">
                        <FormKit type="select" ref="cityEl" name="city_id" id="city_id" label="شهر" label-class="form-label"
                            input-class="form-select" validation="required" :value="props.address.city_id"
                            :validation-messages="{ required: 'کادر شهر خالی است ' }" message-class="form-text text-danger">
                            <option v-for="city in props.cities.filter((item) => item.province_id == value.province_id)"
                                :key="city.id" :value="city.id">{{ city.name }}</option>
                        </FormKit>


                    </div>
                </ClientOnly>
                <div class="col col-md-12">
                    <FormKit type="textarea" name="address" id="address" label="آدرس" label-class="form-label"
                        input-class="form-control" validation="required" :value="props.address.address"
                        :validation-messages="{ required: 'کادر آدرس خالی است ' }" message-class="form-text text-danger" />
                </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button type="submit" class="btn btn-primary">ویرایش</button>
                <button type="button" class="btn btn-dark" @click="deleteAddress(props.address.id)">حذف</button>
            </div>
        </div>
    </FormKit>
</template>
<script setup>

</script>
<script setup>
import { useToast } from 'vue-toastification';

const toast = useToast();
const errorMSG = ref([]);
const props = defineProps(['address','provinces', 'cities','refresh'])
async function edite(formData) {
    try {
        await $fetch('/api/profile/addressess/edite', {
            method: 'POST',
            body: {...formData,address_id:props.address.id}
        })
        props.refresh();
        toast.success("ویرایش آدرس شما با موفقیت انجام شد")
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    }
}
function change(el) {
    cityEl.value.node.input(props.cities.find((item) => item.province_id == el.target.value).id)
}
async function deleteAddress(idAddress) {
    try {
        await $fetch('/api/profile/addressess/delete', {
            method: 'POST',
            body: {address_id:idAddress}
        })
        props.refresh();
        toast.success(" آدرس شما با موفقیت حذف شد")
    } catch (error) {
        errorMSG.value = Object.values(error.data.data.message).flat()
        toast.warning(`${errorMSG.value}`)
    }
}

</script>