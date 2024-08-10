<template>
    <ClientOnly>
        <section v-if="card.card.length" class="single_page_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="row gy-5">
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>محصول</th>
                                                <th>نام</th>
                                                <th>قیمت</th>
                                                <th>تعداد</th>
                                                <th>قیمت کل</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in allCard" :key="item.id">
                                                <th>
                                                    <img src="/images/l2Food.gif  " width="80" height="80"
                                                        class="d-block w-100" v-img="item.primary_image" :alt="item.name">
                                                </th>
                                                <td class="fw-bold">{{ item.name }}</td>
                                                <td>
                                                    <div>
                                                        <span v-if="item.is_sale">
                                                            {{ numberFormat(item.sale_price) }}
                                                        </span>
                                                        <span v-else>
                                                            {{ numberFormat(item.price) }}
                                                            تومان
                                                        </span>
                                                        <div class="text-danger" v-if="item.is_sale">
                                                            {{ salePercent(item.price, item.sale_price) }} %تخفیف</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-counter">
                                                        <span class="plus-btn" @click="card.increment(item.id)">
                                                            +
                                                        </span>
                                                        <div class="input-number">{{ item.qty }}</div>
                                                        <span class="minus-btn"
                                                            @click="() => item.qty > 1 && card.dicrement(item.id)">
                                                            -
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span v-if="item.is_sale">
                                                        {{ numberFormat(item.sale_price * item.qty) }}
                                                    </span>
                                                    <span v-else>
                                                        {{ numberFormat(item.price * item.qty) }}

                                                    </span>
                                                </td>
                                                <td>
                                                    <i @click="removeFromCard(item)"
                                                        class="bi bi-x text-danger fw-bold fs-4 cursor-pointer"></i>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <button @click="card.clear()" class="btn btn-primary mb-4">پاک کردن سبد خرید</button>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12 col-md-6">
                                <CartCoupon :coupon="copun" />
                            </div>
                            <div class="col-12 col-md-6 d-flex justify-content-end align-items-baseline">
                               <CartAddress @set-address-id="(id)=>addressId = id" />

                            </div>
                        </div>
                        <div class="row justify-content-center mt-5">
                            <div class="col-12 col-md-6">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h5 class="card-title fw-bold">مجموع سبد خرید</h5>
                                        <ul class="list-group mt-4">
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>مجموع قیمت :</div>
                                                <div>
                                                    {{ numberFormat(totalAmount) }}تومان
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>تخفیف :
                                                    <span class="text-danger ms-1">{{ copun.percent }}%</span>

                                                </div>
                                                <div class="text-danger">
                                                    {{ numberFormat((totalAmount*copun.percent)/100) }}تومان
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>قیمت پرداختی :</div>
                                                <div>
                                                  {{ numberFormat(totalAmount-((totalAmount*copun.percent)/100)) }}تومان
                                                </div>
                                            </li>
                                        </ul>
                                        <CartPatment :coupon="copun" :addressId="addressId" :cart="allCard"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-else class="h-100 text-center py-4">
            <img class="img-fluid" src="/images/abc.gif" alt="موجود نیست">
            <h5 class="text-center">در سبد خرید تون محصولی رو پیدا نکریدم!</h5>
        </div>
        <template #fallback>
            <div class="gifLoading col-sm-12 col-lg-12">
                <div class="row">

                </div>
            </div>
        </template>
    </ClientOnly>
</template>
<script setup>
definePageMeta({
    middleware: 'auth'
})
import { useToast } from "vue-toastification";
import { useCardStor } from "../../store/cart";
const toast = useToast();
const card = useCardStor();
const addressId = ref(null)
const allCard = computed(() => card.allIems)
const totalAmount = computed(() => card.totalAmount)
const quantity = ref(1);
const copun = reactive({
    code: '',
    percent: 0
})
function removeFromCard(id) {
    card.remove(id.id)
    toast.warning(`${id.name} با موفقیت پاک شد`)
}
useHead({
  title: 'ثبت سفارش'
})
</script>