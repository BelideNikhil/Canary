import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../Utils";
import { ModalPost } from "./index";

export default function OptionsModal({ post }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {
        token,
        userDetails: { username },
    } = useSelector((state) => state.auth);

    return (
        <>
            <div className="border-2 border-slate-500 rounded-md bg-slate-100 dark:bg-slate-800 absolute top-8 right-0 z-10 bg-slate-100 p-2">
                {post.username === username ? (
                    <>
                        <button
                            className="flex items-center p-1 text-slate-700 dark:text-slate-200 text-sm font-medium	"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowModal(true);
                            }}
                        >
                            <span className="mr-2 material-icons-outlined">edit</span> Edit
                        </button>
                        <button
                            className="flex items-center p-1 text-slate-700 text-sm font-medium dark:text-slate-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deletePost({ post, token }));
                            }}
                        >
                            <span className=" mr-2 material-icons-outlined">delete</span> Delete
                        </button>
                    </>
                ) : (
                    <button
                        className="flex items-center p-1 text-sm font-medium dark:text-slate-200"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <span className="mr-2 material-icons-outlined ">person_add</span> Follow
                    </button>
                )}
            </div>
            {showModal ? <ModalPost setShowModal={setShowModal} post={post} /> : null}
        </>
    );
}
