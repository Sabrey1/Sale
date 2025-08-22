<template>
  <div class="full-page">
    <div class="card">
      <div class="icon-wrap">
        <!-- Success SVG -->
        <svg
          class="success-svg"
          viewBox="0 0 120 120"
          role="img"
          aria-label="Payment success"
        >
          <!-- Circle -->
          <circle class="success-circle" cx="60" cy="60" r="50" fill="none" stroke-width="8" />
          <!-- Check mark -->
          <path class="success-check" fill="none" stroke-width="8" d="M36 62 L54 78 L86 42" />
        </svg>
      </div>
      <h2>Payment Success</h2>
      <p class="sub">Your payment was processed successfully.</p>
      <p class="back" @click="goBack" style="color: blue;">Back to Home</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/') // navigate to home route
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
   
}

.full-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  background: #ffffff;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 28px 36px;
  background: #f8fbfd;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  text-align: center;
  color: #111827;
}

.icon-wrap {
  width: 96px;
  height: 96px;
}

.success-svg {
  width: 100%;
  height: 100%;
  stroke: #10b981; 
  transform: scale(0.9);
  animation: pop 300ms ease-out forwards;
}

.success-circle,
.success-check {
  stroke-linecap: round;
  stroke-linejoin: round;
}

.success-circle {
  stroke-dasharray: 314;
  stroke-dashoffset: 314;
  animation: draw 700ms ease-out forwards;
}

.success-check {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: draw 500ms 350ms ease-out forwards;
}

h2 {
  margin: 0;
  font-size: 22px;
}

.sub {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}

/* animations */
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes pop {
  to { transform: scale(1); }
}
</style>
