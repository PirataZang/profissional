import collect from "collect.js"

export const useGithub = () => {
    const getUser = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang`)
    }

    const getRepos = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang/repos`)
    }

    const getLenguages = async () => {
        const repos:any = await $fetch(`https://api.github.com/users/PirataZang/repos`);
        return collect(repos).map((repo:any) => repo.language).unique().all()
    }

    return { getUser, getRepos, getLenguages }
}
