import { Sidebar, Suggestions } from "../../Components";
import UserProfile from "./Components/UserProfile";
export default function User() {
    return (
        <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] gap-4 m-auto">
            <Sidebar />
            <UserProfile />
            <Suggestions />
        </div>
    );
}
