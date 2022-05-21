import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOustide } from "../../../Hooks/useClickOutside";
import { setSelectedFilter } from "../postSlice";

export default function FilterBar() {
    const [showFilterModal, setFilterModal] = useState(false);
    const filterRef = useRef(null);
    const dispatch = useDispatch();
    const { selectedFilter } = useSelector((state) => state.post);

    useClickOustide(filterRef, setFilterModal);

    return (
        <div className="border-y border-slate-200 dark:border-slate-700	">
            <div className="flex justify-between items-center p-2 ">
                <div className="text-slate-800 dark:text-slate-100 font-medium ">{selectedFilter}</div>
                <div className="relative" ref={filterRef}>
                    <button
                        className={`text-slate-800 dark:text-slate-100 `}
                        onClick={() => setFilterModal((prev) => !prev)}
                    >
                        <span className="material-icons-outlined">tune</span>
                    </button>
                    {showFilterModal ? (
                        <div
                            className="border-2 border-slate-500 rounded-md bg-slate-100 dark:bg-slate-800 absolute top-8 right-0 z-8 bg-slate-100 p-1"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <button
                                style={{ color: selectedFilter === "Trending" ? "#1d9bf0" : "" }}
                                className={`flex items-center py-1 pl-1 pr-4 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-900 rounded-full w-full `}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(setSelectedFilter("Trending"));
                                    setFilterModal(false);
                                }}
                            >
                                <span className="mx-2 material-icons-outlined">trending_up</span> Trending
                            </button>
                            <button
                                style={{ color: selectedFilter === "Latest" ? "#1d9bf0" : "" }}
                                className="flex items-center py-1 pl-1 pr-4 text-slate-700 text-sm font-medium dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-full w-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(setSelectedFilter("Latest"));
                                    setFilterModal(false);
                                }}
                            >
                                <span className=" mx-2 material-icons-outlined">arrow_upward</span>Latest
                            </button>
                            <button
                                style={{ color: selectedFilter === "Oldest" ? "#1d9bf0" : "" }}
                                className="flex items-center py-1 pl-1 pr-4 text-slate-700 dark:text-slate-200 text-sm font-medium 	hover:bg-slate-200 dark:hover:bg-slate-900 rounded-full  w-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(setSelectedFilter("Oldest"));
                                    setFilterModal(false);
                                }}
                            >
                                <span className="mx-2 material-icons-outlined">arrow_downward</span>Oldest
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
