<template>
    <div  class="sub_page ">
        <div class="hero_area ">
            <!-- header section strats -->
            <header class="header_section" >
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container py-3">
                        <a class="navbar-brand" href="index.html">
                         <img src="/images/logo.png" width="200" height="80" alt="">
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item" :class="{active: $route.path==='/'}">
                                    <nuxt-link class="nav-link" to="/" >صفحه اصلی</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{active: $route.path==='/menu'}">
                                    <nuxt-link class="nav-link" to="/menu">محصولات</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{active: $route.path==='/aboute'}">
                                    <nuxt-link to="/aboute" class="nav-link"  >درباره ما</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{active: $route.path==='/contact'}">
                                    <nuxt-link  class="nav-link" to="/contact"   >تماس باما</nuxt-link>
                                </li>
                            </ul>
                            <div class="user_option">
                                <nuxt-link  class="cart_link position-relative" to="/products/Card">
                                    <i class="bi bi-cart-fill text-white fs-5"></i>
                                    <span v-if="card.card.length" class="position-absolute top-0 translate-middle badge rounded-pill">
                                        {{ card.card.length }}
                                    </span>
                                </nuxt-link>
                                <nuxt-link v-if="authUser" to="/profile" class="btn-auth">
                                    <i class="bi bi-person-circle"></i>  {{ nameUser }}
                                </nuxt-link>
                                <nuxt-link v-else  to="/auth/login" class="btn-auth">
                                    ورود
                                </nuxt-link>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->
        </div>
    </div>

</template>
<script setup>
import { useCardStor } from "../../store/cart";
const card = useCardStor();
const { authUser }=useAuth();
const nameUser = ref(null)
if (authUser.value) {
    nameUser.value = authUser._object.$sauth_user.name
} 

</script>