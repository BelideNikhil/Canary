import { Sidebar, PageHeader, BottomBar, Suggestions } from "../../Components";

export default function NotFound() {
    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem]  w-full md:w-11/12 lg:w-[80%] gap-4 m-auto max-w-[1200px]">
            <Sidebar />
            <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
                <PageHeader pagename={"Not Found"} />
                <div className="flex justify-center">
                    <img src="/Assets/not-found.png" alt="not-found" className="w-full max-w-md" />
                </div>
                <div className="flex justify-center">
                    <button className="bg-primary-color rounded-full px-8 py-1.5 my-2 text-slate-100 font-medium">
                        Back to Home
                    </button>
                </div>
            </div>
            <BottomBar />
            <Suggestions />
        </div>
    );
}
