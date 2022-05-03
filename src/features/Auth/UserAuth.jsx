import { Outlet } from "react-router-dom";

export default function UserAuth() {
    return (
        <div className="grid grid-cols-2 min-h-screen w-11/12 m-auto">
            <div className="place-self-center">
                <img src="/Canary.png" alt="Canary" />
            </div>
            <div className="place-self-center w-9/12 m-auto">
                <Outlet />
            </div>
        </div>
    );
}
