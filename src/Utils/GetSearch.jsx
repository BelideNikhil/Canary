export function GetSearch(users, searchedText) {
    if (searchedText.trim() !== "") {
        return users?.filter((user) => {
            return (
                user.username.toUpperCase().includes(searchedText.trim().toUpperCase()) ||
                user.fullName.toUpperCase().includes(searchedText.trim().toUpperCase())
            );
        });
    }
}
