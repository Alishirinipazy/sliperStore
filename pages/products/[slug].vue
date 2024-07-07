<template>
    <section class="single_page_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="row gy-5">
                        <div class="col-sm-12 col-lg-6">
                            <h3 class="fw-bold mb-4">{{ product?.data?.name }}</h3>
                            <h5 v-if="product?.data?.is_sale" class="mb-3 " >
                                <del>{{ numberFormat(product?.data?.price) }} تومان</del>
                                {{ numberFormat(product?.data?.sale_price) }}
                                تومان
                                <div class="text-danger fs-6">
                                    {{ salePercent(product?.data?.price, product?.data?.sale_price) }}% تخفیف
                                </div>
                            </h5>
                            
                            <p>{{ product?.data?.description }}</p>

                            <div class="mt-5 d-flex">
                                <button @click="addToCart(product?.data)" class="btn-add">افزودن به سبد خرید</button>
                                <div class="input-counter ms-4">
                                    <span class="plus-btn" @click="()=>quantity < product?.data?.quantity && quantity++">
                                        +
                                    </span>
                                    <div class="input-number">{{ quantity }}</div>
                                    <span class="minus-btn" @click="quantity >= 2 ? quantity-- : quantity++">
                                        -
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button v-for="(image, index) in product?.data?.images" :key="index" type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        :data-bs-slide-to="`${index + 1}`"></button>

                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/l2Food.gif  " class="d-block " 
                                            v-img="product?.data?.primary_image" :alt="product?.data?.name">
                                    </div>
                                    <div class="carousel-item" v-for="(image, index) in product?.data?.images" :key="index">
                                        <img src="/images/l2Food.gif  " class="d-block " v-img="image?.image"
                                            :alt="product?.data?.name">
                                    </div>

                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="food_section my-5">
        <div class="container">
            <div class="row gx-3">
                <div class="col-sm-6 col-lg-3" v-for="product in randomProducts?.data" :key="product.id">
                    <ProductCard :product="product" />
                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
import { useCardStor } from "../../store/cart";
const route = useRoute();
const { public: { apiBase } } = useRuntimeConfig();
const { data: product } = useFetch(`${apiBase}/products/${route.params.slug}`)
const { data: randomProducts } = useFetch(`${apiBase}/random-products?count=4`)
const cart = useCardStor();

const quantity = ref(1)

function addToCart(product) {
    cart.remove(product.id);
    cart.addToCart(product, quantity.value);
}
useHead({
  title: route.params.slug
})
</script>