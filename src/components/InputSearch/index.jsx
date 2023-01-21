// Stylesd
import "./styles.css";

const InputSearch = ({ search, setSearch }) => {
    return (
        <div className="SearchContainer">
            <input
                className="InputSearch"
                type="text"
                placeholder="Search by name and category"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img
                className="SearchIcon"
                src={require("assets/icons/search.svg").default}
                alt="Search Icon"
                width={30}
                height={30}
            />
        </div>
    );
};

export default InputSearch;
