import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../Utils";
import { UploadImage } from "../../../Utils";
import toast from "react-hot-toast";

export default function NewPost() {
    const [data, setData] = useState({ content: "", postImgUrl: "" });
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const contentRef = useRef(null);

    async function formSubmitHandler(e) {
        e.preventDefault();
        if (data.postImgUrl) {
            const toastId = toast.loading("Creating...");
            const response = await UploadImage({ file: data.postImgUrl });
            dispatch(
                newPost({
                    token,
                    postData: { ...data, postImgUrl: response.url, imageAlt: response.original_filename },
                })
            );
            toast.success("Post Created!", { id: toastId });
        } else {
            dispatch(newPost({ token, postData: data }));
        }
        contentRef.current.innerText = "";
        setData({ content: "", postImgUrl: "" });
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
                    onInput={(e) => setData((prev) => ({ ...prev, content: e.target.textContent }))}
                    className="outline-none empty:before:content-['Happening....'] py-4 mx-4 empty:before:text-slate-400 before:text-sm text-slate-900 dark:text-slate-100"
                />
                {data.postImgUrl ? (
                    <div className="relative mx-4">
                        <img
                            src={URL.createObjectURL(data.postImgUrl)}
                            alt={data.postImgUrl.name.split(".")[0]}
                            className="w-full max-h-72 m-auto rounded-md my-4"
                        />
                        <span
                            className="material-icons-outlined absolute top-1 left-1 cursor-pointer "
                            onClick={() => setData((prev) => ({ ...prev, postImgUrl: "" }))}
                        >
                            highlight_off
                        </span>
                    </div>
                ) : null}

                <div className="flex justify-between items-center mt-8">
                    <label className="w-6 h-6">
                        <input
                            type="file"
                            className="hidden"
                            onInput={(e) => setData((prev) => ({ ...prev, postImgUrl: e.target.files[0] }))}
                        />
                        <span className="material-icons-outlined text-slate-800 dark:text-slate-100 ">image</span>
                    </label>
                    <button
                        disabled={!data.content.trim() && !data.postImgUrl}
                        className="disabled:cursor-not-allowed disabled:opacity-40 bg-primary-color rounded-full font-medium text-sm px-5 py-1  text-slate-100"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
