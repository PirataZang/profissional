import collect from 'collect.js'

export const useGithub = () => {
    const config = useRuntimeConfig()

    const headers: any = config.githubToken ? { Authorization: `token ${config.githubToken}` } : {}

    const getUser = () => $fetch('https://api.github.com/users/PirataZang', { headers })

    const getRepos = () => $fetch('https://api.github.com/users/PirataZang/repos', { headers })

    const getLanguages = async () => {
        const repos: any = await $fetch('https://api.github.com/users/PirataZang/repos', { headers })
        return collect(repos)
            .map((r: any) => r.language)
            .unique()
            .all()
    }

    return { getUser, getRepos, getLanguages }
}
