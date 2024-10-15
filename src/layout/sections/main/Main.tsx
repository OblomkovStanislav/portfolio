import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <h2>Hi 👋,</h2>
                    <h2>My name is</h2>
                    <h2>Pavan MG</h2>
                    <h1>I build things for web</h1>
                </div>
            <Photo src={photo} alt="My photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background: yellow;
`
const Photo = styled.img`
    width: 349px;
    height: 349px;
`