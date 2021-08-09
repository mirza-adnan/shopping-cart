import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Shop from "./shop/Shop";

function Main() {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

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

    const updateCartCount = () => {
        const count = cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        setCartCount(count);
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
            if (item.quantity !== 0) {
                return item;
            }
        });
        setCartItems(newItems);
    };

    useEffect(() => {
        updateCartCount();
    }, [cartItems]);

    return (
        <Container>
            <BrowserRouter>
                <Header openCart={openCart} cartCount={cartCount} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/shop">
                        <Shop addToCart={addToCart} />
                    </Route>
                </Switch>
            </BrowserRouter>
            {showCart ? (
                <Cart
                    setShowCart={setShowCart}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementCartQuantity}
                    decrementQuantity={decrementCartQuantity}
                />
            ) : null}
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Main;
