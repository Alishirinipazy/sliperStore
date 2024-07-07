<template>
    <section class="book_section layout_padding">
        <div class="container">
            <div class="heading_container">
                <h2>
                    تماس با ما
                </h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form_container">
                        <form @submit.prevent="SubmitEvent">
                            <div>
                                <input type="text" v-model="formData.name" class="form-control"
                                    placeholder="نام و نام خانوادگی" />

                            </div>
                            <div>
                                <input type="email" v-model="formData.email" class="form-control" placeholder="ایمیل" />

                            </div>
                            <div>
                                <input type="text" v-model="formData.subject" class="form-control"
                                    placeholder="موضوع پیام" />

                            </div>
                            <div>
                                <textarea rows="10" v-model="formData.text" style="height: 100px" class="form-control"
                                    placeholder="متن پیام"></textarea>

                            </div>
                            <div class="btn_box">
                                <button type="submit">
                                    ارسال پیام
                                    <div v-if="loading" class="spinner-grow spinner-grow-sm  text-dark ms-3"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="map_container ">
                        <div id="map" style="height: 345px;">
                            <iframe src="https://balad.ir/embed?p=7oyEwKUY7zRZYM" title="مشاهده «اسلیپر استور» روی نقشه بلد" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { $leaflet } = useNuxtApp();
import { useToast } from "vue-toastification"
const toast = useToast();
const { public: { apiBase } } = useRuntimeConfig();
const formData = reactive({
    name: "",
    email: "",
    subject: "",
    text: "",

})
const loading = ref(false)
const errors = ref([]);
async function SubmitEvent() {
    try {
        loading.value = true;
        const data = await $fetch(`${apiBase}/contact-us`, {
            method: "post",
            body: formData
        })
        toast.success("اطلاعات شما با موفقیت ثبت شد")

    } catch (error) {
        errors.value = Object.values(error.data.message).flat()
        if (formData.email === "" && formData.name === "" && formData.subject === "" && formData.text === "") {
            toast.error("لطفا تمامی کارد ها را پر کنید")
        } else {
            for (let index = 0; index < errors.value.length; index++) {
                toast.error(`${errors.value[index]}`)
            }
        }
    } finally {
        loading.value = false
    }
}

</script>