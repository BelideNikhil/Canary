import { Sidebar, Suggestions, BottomBar } from "../../Components";
import Post from "./Components/Post";

export default function Home() {
    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] w-full md:w-11/12 lg:w-[80%] gap-4 m-auto max-w-[1200px]">
            <Sidebar />
            <Post />
            <BottomBar />
            <Suggestions />
        </div>
    );
}
