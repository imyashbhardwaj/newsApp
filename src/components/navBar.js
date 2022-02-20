import "./navBar.css";
function navBar() {
    return (
        <div className="topnav">
            <h6 id="Profile">
                <img id="profileImage" src="/avatar.png" />
                Hi User
                <div id="Welcome">Welcome</div>
            </h6>
        </div>
    );
}

export default navBar;
