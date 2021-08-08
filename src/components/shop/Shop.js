import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";

function Shop() {
    const [shopProducts, setShopProducts] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const url =
            "https://fakestoreapi.com/products/category/women's clothing?";
        const response = await fetch(url, { mode: "cors" });
        const data = await response.json();
        const products = data.map((product) => {
            return { ...product, quantity: 0 };
        });
        setShopProducts(products);
    };

    return (
        <ShopContainer>
            <Wrapper>
                {shopProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </Wrapper>
        </ShopContainer>
    );
}

const ShopContainer = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    min-height: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem;
    grid-gap: 4rem;
`;

export default Shop;
