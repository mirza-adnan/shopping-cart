import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Shop from "./shop/Shop";

function Main() {
    const [showCart, setShowCart] = useState(false);

    const openCart = () => {
        setShowCart(true);
    };

    return (
        <Container>
            <BrowserRouter>
                <Header openCart={openCart} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/shop">
                        <Shop />
                    </Route>
                </Switch>
            </BrowserRouter>
            {showCart ? <Cart setShowCart={setShowCart} /> : null}
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Main;
