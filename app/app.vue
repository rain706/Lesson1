<!-- app.vue -->
<template>
  <div class="flex flex-col min-h-screen bg-orange-50">
    <header class="bg-white text-primary-dark shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 md:flex-row md:justify-between sm:gap-0">
        <div class="logo py-3">
          <img src="/logo.svg" alt="logo" class="w-auto h-12" />
        </div>
        <div class="menubar">
          <nav class="flex gap-6 text-sm font-medium">
            <a href="#" class="hover:text-secondary transition-colors">回到首頁</a>
            <a href="#" class="hover:text-secondary transition-colors">關於我們</a>
            <a href="#" class="hover:text-secondary transition-colors">服務內容</a>
            <a href="#" class="hover:text-secondary transition-colors">聯絡客服</a>
          </nav>
        </div>
        <div class="iconbar"></div>
      </div>
    </header>

    <main class="flex-1 max-w-6xl mx-auto px-4 py-10 space-y-14">
      <section>
        <h2 class="text-2xl font-bold text-primary mb-6">熱門商品</h2>

        <!--
          行動優先：
          - 手機 (預設)：1欄
          - sm (640px)：2欄
          - lg (1024px)：3欄
        -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="card in cards" :key="card.title" class="bg-white rounded-xl shadow p-6 border border-gray-100">
            <div class="text-4xl mb-3"><img class="mx-auto" :src="card.pic" /></div>
            <h3 class="text-lg font-semibold text-primary mb-2">{{ card.title }}</h3>
            <p class="text-gray-500 text-sm">{{ card.desc }}</p>
            <button class="btn-primary mt-4 text-sm">了解更多</button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white text-center py-6 text-sm mt-10">© 2025 MyBrand. All rights reserved.</footer>
  </div>
</template>

<script setup>
const cards = [
  { pic: "https://picsum.photos/200", title: "菜包", desc: "主力商品，新鮮蘿蔔拌炒過香蔥豬肉蝦米，白胡椒香味濃郁。" },
  { pic: "https://picsum.photos/200", title: "肉粽", desc: "北部粽，蒸熟拌炒過的糯米包裹豬肉塊與蘿蔔乾香菇" },
  { pic: "https://picsum.photos/200", title: "草仔粿", desc: "新鮮蘿蔔醃製的蘿蔔乾拌炒蝦米豬肉與香菇" },
  { pic: "https://picsum.photos/200", title: "紅龜粿", desc: "純素，包裹砂糖熬製的紅豆泥餡料，讓你回味再三" },
  { pic: "https://picsum.photos/200", title: "芋頭粿", desc: "拌炒過香菇蝦米豬肉與大甲芋頭塊，一顆就飽" },
  { pic: "https://picsum.photos/200", title: "碗粿", desc: "有蛋黃和豬肉蝦米，香味濃郁" },
];
</script>
