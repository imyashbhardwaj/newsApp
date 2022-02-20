import "./sortFilter.css";

function sortFilter() {
    return (
        <>
            {sortModal()}
            <div id="sortFilter">
                <button id="sort" data-toggle="modal" data-target="#sortModal">
                    Sort <i className="fa fa-sort"></i>
                </button>
                <div id="filter">
                    Filter <i className="fa fa-filter"></i>
                </div>
            </div>
        </>
    );
}

function sortModal() {
    return (
        <div
            className="modal fade"
            id="sortModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">
                            Sort By
                        </h6>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button id="getRecentbtn">Most Recent</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sortFilter;
