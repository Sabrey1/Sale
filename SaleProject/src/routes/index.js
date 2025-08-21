// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Sale from '@/Sale/Sale.vue'
import PickupPayment from '@/Sale/PickupPayment.vue'
import ScanQRCode from '@/Sale/ScanQRCode.vue'
import Success from '@/Sale/Success.vue'

 

const routes = [
  { path: '/', component: Sale },
  { path: '/payment', component: PickupPayment },
  { path: '/scan-qr', component: ScanQRCode },
  { path: '/success', component: Success },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isMobile = /mobile|android|iphone|ipad/.test(
    navigator.userAgent.toLowerCase()
  )

  console.log('Navigating to:', to.path)
  console.log('Platform:', isMobile ? '📱 Mobile' : '💻 Desktop')

  // Example: prevent desktop users from using Scan QR
  if (to.path === '/scan-qr' && !isMobile) {
    alert('Scan QR is only available on mobile')
    return next('/') // redirect back to Sale
  }

  next()
})

export default router
