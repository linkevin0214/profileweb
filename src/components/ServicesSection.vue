<template>
    <div class="space-y-12"> <!-- 這個容器控制三個區塊上下間距 -->

  <!-- 我提供的服務 -->
<div class="rounded-2xl p-8 shadow-lg">
  <section>
    <h1 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">我提供的服務</h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">後端開發</h3>
        <p class="text-gray-700">具備 C#、Node.js、PHP 等經驗，擅長 API 設計</p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Android App 開發</h3>
        <p class="text-gray-700">從畫面 UI 設計到後端資料庫串接，完整提供 Android App 方案</p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">系統整合與 API 串接</h3>
        <p class="text-gray-700">整合 POS、硬體、金流、第三方 API ，讓系統資料無縫整合</p>
      </div>
    </div>
  </section>
</div>
<div class="rounded-2xl p-8 shadow-lg">
    <!-- 我曾串接的第三方服務 -->
<section>
    <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-8">我曾串接的第三方服務</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/linelogo.png" alt="LINE Pay" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">LINE Pay</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/jkologo.png" alt="街口 Pay" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">街口 Pay</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/pxpaylogo.png" alt="全支付" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">全支付</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/twpaylogo.png" alt="台灣 Pay" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">台灣 Pay</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/creditlogo.png" alt="聯合信用卡" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">聯合信用卡</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/ubereatlogo.png" alt="UberEat" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">UberEat</p>
      </div>
    </div>
  </section>
</div>

  <div class="rounded-2xl p-8 shadow-lg">
 <!-- 我曾開發過的硬體 -->
  <section>
    <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-8">我曾開發過的硬體</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/10POS.png" alt="10 吋 POS機" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">10 吋 POS機</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/15POS.png" alt="15 吋 POS機" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">15 吋 POS機</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/Stock.png" alt="手持式盤點機" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">手持式盤點機</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/Thermal.png" alt="熱感出單機" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">熱感出單機</p>
      </div>
      <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <img src="/logos/Label.png" alt="條碼機" class="h-10 mb-2" />
        <p class="text-sm text-gray-700">條碼機</p>
      </div>
    </div>
  </section>
  </div>

 </div>
</template>