<template>
  <nav class="menu flex gap-6 items-center justify-center py-4 backdrop-blur shadow-lg w-full">
    <NuxtLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="menu-link px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-950 hover:text-white transition"
      active-class="bg-blue-950 text-white"
      exact
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const items = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/test' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Currículo', to: '/curriculo' }
]
</script>