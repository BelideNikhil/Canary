import Search from "../Search/Search";
import Suggestions from "../Suggestions/Suggestions";

export default function UserPersonal() {
    return (
        <div className="mt-3 hidden lg:block">
            <Search />
            <Suggestions />
        </div>
    );
}
