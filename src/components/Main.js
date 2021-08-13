import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";

function Main() {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartCount = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const openCart = () => {
        setShowCart(true);
    };

    const addToCart = (obj) => {
        const newItem = { ...obj };
        const isDuplicate = cartItems.some((item) => item.id === newItem.id);
        if (newItem.quantity > 0 && !isDuplicate) {
            setCartItems(cartItems.concat(newItem));
        }
    };

    const removeFromCart = (id) => {
        const newItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newItems);
    };

    const incrementCartQuantity = (id) => {
        const newItems = cartItems.map((item) => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });
        setCartItems(newItems);
    };

    const decrementCartQuantity = (id) => {
        const newItems = cartItems.filter((item) => {
            if (item.id === id && item.quantity > 0) {
                item.quantity -= 1;
            }
            return item.quantity !== 0;
        });
        setCartItems(newItems);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <Container>
            <BrowserRouter>
                <Header openCart={openCart} cartCount={cartCount} />
                <Switch>
                    <Route exact path="/shopping-cart">
                        <Home />
                    </Route>
                    <Route exact path="/shopping-cart/shop">
                        <Shop addToCart={addToCart} />
                    </Route>
                    <Route exact path="/shopping-cart/contact">
                        <Contact />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Cart
                showCart={showCart}
                setShowCart={setShowCart}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                incrementQuantity={incrementCartQuantity}
                decrementQuantity={decrementCartQuantity}
                emptyCart={emptyCart}
            />
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Main;
