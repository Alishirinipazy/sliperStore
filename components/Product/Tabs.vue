<template>
    <section class="food_section layout_padding-bottom">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    منو محصولات
                </h2>
            </div>


            <Tabs nav-class="filters_menu" nav-item-active-class="active"
                :options="{ useUrlFragment: false, disableScrollBehavior: true }">
                <Tab v-for="(tablist, index) in products.data.tabList" :key="index" :name="tablist">
                    <div class="filters_content">
                        <div class="row grid">
                            <div v-for="product in products.data.tabPanel[index]" :key="product.id"
                                class="col-sm-6 col-lg-4">
                                    <ProductCard :product="product" />
                            </div>

                        </div>
                    </div>
                </Tab>

            </Tabs>

            <div class="btn-box">
                <NuxtLink to="/menu">
                    مشاهده بیشتر
                </NuxtLink>
            </div>
        </div>
         
    </section>
</template>
<script setup>
import { Tabs, Tab } from "vue3-tabs-component";
const { public: { apiBase } } = useRuntimeConfig();
const { data: products, error } = await useFetch(`${apiBase}/products/products-tabs`)
</script>