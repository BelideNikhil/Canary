import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost, editPost } from "../../features/Post/Utils";
import { useClickOustide } from "../../Hooks/useClickOutside";
import { UploadImage } from "../../Utils";
import { UserAvatar } from "../index";
import toast from "react-hot-toast";

export default function EditModal({ setShowModal, post }) {
    const [content, setContent] = useState(post || { content: "", postImgUrl: "" });

    const contentRef = useRef(null);
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const { token, userDetails } = useSelector((state) => state.auth);

    function focusHandler() {
        contentRef.current && contentRef.current.focus();
    }

    async function formSubmitHandler(e) {
        e.preventDefault();
        if (content.content.trim() || content.postImgUrl) {
            if (post?._id) {
                if (typeof content.postImgUrl === "object") {
                    const toastId = toast.loading("Updating...");
                    const response = await UploadImage({ file: content.postImgUrl });
                    dispatch(
                        editPost({
                            token,
                            postData: {
                                ...content,
                                postImgUrl: response.url,
                                imageAlt: response.original_filename,
                            },
                        })
                    );
                    toast.success("Post Updated!", { id: toastId });
                } else {
                    dispatch(editPost({ token, postData: content }));
                }
            } else {
                const response = await UploadImage({ file: content.postImgUrl });
                dispatch(
                    newPost({
                        token,
                        postData: {
                            ...content,
                            postImgUrl: response.url,
                            imageAlt: response.original_filename,
                        },
                    })
                );
            }
        }
        setContent({ content: "", postImgUrl: "" });
        setShowModal(false);
    }

    useClickOustide(modalRef, setShowModal);

    useEffect(() => {
        contentRef.current.textContent = content.content;
    }, [content.content]);

    return (
        <div className="fixed inset-0 bg-modal-background z-10 flex w-full justify-center items-center">
            <div
                ref={modalRef}
                className=" pt-4 pb-2 px-3 border-y border-slate-500 rounded-md w-10/12 max-w-md bg-slate-100 dark:bg-slate-700"
                onClick={(e) => {
                    e.stopPropagation();
                    focusHandler();
                }}
            >
                <form onSubmit={formSubmitHandler}>
                    <UserAvatar username={userDetails.username} />
                    <div
                        ref={contentRef}
                        contentEditable
                        role="textbox"
                        placeholder=""
                        onInput={(e) => setContent((prev) => ({ ...prev, content: e.target.textContent }))}
                        className="outline-none empty:before:content-['Happening....'] empty:before:text-slate-400 before:text-sm py-4 text-slate-900 dark:text-slate-100"
                    />

                    {content?.postImgUrl ? (
                        <div className="relative ">
                            <img
                                src={
                                    content?.postImgUrl?.name
                                        ? URL.createObjectURL(content.postImgUrl)
                                        : content?.postImgUrl
                                }
                                alt={
                                    typeof content?.postImgUrl === "object"
                                        ? content.postImgUrl.name.split(".")[0]
                                        : content?.imageAlt
                                }
                                className="w-full max-h-80 my-4 rounded-md"
                            />
                            <span
                                className="material-icons-outlined absolute top-1 left-1 cursor-pointer"
                                onClick={() => setContent((prev) => ({ ...prev, postImgUrl: "" }))}
                            >
                                highlight_off
                            </span>
                        </div>
                    ) : null}

                    <div className="flex justify-between items-center">
                        <label className="w-6 h-6">
                            <input
                                type="file"
                                className="hidden"
                                onInput={(e) => setContent((prev) => ({ ...prev, postImgUrl: e.target.files[0] }))}
                            />
                            <span className="material-icons-outlined text-slate-800 dark:text-slate-100">image</span>
                        </label>
                        <div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="disabled:cursor-not-allowed mr-4 disabled:opacity-40 rounded-full font-medium text-xs my-2 text-slate-800 dark:text-slate-200"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={!content.content.trim() && !content.postImgUrl}
                                className="disabled:cursor-not-allowed disabled:opacity-40 bg-primary-color rounded-full px-5 py-0.5 my-2 text-slate-100"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
