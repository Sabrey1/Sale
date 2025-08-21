<template>
  <div class="full-page">
    <div class="header">
      <h1>Payment</h1>
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

const payments = ref(['Case', 'ABA'])

const selectPayment = (payment) => {
  console.log('Selected payment:', payment)
}
</script>

<style>
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
  width: 100%;             /* full width */
  text-align: center;      /* center the title */
}

.header h1 {
  margin-bottom: 40px;
}

.payment-buttons {
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
</style>