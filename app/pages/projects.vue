<template>
    <div class="repositoryContainer flex flex-wrap gap-8 justify-center p-10">
        <div class="repositoryBox" v-for="(repo, index) in reposPublic" :key="index">
            <h2 class="text-2xl font-bold mb-2">{{ repo.name }}</h2>
            <p class="mb-4">{{ repo.description }}</p>
            <Button :href="repo.html_url" label="Visitar Projeto" type="square" customClass="customButton" />
        </div>
    </div>
</template>


<script setup lang="ts">
import collect from 'collect.js'

const { getRepos } = useGithub()

let reposPublic: any = await getRepos()

reposPublic = collect(reposPublic)
    .filter((repo: any) => repo.id !== 1057573306)
    .all()
</script>







<style lang="scss">
.repositoryContainer {
    .repositoryBox {
        background: linear-gradient(208deg, #180027, #2b1a71, #020027);
        padding: 20px;
        border-radius: 10px;
        width: 400px;
        box-shadow: 0px 0px 9px rgb(0 0 0 / 45%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        min-height: 170px;
        transition: all 0.5s ease;

        .customButton {
            background-color: #742ad7;
            box-shadow: inset 0px 2px 17px #270667;

            &:hover {
                background: #501bcf;
            }
        }

        &:hover {
            background: linear-gradient(208deg, #00427c, #2801c4, #030036);
            transform: scale(1.03);
        }
    }
}
</style>
