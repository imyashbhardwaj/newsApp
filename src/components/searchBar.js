import "./searchBar.css"

function searchBar() {
    return (
        <div id="searchBar">
            <input type="text" placeholder="Search" />
            <button id="search">
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
}

export default searchBar;