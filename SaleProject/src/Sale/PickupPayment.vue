<template>
  <div class="full-page">
    <div class="header">
      <button @click="goBack" class="back-btn">
      <i class="fas fa-arrow-left" style="color: white;margin-left: 15px;"></i>
    </button>
      <h2>Payment</h2>
    </div>

    <div class="payment-buttons">
      <button
        v-for="(payment, index) in payments"
        :key="index"
        class="payment-btn"
        @click="selectPayment(payment)"
      >
        {{ payment }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const payments = ref(['Cash', 'ABA'])

const router = useRouter()

const selectPayment = (payment) => {
  console.log('Selected payment:', payment)

  if (payment === 'ABA') {
    router.push('/scan-qr') 
  } else {
    console.log('Cash selected')
  }
}

const goBack = () => {
  router.back() // same as router.go(-1)
}
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
  justify-content: flex-start; /* align to top */
  align-items: center;          /* center horizontally */
  height: 100vh;                /* full viewport height */
  width: 100vw;                 /* full viewport width */
  background-color: #f0f2f5;
  
  box-sizing: border-box;       /* include padding in width calculation */
}

.header {
  width: 100%;
  text-align: center;
  background-color: #032ce2;
  color: white;
  display: flex;
}

.header h2 {
  margin: 10px;
}

.payment-buttons {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  width: 100%;             /* full width */
  justify-content: center; /* center the buttons */
}

.payment-btn {
  padding: 20px 40px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background-color: #516af8;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.payment-btn:hover {
  background-color: #3f51d5;
}

.back-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}
</style>