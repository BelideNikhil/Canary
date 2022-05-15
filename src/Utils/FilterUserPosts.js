export function FilterUserPosts(posts, currentUser) {
    return posts?.filter((post) =>
        currentUser?.following?.find((user) => {
            return user.username === post.username || currentUser.username === post.username;
        })
    );
}
