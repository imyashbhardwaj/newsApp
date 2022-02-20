import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import viewFeed from "./viewFeed";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<Register />} />
                    <Route path="home" element={<Home />} /> */}
                    <Route path="/" element={viewFeed()} />
                </Routes>
            </div>
        );
    }
}

export default App;
