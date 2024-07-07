<template>
   <div class="gifLoading-parent">
   <p><div class="spinner-border  text-secondary m-3" role="status">
  <span class="visually-hidden">Loading...</span>
</div> در حال ارسال و دریافت اطلاعات 
</p>
   
   </div>
</template>
<style>
.gifLoading-parent {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gifLoading-parent p {
padding: 10px;
background-color: #ffbe33;
width: 30%;
height: 5rem;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
color: #222831;
}
</style>