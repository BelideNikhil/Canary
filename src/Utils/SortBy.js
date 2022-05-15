export function SortBy(posts, sortBy) {
    if (sortBy === "Oldest") {
        return [...posts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    if (sortBy === "Latest") {
        return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    if (sortBy === "Trending") {
        return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }
    return posts;
}
