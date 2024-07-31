<script setup lang="ts">
const typeComment = ref({
  product: {
    name: 'دمپایی صیای پارسی',
    image: 'http://localhost:8000/storage/images/products/434825.jpg'
  },
  comment: {
    user1: {
      message: 'واقعا عالیه بسیار با کیفیت',
      user: 'ملینا',
      meUser: false,
      profile: '/_nuxt/public/images/profile.jpg',
    }, user2: {
      message: 'حال نکردم با این محصول',
      user: 'علی',
      meUser: true,
      profile: '/_nuxt/public/images/pro1.jpg',
    }, user3: {
      message: 'واقعا عالیه بسیار با کیفیت چه ارسال عالیه ',
      user: 'مهرداد',
      meUser: false,
      profile: '/_nuxt/public/images/pro2.jpg',
    }, user4: {
      message: 'واقعا ناراضی هستم خوشم نیامد ',
      user: 'گلناز',
      meUser: false,
      profile: '/_nuxt/public/images/pro3.jpg  ',
    }

  },
  len: 4
})
</script>

<template>
  <section>
    <div class="container my-2">

      <div class="col-12 border border-warning-subtle border-3 rounded  d-flex flex-column">
        <div class="comment-header w-100  px-3 py-1 text-bg-light rounded-top d-flex align-items-center">
          <img class="image-header-comment rounded-circle m-2" :src="typeComment?.product?.image"/>

          <h6 class="px-2 my-2">نظرات {{ typeComment?.product?.name }} <br><span
              class="len-comment"> {{ typeComment?.len }} نظر</span>
          </h6>

        </div>
        <div class="body-comment">
          <ul class="p-2">
            <li :dir="!item?.meUser ?'rtl':'ltr'" class="py-2 ltr" v-for="(item,index) in typeComment?.comment"
                :key="index">
              <div class=" d-flex align-items-end  ">
                <img class="rounded-circle" :src="item?.profile || '~/public/images/noProfile.jpg'"
                     :alt="item?.profile">
                <div class="comment-body-text  p-2 mx-2 " :class="!item?.meUser ?'border-rtl':'border-ltr'">
                  <h6>{{ item?.user || 'بی نام' }}</h6>
                  <span>{{ item?.message }}</span>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="">ali</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-header-comment {
  width: 40px;
  height: 40px;
}

.comment-header h6 {
  font-weight: bold;
}

.len-comment {
  font-weight: lighter;
  font-size: 14px;
  color: #656565;
}

.body-comment {
  background: url('https://www.ecuandkey.com/images/chat-bg.svg');
  background-position: center;
  min-height: 30rem;
}

.body-comment img {
  height: 40px;
  width: 40px;
}

.body-comment li {
  list-style: none;
}

.comment-body-text {
  background: #e69c00;
}

.border-rtl {
  border-radius: 15px 15px 0 15px;
}

.border-ltr {
  border-radius: 15px 15px 15px 0;
}

.comment-body-text h6 {
  font-weight: bold;
  color: #0c0c0c;
}
</style>