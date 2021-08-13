import React from "react";
import styled from "styled-components";
import Wave from "./Wave";

function Contact() {
    return (
        <ContactContainer>
            <Links>
                <a
                    href="https://www.youtube.com/watch?v=OrGdlKFUVTo"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://www.youtube.com/watch?v=w7x_lWJNnNg"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
            </Links>
            <Wave />
        </ContactContainer>
    );
}

const ContactContainer = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Links = styled.div`
    margin: 6rem 0;
    text-align: center;

    & a {
        color: var(--clr-accent);
        font-size: 5rem;
        margin: 0 clamp(1.8rem, 5vw, 3rem);
    }
`;

export default Contact;
