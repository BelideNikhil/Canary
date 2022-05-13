import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost, editPost } from "../../features/Post/Utils";
import { useClickOustide } from "../../Hooks/useClickOutside";

export default function EditModal({ setShowModal, post }) {
    const [content, setContent] = useState(post?.content || "");
    const contentRef = useRef(null);
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    function focusHandler() {
        contentRef.current && contentRef.current.focus();
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        if (content.trim()) {
            if (!post) {
                dispatch(newPost({ token, postData: { content } }));
            } else {
                dispatch(editPost({ token, post, postData: { content } }));
            }
        }
        setContent("");
        setShowModal(false);
    }

    useClickOustide(modalRef, setShowModal);

    useEffect(() => {
        contentRef.current.textContent = content;
    }, [content]);

    return (
        <div className="fixed inset-0 bg-modal-background z-10 flex w-full justify-center items-center">
            <div
                ref={modalRef}
                className=" pt-4 pb-2 px-3 border-y border-slate-500 rounded-md w-1/3 bg-slate-100 dark:bg-slate-700"
                onClick={focusHandler}
            >
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
                            onClick={() => setShowModal(false)}
                            className="disabled:cursor-not-allowed mr-4 disabled:opacity-40 rounded-full font-medium text-xs my-2 text-slate-800 dark:text-slate-200"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={!content.trim()}
                            className="disabled:cursor-not-allowed disabled:opacity-40 bg-primary-color rounded-full px-5 py-0.5 my-2 text-slate-100"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
