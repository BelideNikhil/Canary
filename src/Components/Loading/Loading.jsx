import "./Loading.css";
export default function Loading() {
    return (
        <div className="lds-ring inline-block relative w-10	h-10">
            <div className="absolute rounded-full box-border w-6 h-6"></div>
            <div className="absolute rounded-full box-border w-6 h-6"></div>
            <div className="absolute rounded-full box-border w-6 h-6"></div>
            <div className="absolute rounded-full box-border w-6 h-6"></div>
        </div>
    );
}
