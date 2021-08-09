import React from "react";
import styled from "styled-components";

function Product({ product, increment, decrement, handleAdd }) {
    const { id, title, price, image, quantity } = product;

    return (
        <ProductContainer>
            <ImageContainer>
                <img src={image} alt="" />
            </ImageContainer>
            <Info>
                <h3>{title}</h3>
                <h3>${price}</h3>
            </Info>
            <AmountSelector>
                <Button onClick={() => decrement(id)}>-</Button>
                <Amount>{quantity}</Amount>
                <Button onClick={() => increment(id)}>+</Button>
            </AmountSelector>
            <AddButton onClick={() => handleAdd(product)}>
                Add to cart
            </AddButton>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    width: 100%;
    background-color: white;
    color: var(--clr-primary);
    padding: 2rem 1.5rem;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
`;

const ImageContainer = styled.div`
    width: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
    }
`;

const Info = styled.div`
    padding: 1rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
`;

const AmountSelector = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: 500;
    justify-content: center;
`;

const Button = styled.button`
    outline: none;
    border: none;
    background-color: var(--clr-accent);
    padding: 0.5rem 0;
    flex: 1;
    font-size: 1.3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    cursor: pointer;
`;

const Amount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--clr-primary);
`;

const AddButton = styled.div`
    outline: none;
    border: none;
    width: 100%;
    padding: 0.7rem 0;
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1.1rem;
    background-color: var(--clr-primary);
    color: var(--clr-text);
    cursor: pointer;
`;

export default Product;
