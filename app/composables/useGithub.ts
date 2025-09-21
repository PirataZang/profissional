import collect from 'collect.js'
import 'dotenv/config'

const GITHUB_TOKEN = process.env.NUXT_GITHUB_TOKEN //Token de acesso da API do GitHub

export const useGithub = () => {
    const headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
    }

    const getUser = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang`, { headers })
    }

    const getRepos = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang/repos`, { headers })
    }

    const getLenguages = async () => {
        const repos: any = await $fetch(`https://api.github.com/users/PirataZang/repos`, { headers })
        return collect(repos)
            .map((repo: any) => repo.language)
            .unique()
            .all()
    }

    return { getUser, getRepos, getLenguages }
}
