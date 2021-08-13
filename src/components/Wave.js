import React from "react";
import styled from "styled-components";
import wave from "./assets/img/wave.svg";

function Wave() {
    return <Img src={wave}></Img>;
}

const Img = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

export default Wave;
