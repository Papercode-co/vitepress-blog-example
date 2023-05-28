import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', {
    excerpt: true,
    transform(raw) {
        return raw
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                url,
                excerpt: truncateText(frontmatter.description, 100),
                date: formatDate(frontmatter.date),
                image: getImagePath(url)
            }))
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
}

function formatDate(raw) {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}

function getImagePath(url) {
    const filename = url.split('/').slice(-1)[0].split('.')[0]
    return filename + '.png'
}
