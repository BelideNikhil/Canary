import "./Loading.css";
export default function Loading() {
    return (
        <div className="lds-ring inline-block relative w-20	h-20 ">
            <div className="absolute rounded-full box-border w-16 h-16"></div>
            <div className="absolute rounded-full box-border w-16 h-16"></div>
            <div className="absolute rounded-full box-border w-16 h-16"></div>
            <div className="absolute rounded-full box-border w-16 h-16"></div>
        </div>
    );
}
