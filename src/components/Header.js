import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cart from "./assets/img/shopping-cart.png";

function Header({ openCart }) {
    return (
        <HeaderContainer>
            <h1>StyleU</h1>
            <Nav>
                <UL>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <CartButton onClick={openCart}>
                            <img src={cart} alt="" />
                            <CartCount>1</CartCount>
                        </CartButton>
                    </li>
                </UL>
            </Nav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    font-size: 1.3rem;

    & h1 {
        color: var(--clr-accent);
    }
`;

const Nav = styled.nav`
    margin-right: 3rem;
`;

const UL = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & a {
        color: var(--clr-text);
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    & a:hover {
        color: var(--clr-accent);
    }
`;

const CartButton = styled.button`
    outline: none;
    border: none;
    border-radius: 50px;
    padding: 0.7rem;
    cursor: pointer;
    position: relative;

    & img {
        width: 25px;
    }
`;

const CartCount = styled.div`
    position: absolute;
    left: -5px;
    bottom: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: var(--clr-text);
    background-color: var(--clr-accent);
    text-align: center;
    border-radius: 50px;
`;

export default Header;
