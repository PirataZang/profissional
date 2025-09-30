<template>
    <nav class="menu flex gap-6 items-center justify-center py-4 backdrop-blur shadow-lg w-full">
        <NuxtLink v-for="item in items" :key="item.to" :to="item.to" class="menuLink" active-class="active" exact>
            {{ item.label }}
        </NuxtLink>
    </nav>
</template>

<script setup>
const items = [
    { label: 'Início', to: '/' },
    { label: 'Templates', to: '/templates' },
    { label: 'Projetos', to: '/projects' },
]
</script>

<style lang="scss">
.menuLink {
    padding: 7px 10px;
    border-radius: 10px;
    color: gray;
    transition: all 0.3s ease;

    &:hover {
        background: #0b1651;
        color: white;
    }
}

.active {
    background: #122592;
    box-shadow: inset 0px 0px 10px rgb(0 2 77);
    color: white;
}
</style>
