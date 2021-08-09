import styled from "styled-components";
import CartItem from "./CartItem";
import { useRef } from "react";

function Cart({
    setShowCart,
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
}) {
    const backgroundRef = useRef();

    const closeCart = (e) => {
        if (e.target === backgroundRef.current) {
            setShowCart(false);
        }
    };

    return (
        <Background ref={backgroundRef} onClick={closeCart}>
            <CartContainer>
                {cartItems.length > 0 ? (
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
                    <h2>You cart is empty</h2>
                )}
            </CartContainer>
        </Background>
    );
}

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
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;

export default Cart;
