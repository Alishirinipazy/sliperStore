<template>
    <section class="profile_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-3">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <NuxtLink to="/profile">اطلاعات کاربر</NuxtLink>
                        </li>
                        <li class="list-group-item">
                            <NuxtLink to="/profile/addresses">آدرس ها</NuxtLink>
                          
                        </li>
                        <li class="list-group-item">
                            <NuxtLink to="/profile/order">سفارشات</NuxtLink>
                        </li>
                        <li class="list-group-item">
                            <nuxt-link to="/profile/transactions">تراکنش ها</nuxt-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" @click="logout">خروج</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-12 col-lg-9">
                    <div class="vh-70">
                        <div class="row g-4">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useToast } from 'vue-toastification';
const toast = useToast();
const {authUser} = useAuth();
async function logout(){
    await useFetch("/api/auth/logout",{
        method:'POST'
    })
    authUser.value = null;
    toast.success("عملیات با موفقیت انجام شد")
    return navigateTo('/')
}
</script>