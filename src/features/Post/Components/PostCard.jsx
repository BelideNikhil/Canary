import { useState, useRef } from "react";
import OptionsModal from "./OptionsModal";
import { useClickOustide } from "../../../Hooks/useClickOutside";

export default function PostCard({ post }) {
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);

    useClickOustide(optionsRef, setShowOptions);
    return (
        <div
            className="border-b border-slate-400 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
            ref={optionsRef}
        >
            <div className="flex  justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full w-9 h-9 bg-slate-500 text-slate-50 font-medium flex justify-center items-center">
                        {post.username[0].toUpperCase()}
                    </div>
                    <div className="text-slate-900 dark:text-slate-100 text-sm font-medium ml-2">@{post.username}</div>
                </div>
                <div className="relative">
                    <button
                        className="w-6 h-full text-slate-800 dark:text-slate-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowOptions((prev) => !prev);
                        }}
                    >
                        <span className="material-icons-outlined pointer-events-none">more_vert</span>
                    </button>
                    {showOptions ? <OptionsModal post={post} /> : null}
                </div>
            </div>
            <div className="py-2 text-slate-900 dark:text-slate-100 break-all">{post.content}</div>
            <div className="pt-3">
                <button className="mx-3 w-6 h-6 text-slate-600 dark:text-slate-300">
                    <span className="material-icons-outlined">chat_bubble_outline</span>
                </button>
                <button className="mx-3 w-6 h-6 text-slate-600 dark:text-slate-300">
                    <span className="material-icons-outlined">thumb_up</span>
                </button>
                <button className="mx-3 w-6 h-6 text-slate-600 dark:text-slate-300">
                    <span className="material-icons-outlined">bookmark_border</span>
                </button>
            </div>
        </div>
    );
}
