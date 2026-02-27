export const optimizeUrl = (
    url: string,
    options: string = 'f_auto,q_auto,w_800'
) => {
    if (url.includes('/upload/')) {
        return url.replace('/upload/', `/upload/${options}/`)
    }
    return url
}
