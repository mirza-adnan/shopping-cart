import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";
import Shop from "./shop/Shop";

function Main() {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/shop">
                        <Shop />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Main;
