import styled from "styled-components";
import CartItem from "./CartItem";
import { useRef } from "react";

function Cart({
    showCart,
    setShowCart,
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    emptyCart,
}) {
    const backgroundRef = useRef();

    const closeCart = (e) => {
        if (e.target === backgroundRef.current) {
            setShowCart(false);
        }
    };

    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <Background ref={backgroundRef} onClick={closeCart} showCart={showCart}>
            <CartContainer showCart={showCart}>
                {cartItems.length ? (
                    <Wrapper>
                        <h2>Total: {totalPrice.toFixed(2)}$</h2>
                        <Buttons>
                            <Button onClick={emptyCart}>Checkout</Button>
                            <Button onClick={emptyCart}>Clear Cart</Button>
                        </Buttons>
                    </Wrapper>
                ) : null}

                {cartItems.length ? (
                    cartItems.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeFromCart={removeFromCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                            />
                        );
                    })
                ) : (
                    <h2>Your cart is empty</h2>
                )}
            </CartContainer>
        </Background>
    );
}

const Background = styled.div`
    position: fixed;
    width: ${({ showCart }) => (showCart ? "100%" : "0")};
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    transition: all 0.5s ease-out;
`;

const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 500px;
    height: 100%;
    background-color: white;
    color: var(--clr-primary);
    overflow: auto;
    padding: 2rem;
    text-align: center;
    transition: transform 0.5s ease-out;
    transform: ${({ showCart }) =>
        showCart ? "translateX(0)" : "translateX(100%)"};
`;

const Wrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    padding: 0.5rem 0;
`;

const Button = styled.button`
    outline: none;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
    border: 1px solid rgba(32, 33, 36, 0.28);
    box-shadow: 0 1px 3px rgb(32 33 36 / 28%);
    background-color: var(--clr-text);
    color: var(--clr-primary);
    transition: all 0.2s ease;

    &:hover {
        background-color: var(--clr-primary);
        color: var(--clr-text);
    }
`;

export default Cart;
