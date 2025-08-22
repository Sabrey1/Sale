<template>
  <div class="full-page">
    <div class="header">
      <button @click="goBack" class="back-btn">
      <i class="fas fa-arrow-left" style="color: black;margin-left: 15px;"></i>
    </button>
    </div>

    <div>
        <p >
          <span style="font-weight: 600;">ABA</span>
          <span style="color: red;font-weight: 600;">'</span>
           <span style="margin-left: 6px;font-weight: 500;">QR</span>
          </p>
        <p style="font-weight: 600;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nemo. </p>
       
    </div>

    <div class="qr-code">
      <div class="image-scan" v-for="item in orderItems" :key="item.id">
        <img :src="item.image"class="item-image">
      </div>
    </div>

    <div>
       <p style="font-weight: 500;">Please scan QR code</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back() // same as router.go(-1)
}

const orderItems = ref([
{ image: '/image/image.png' },

])


</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.full-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  height: 100vh;                
  width: 100vw;               
  background-color: #f0f2f5;
  box-sizing: border-box;       
}

.header {
margin-top: 20px;
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
}
.back-btn {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}

.qr-code {
  margin-top: 30px;

}
</style>