export const optimizeUrl = (url, options = 'f_auto,q_auto,w_800') => {
    if (url.includes('/upload/')) {
        return url.replace('/upload/', `/upload/${options}/`)
    }
    return url
}
