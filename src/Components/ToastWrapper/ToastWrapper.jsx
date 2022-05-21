import { Toaster } from "react-hot-toast";
export default function ToastWrapper() {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                success: {
                    duration: 2000,
                    style: {
                        background: "rgb(100 116 139)",
                        color: "rgb(248 250 252)",
                    },
                },
                error: {
                    duration: 2000,
                },
                loading: {
                    duration: 2000,
                    style: {
                        background: "rgb(100 116 139)",
                        color: "rgb(248 250 252)",
                    },
                },
            }}
        />
    );
}
