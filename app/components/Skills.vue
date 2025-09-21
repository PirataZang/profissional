<template>
    <div class="skillbox">
        <div v-for="(lenguage, index) in lenguagesList" :key="index" class="skills">
            <span class="text-md text-white">{{ lenguage }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const { getLenguages } = useGithub()
const lenguagesPublic: any = await getLenguages()

const lenguagesList = ['SCSS', 'NuxtJs', 'Node.js', 'PostgreSQL', 'Git', 'Rest API', 'Tailwind', 'PHP', 'NestJs', 'Laravel', 'MySQL', 'PocketBase', ...lenguagesPublic]
</script>

<style lang="scss">
.skillbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 650px;
    gap: 10px;

    .skills {
        background: linear-gradient(90deg, #210055, #10003b);
        padding: 10px 15px;
        border-radius: 10px;
    }
}
</style>
