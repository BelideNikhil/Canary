import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../../Components";

export default function UserAuth() {
    const {
        auth: { isLoading },
    } = useSelector((state) => state);
    return (
        <div className="grid grid-cols-2 min-h-screen w-11/12 m-auto">
            <div className="place-self-center">
                <img src="/Canary.png" alt="Canary" />
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <div className="place-self-center w-9/12 m-auto">
                    <Outlet />
                </div>
            )}
        </div>
    );
}
