<template>
    <section class="food_section layout_padding">
       
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-3">
                    <div>
                        <label class="form-label">جستجو</label>
                        <div class="input-group mb-3">
                            <input type="text" v-model="search" class="form-control" placeholder="نام محصول ..."
                                aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <button @click="search !== '' && handleFilter({ search: search })" class="input-group-text"
                                id="basic-addon2">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div class="filter-list">
                        <div class="form-label">
                            دسته بندی
                        </div>
                        <ul>
                            <li v-for="category in categories.data" :key="category.id" class="my-2 cursor-pointer"
                                :class="{ 'filter-list-active': route.query.hasOwnProperty('category') && route.query.category == category.id }"
                                @click="handleFilter({ category: category.id })">
                                {{ category.name }}
                            </li>

                        </ul>
                    </div>
                    <hr>
                    <div>
                        <label class="form-label">مرتب سازی</label>
                        <div class="form-check my-2">
                            <input class="form-check-input" @click="handleFilter({ sortBt: 'max' })"
                                :checked="route.query.hasOwnProperty('sortBy') && route.query.sortBy == 'max'" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault1">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" @click="handleFilter({ sortBt: 'min' })"
                                :checked="route.query.hasOwnProperty('sortBy') && route.query.sortBy == 'min'" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault2">
                                کمترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" @click="handleFilter({ sortBt: 'bestseller' })"
                                :checked="route.query.hasOwnProperty('sortBy') && route.query.sortBy == 'bestseller'"
                                type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault3">
                                پرفروش ترین
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" @click="handleFilter({ sortBt: 'sale' })"
                                :checked="route.query.hasOwnProperty('sortBy') && route.query.sortBy == 'sale'"
                                name="flexRadioDefault" id="flexRadioDefault4" checked>
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault4">
                                با تخفیف
                            </label>
                        </div>
                    </div>
                </div>
                <template v-if="pending" >
                      <Loader />
            </template>
                <template v-else>
                    <div class="col-sm-12 col-lg-6 text-center " v-if="menu.data.products.length == 0">
                        <img class="img-fluid" src="/images/abc.gif" alt="">
                        <h5 class="text-center">متاسفیم محصول مورد نظر شما رو نداریم !</h5>
                    </div>
                    <template v-else>
                        <div class="col-sm-12 col-lg-9">
                            <div class="row gx-3">
                                <div class="col-sm-6 col-lg-4" v-for="product in menu.data.products " :key="product.id">
                                    <div class="box">
                                        <ProductCard :product="product" />
                                    </div>
                                </div>
                            </div>
                            <nav class="d-flex justify-content-center mt-5">
                                <ul class="pagination">
                                    <li v-for="(link, index) in menu.data.meta.links.slice(1, -1)" :key="index"
                                        class="page-item" :class="{ active: link.active }">
                                        <button @click="handleFilter({ page: link.label })" class="page-link">{{ link.label
                                        }}</button>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </section>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const query = ref({});
const search = ref("")
const { public: { apiBase } } = useRuntimeConfig();
const { data: categories } = await useFetch(`${apiBase}/categories`)
query.value = route.query;
const { data: menu, refresh, pending } = await useFetch(() => `${apiBase}/menu`, {
    query: query
})

watch(()=>{
    if (Object.keys(route.query).length == 0) {
        query.value = {};
        refresh();
    }
})
function handleFilter(param) {
    query.value = { ...route.query, ...param }
    if (!param.hasOwnProperty('page')) {
        delete query.value.page
    }
    if (!param.hasOwnProperty('search')) {
        delete query.value.search
        search.value = ""
    }
    router.push({
        path: "/menu",
        query: query.value
    })
    refresh()

}
useHead({
  title: 'منو'
})
</script>