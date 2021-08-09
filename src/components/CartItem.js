import React from "react";
import styled from "styled-components";

function CartItem({
    item,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
}) {
    const { id, title, image, price, quantity } = item;
    const totalPrice = (price * quantity).toFixed(2);
    return (
        <ItemContainer>
            <Wrapper>
                <ItemImage>
                    <img src={image} alt={title} />
                </ItemImage>
                <p>{title}</p>
                <p>{totalPrice}$</p>
                <QuantitySelector>
                    <Button onClick={() => decrementQuantity(id)}>-</Button>
                    <Quantity>{quantity}</Quantity>
                    <Button onClick={() => incrementQuantity(id)}>+</Button>
                </QuantitySelector>
            </Wrapper>
            <Remove onClick={() => removeFromCart(id)}>
                <i className="fas fa-times"></i>
            </Remove>
        </ItemContainer>
    );
}

const ItemContainer = styled.div`
    width: 100%;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const ItemImage = styled.div`
    height: 130px;

    & img {
        height: 100%;
    }
`;

const QuantitySelector = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    max-width: 130px;
`;

const Button = styled.button`
    outline: none;
    border: none;
    padding: 0.5rem 0.8rem;
    background-color: var(--clr-primary);
    color: var(--clr-text);
    cursor: pointer;
`;

const Quantity = styled.div`
    padding: 0.5rem 0;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.07);
`;

const Remove = styled.div`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
`;

export default CartItem;
