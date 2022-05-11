import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../Utils";

export default function NewPost() {
    const [content, setContent] = useState("");
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const contentRef = useRef(null);

    function formSubmitHandler(e) {
        e.preventDefault();
        if (content) {
            dispatch(newPost({ token, postData: { content } }));
            setContent("");
            contentRef.current.innerText = "";
        }
    }
    function focusHandler() {
        contentRef.current && contentRef.current.focus();
    }
    return (
        <div className="p-2 border-y border-slate-500 w-full bg-slate-100 dark:bg-slate-800" onClick={focusHandler}>
            <form onSubmit={formSubmitHandler}>
                <div
                    ref={contentRef}
                    contentEditable
                    role="textbox"
                    placeholder=""
                    onInput={(e) => setContent(e.currentTarget.textContent)}
                    className="outline-none empty:before:content-['Happening....'] empty:before:text-slate-400 before:text-sm text-slate-900 dark:text-slate-100"
                />
                <div className="flex justify-end">
                    <button
                        disabled={!content.trim()}
                        className="disabled:cursor-not-allowed disabled:opacity-40 bg-primary-color rounded-full px-4 py-1 my-2 text-slate-100"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
