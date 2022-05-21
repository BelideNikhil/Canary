import toast from "react-hot-toast";

export function SharePost(postId) {
    navigator.clipboard.writeText(`https://the-canary.netlify.app/post/${postId}`);
    toast.success("Link copied to Clipboard");
}
