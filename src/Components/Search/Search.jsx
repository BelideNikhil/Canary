import { debounce, GetSearch } from "../../Utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import { setSearchText } from "../../features/User/userSlice";

export default function Search() {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const { searchText, users } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchText) {
            setFilteredUsers(GetSearch(users, searchText));
        }
    }, [searchText, users]);

    return (
        <div className="relative">
            <div className=" rounded-full overflow-hidden border-2 border-slate-500 focus-within:border-primary-color">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="w-full px-3 py-1  focus:outline-none text-sm bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder-shown:text-sm"
                        placeholder="Search User..."
                        type="search"
                        onChange={debounce((e) => dispatch(setSearchText(e.target.value.trim())))}
                        onFocus={debounce((e) => dispatch(setSearchText(e.target.value.trim())))}
                    />
                </form>
            </div>
            {searchText ? (
                <div className="absolute top-10 border-2 left-1/2 -translate-x-1/2 border-slate-700 dark:border-slate-300 bg-slate-200 dark:bg-slate-700 rounded-md w-80 w-11/12 m-auto max-w-xl shadow-2xl p-2">
                    {filteredUsers?.length > 0 ? (
                        filteredUsers.map((user) => {
                            return (
                                <div key={user._id} className="my-2">
                                    <UserAvatar username={user.username} />
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-slate-800 dark:text-slate-300 text-md">No users found...</div>
                    )}
                </div>
            ) : null}
        </div>
    );
}
