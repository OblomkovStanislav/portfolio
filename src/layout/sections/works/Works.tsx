import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import projectImg from "../../../assets/images/projects/project1.webp";
import { Work } from "./work/Work";

export const Works  = () => {
    return (
        <StyledWorks>
            <SectionTitle>Works</SectionTitle>
            <FlexWrapper justify="space-around" wrap="wrap">
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
                <Work src={projectImg} title={"Заголовок"} description={"Текст, текст, текст, текст, текст, текст, текст"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: blue;
`