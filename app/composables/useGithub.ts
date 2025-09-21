import collect from 'collect.js'

export const useGithub = () => {
    const runtimeConfig = useRuntimeConfig()
    const GITHUB_TOKEN = runtimeConfig.public.GITHUB_TOKEN

    // Adicione esta verificação antes de criar os headers
    if (!GITHUB_TOKEN) {
        console.error('GitHub token não está definido.')
        return {
            getUser: () => Promise.resolve(null),
            getRepos: () => Promise.resolve(null),
            getLanguages: () => Promise.resolve(null),
        }
    }

    const headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
    }

    const getUser = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang`, { headers })
    }

    const getRepos = async () => {
        return await $fetch(`https://api.github.com/users/PirataZang/repos`, { headers })
    }

    const getLanguages = async () => {
        const repos: any = await $fetch(`https://api.github.com/users/PirataZang/repos`, { headers })
        return collect(repos)
            .map((repo: any) => repo.language)
            .unique()
            .all()
    }

    return { getUser, getRepos, getLanguages }
}
