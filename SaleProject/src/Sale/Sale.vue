<template>
  <div class="pos-container">
    <!-- Left Side (Orders) -->
    <div class="pos-left">
      <!-- Header -->
      <div class="header">
        <div class="header-left">
          <div class="header-icon">G</div>
          <div class="header-info">
            <h3>General</h3>
            <p>C2025-0001</p>
          </div>
        </div>
        <div class="header-actions">
          <button class="icon-btn">
            <i class="fas fa-search"></i>
          </button>
          <button class="icon-btn">
            <i class="fas fa-user-plus"></i>
          </button>
          <button class="icon-btn">
            <i class="fas fa-qrcode"></i>
          </button>
        </div>
      </div>

      <!-- Table Info -->
      <div class="table-info">
        <span class="table-number">Table#: </span>
        <span class="table-number">G5</span>
      </div>

      <!-- Time & User Info -->
      <div class="time-user-info">
        <div class="time-section">
          <i class="fas fa-clock"></i>
          <span class="time-info">NOV-2023 10:32:53 AM</span>
        </div>
        <div class="user-section">
          <i class="fas fa-user"></i>
          <span>User</span>
        </div>
      </div>

      <!-- Order Items -->
      <div class="order-items">
        <div class="order-item" v-for="item in orderItems" :key="item.id">
          <div class="item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="item-details">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-unit-price">{{ item.quantity }} x ${{ item.unitPrice.toFixed(2) }}</div>
            <div class="item-time">
                <span class="fas fa-clock" style="margin-right: 5px;"></span>
                <span>{{ item.time }}</span>

            </div>
          </div>
          <div class="item-right">
            <div class="item-total">${{ (item.quantity * item.unitPrice).toFixed(2) }}</div>
            <div class="quantity-control">
              <span class="qty-display">{{ item.quantity }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side (Summary + Payment) -->
    <div class="pos-right">
      <!-- Order Summary -->
      <div class="order-summary">
        <div class="summary-row">
          <span>Sub Total</span>
          <span>${{ subTotal.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>VAT (10%)</span>
          <span>${{ vat.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>Service Tax</span>
          <span>${{ sevTax.toFixed(2) }}</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
      </div>

      <!-- Payment Section -->
      <div class="payment-section">
 <router-link to="/payment" custom v-slot="{ navigate }">
  <button @click="navigate" class="payment-button">
    <div class="payment-label">Payment</div>
    <div class="payment-amount">${{ total.toFixed(2) }}</div>
    <div class="payment-details">
      Total Qty: {{ totalQuantity }} | {{ totalItems.toLocaleString() }} ៛
    </div>
  </button>
</router-link>

<div class="full-height-container">
  <button class="submit-btn" @click="submitOrder">Submit Order</button>
</div>
</div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


 

const orderItems = ref([
  { id: 1, name: 'Pomfret Steam Fresh Full', unitPrice: 14.5, quantity: 1, time: '10:32:53 AM', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Arancini-bites-hero-image-20583bc.jpg?quality=90&resize=708,643' },
  { id: 2, name: 'Pomfret Steam Fresh Half', unitPrice: 7.5, quantity: 1, time: '10:32:53 AM', image: 'https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' },
  { id: 3, name: 'Pomfret With Lemon Sauce Full', unitPrice: 14.9, quantity: 1, time: '10:31:21 AM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngrxUh-xvZjTxQr_j_MsyId9dxEZtaZPZvA&s' },
])

const subTotal = computed(() => orderItems.value.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0))
const vat = computed(() => subTotal.value * 0.1)
const sevTax = computed(() => subTotal.value * 0.1)
const total = computed(() => subTotal.value + vat.value + sevTax.value)
const totalQuantity = computed(() => orderItems.value.reduce((sum, i) => sum + i.quantity, 0))
const totalItems = computed(() => Math.round(total.value * 4100))

const submitOrder = () => alert(`Order submitted! Total: $${total.value.toFixed(2)}`)
</script>

<style scoped>
.pos-container {    
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw; /* full width */
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.pos-left { flex: 2; display: flex; flex-direction: column; }
.pos-right { flex: 1; display: flex; flex-direction: column; }

/* header, table-info, time-user, order-items remain the same */
.header { display: flex; justify-content: space-between; align-items: center; background: #2c3e50; color: #fff; padding: 15px 20px; }
.header-left { display: flex; gap: 15px; align-items: center; }
.header-icon { width: 32px; height: 32px; border-radius: 50%; background: #34495e; display: flex; justify-content: center; align-items: center; font-weight: bold; }
.header-info h3 { margin-bottom: 2px; font-size: 16px; }
.header-info p { font-size: 12px; opacity: 0.8; }
.header-actions { display: flex; gap: 10px; }
.icon-btn { width: 32px; height: 32px; border: 1px solid rgba(255,255,255,0.3); border-radius: 4px; display: flex; justify-content: center; align-items: center; cursor: pointer; }

.table-info { display: flex; justify-content: space-between; align-items: center; background: #ecf0f1; padding: 10px 20px; border-bottom: 1px solid #ddd; }
.table-number { font-weight: bold; color: #2c3e50; }

.time-user-info { display: flex; justify-content: space-between; align-items: center; padding: 5px 20px; background-color: red; color: #fff; }
.time-section, .user-section { display: flex; align-items: center; gap: 5px; }
.time-section i, .user-section i { color: #fff; }

.order-items { flex: 1; padding: 0 20px; overflow-y: auto; }
.order-item { display: flex; padding: 15px 0; border-bottom: 1px solid #ecf0f1; }
.item-image { width: 50px; height: 50px; border-radius: 8px; margin-right: 15px; overflow: hidden; background: #f8f9fa; }
.item-image img { width: 100%; height: 100%; object-fit: cover; }
.item-details { flex: 1; }
.item-name { font-weight: 600; color: #2c3e50; margin-bottom: 5px; }
.item-unit-price { font-size: 14px; color: #7f8c8d; margin-bottom: 5px; }
.item-time { font-size: 12px; color: #95a5a6; }
.item-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
.item-total { font-weight: bold; font-size: 16px; color: #2c3e50; }

.quantity-control { display: flex; align-items: center; border-radius: 20px; background: #f8f9fa; padding: 0 10px; width: 60px; justify-content: center; }
.qty-display { font-weight: 600; font-size: 16px; }

/* order summary and payment-section same */
.order-summary { background: #fff; padding: 20px; border-top: 1px solid #ecf0f1; }
.summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; color: #7f8c8d; }
.summary-row.total { color: #2c3e50; font-weight: bold; font-size: 16px; border-top: 1px solid #ecf0f1; margin-top: 10px; padding-top: 10px; }

.payment-button {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background: #27ae60;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%; /* or auto for content width */
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.payment-button:hover {
  background: #2ecc71; /* lighter green on hover */
}
.payment-section {
  position: fixed; /* makes bottom: 0 work */
  bottom: 0;       /* stick to bottom */
  left: 0;         /* align to left */
  width: 100%;     /* full width */
  display: grid;
  grid-template-columns: 1fr auto;  
  align-items: center;                                 
  color: #fff;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.2); /* optional shadow */
  z-index: 1000;   /* ensures it’s above other content */
}

.payment-left { display: flex; flex-direction: column; }
.payment-label { font-size: 14px; opacity: 0.9; }
.payment-amount { font-size: 24px; font-weight: bold; }
.payment-details { font-size: 12px; opacity: 0.8; margin-top: 2px; }
.submit-btn { background: #2ecc71; color: #fff; padding: 12px 24px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 14px; border: none; transition: 0.2s; }
.submit-btn:hover { background: #27ae60; }



/* Responsive */
@media (max-width: 767px) {
  .pos-container { flex-direction: column; }
  .pos-left, .pos-right { width: 100%; }
  .order-items { padding: 0 15px; }
  .order-summary { padding: 15px; }
  .payment-section { flex-direction: row; }
}
</style>
