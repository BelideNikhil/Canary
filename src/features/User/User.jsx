import { Sidebar, UserPersonal, BottomBar } from "../../Components";
import UserProfile from "./Components/UserProfile";
export default function User() {
    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] w-full md:w-11/12 lg:w-[80%] gap-4 m-auto">
            <Sidebar />
            <UserProfile />
            <BottomBar />
            <UserPersonal />
        </div>
    );
}
