import { Sidebar, Suggestions } from "../../Components";
import Post from "./Components/Post";

export default function Home() {
    return (
        <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] m-auto gap-4">
            <Sidebar />
            <Post />
            <Suggestions />
        </div>
    );
}
