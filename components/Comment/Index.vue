<script setup>
import {useToast} from "vue-toastification";

const toast = useToast();
const props = defineProps(['productDetail'])

const typeComment = ref({
  product: {
    name: props?.productDetail?.name,
    image: props?.productDetail?.image
  },
  comment: [
    {
      message: 'واقعا عالیه بسیار با کیفیت',
      user: 'ملینا',
      data: '01,12,01 13:00',
      meUser: false,
      profile: '/public/images/profile.jpg',
    }, {
      message: 'حال نکردم با این محصول',
      user: 'علی',
      data: '01,12,01 13:00',
      meUser: false,
      profile: '/public/images/profile.jpg',
    }, {
      message: 'واقعا عالیه بسیار با کیفیت چه ارسال عالیه ',
      user: 'مهرداد',
      data: '01,12,01 13:00',
      meUser: false,
      profile: '/public/images/pro2.jpg',
    }, {
      message: 'واقعا ناراضی هستم خوشم نیامد ',
      user: 'گلناز',
      data: '01,12,01 13:00',
      meUser: false,
      profile: '/public/images/pro3.jpg  ',
    },

  ],
  len: 4
})
const {authUser} = useAuth();
let today = new Date().toLocaleString('fa-IR');

const nameUser = ref(null)
const topHeader = ref(0)
if (authUser.value) {
  nameUser.value = authUser._object.$sauth_user.name
}
const inputValue = ref('')

function select(emoji) {
    inputValue.value += emoji
}

function sendComment() {
  if (inputValue.value === null) {
    toast.error(" فیلد نظرات را خالی وارد نکن!");
  } else {
    let newComment = {
      message: inputValue.value,
      user: nameUser || 'کابر مهمان',
      data: today,
      meUser: true,
      profile: '/_nuxt/public/images/noProfile.jpg',
    }
    typeComment.value.comment.push(newComment)
  }
  inputValue.value = '';
  toast.info("البته که صفحه نظرات فقط به صورت تستی کار میکند و توسعه دهنده های اسلیپر در حال تلاش برای اتمام آن هستند");

}
</script>

<template>
  <section>
    <div class="container my-2">

      <div class="col-12 border border-warning-subtle border-3 rounded  d-flex flex-column overflow-hidden">
        <div
            class="comment-header w-100  px-3 py-1 text-bg-light rounded-top border-bottom border-warning-subtl d-flex align-items-center">
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
                  <h6>{{ item?.user || 'کابر مهمان' }}</h6>
                  <span>{{ item?.message }}</span>
                  <br>

                  <i>{{ item?.data }}</i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="input-group">


          <span class="input-group-text">
             <NuxtEmoji @on-select="select">
              <template v-slot:button>
              <i class="bi-emoji-smile-fill"></i>
             </template>
        </NuxtEmoji>
          </span>
          <input type="text" class="form-control" v-model="inputValue" placeholder="" aria-label="Recipient's username"
                 aria-describedby="button-addon2">
          <button @click="sendComment" class="btn btn-outline-secondary" type="button" id="button-addon2"><i
              class="bi-send-arrow-down"></i>
          </button>
        </div>
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
  color: #e69c00;
}

.body-comment {
  background: url('https://www.ecuandkey.com/images/chat-bg.svg');
  background-position: center;
  max-height: 25rem;
  overflow: auto;

}

.body-comment img {
  height: 40px;
  width: 40px;
}

.body-comment li {
  list-style: none;
}

.btn {
  border-radius: 0 !important;
}

.comment-body-text {
  background: #222831;
  direction: rtl;
  color: #e69c00;
}

.comment-body-text i {
  float: left;
  color: #e69c00;
  font-style: inherit;
  font-size: 10px;
  text-align: center;
}

.border-rtl {
  border-radius: 15px 15px 0 15px;
}

.border-ltr {
  border-radius: 15px 15px 15px 0;
}

.comment-body-text h6 {
  font-weight: bold;
  color: #e69c00;
}
</style>