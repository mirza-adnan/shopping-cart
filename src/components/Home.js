import React from "react";
import styled from "styled-components";
import shopping from "./assets/img/shopping.svg";
import Wave from "./Wave";

function Home() {
    return (
        <HomeContainer>
            <Wrapper>
                <HomeText>
                    <h1>
                        Bringing you <span>tomorrows</span> fashion{" "}
                        <span>today</span>
                    </h1>
                </HomeText>
                <HomeImage>
                    <img src={shopping} alt="" />
                </HomeImage>
            </Wrapper>
            <Wave />
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    flex: 1;
    position: relative;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 2rem 3rem;

    @media (max-width: 1020px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const HomeText = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: clamp(1.5rem, 3vw, 2.5rem);

    & span {
        color: var(--clr-accent);
    }

    @media (max-width: 1020px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
`;
const HomeImage = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;

    & img {
        width: 100%;
        max-width: 580px;
    }

    @media (max-width: 1020px) {
        width: 100%;
        height: 0%;
    }
`;

export default Home;
