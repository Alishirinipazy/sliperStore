<template>
    <div v-if="pending" class="gifLoading col-sm-12 col-lg-9">
        <div class="row">
            <img src="/images/l2Food.gif" alt="">
        </div>
    </div>
    <template v-else>
        <div class="" v-if="data.orders.length == 0">
            <img class="img-fluid" src="/images/abc.gif" alt="">
            <h5 class="text-center">سفارشی یافت نشد!</h5>
        </div>
        <div v-else>
            <div class="table-responsive">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>شماره سفارش</th>
                            <th>آدرس</th>
                            <th>وضعیت</th>
                            <th>وضعیت پرداخت</th>
                            <th>قیمت کل</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in data.orders" :key="order.id">
                            <th>
                                {{ order.id }}
                            </th>
                            <td>{{ order.address_tilte }}</td>
                            <td>{{ order.status }}</td>
                            <td>
                                <span
                                    :class="{ 'text-success': order.payment_status == 'موفق', 'text-danger': order.payment_status == 'ناموفق' }">{{
                                        order.payment_status }}</span>
                            </td>
                            <td>{{ numberFormat(order.paying_amount) }} تومان</td>
                            <td> {{ order.created_at }}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    :data-bs-target="`#modal-${order.id}`">
                                    محصولات
                                </button>
                                <div class="modal fade" :id="`modal-${order.id}`">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h6 class="modal-title">محصولات سفارش
                                                    شماره {{ order.id }}</h6>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
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
                                                        <tr v-for="product in order.order_items" :key="product.id">
                                                            <th>
                                                                <img src="/images/l2Food.gif" width="80"
                                                                    v-img="product.product_primary_image"
                                                                    :alt="product.product_name">
                                                            </th>
                                                            <td class="fw-bold">{{ product.product_name }}</td>
                                                            <td>{{ numberFormat(product.price) }} تومان</td>
                                                            <td>
                                                                {{ product.quantity }}
                                                            </td>
                                                            <td>{{ numberFormat(product.subtotal) }} تومان</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <nav class="d-flex justify-content-center mt-5">
                <ul class="pagination">
                    <li v-for="(link, index) in data.meta.links.slice(1, -1)" :key="index" class="page-item"
                        :class="{ active: link.active }">
                        <button @click="paginate(link.label)" class="page-link">{{ link.label
                        }}</button>
                    </li>
                </ul>
            </nav>
        </div>
    </template>
</template>
<script setup>
const page = ref(0)
const { data, refresh, pending } = await useFetch(() => "/api/profile/orders", {
    query: { page },
    headers: useRequestHeaders(['cookie'])
})
function paginate(num) {
    page.value = num;
    refresh();
}
console.log(data.value.orders.order_items);
</script>