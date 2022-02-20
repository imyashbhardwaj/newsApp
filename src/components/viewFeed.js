import navBar from "./navBar";
import searchBar from "./searchBar";
import SortFilter from "./sortFilter";
import Articles from "./Articles";
import { useState } from "react";

function viewFeed() {
    
    return (
        <>
            {navBar()}
            {searchBar()}
            <SortFilter />
            <br />
            {/* {Articles()} */}
            <Articles />
        </>
    );
}

export default viewFeed;
