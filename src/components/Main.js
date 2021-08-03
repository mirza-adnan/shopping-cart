import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";

function Main() {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
}

export default Main;
