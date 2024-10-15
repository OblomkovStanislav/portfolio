import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import projectImg from "../../../assets/images/projects/project1.webp";
import { Work } from "./work/Work";
import { SectionDescriptionTitle } from "../../../components/SectionDescriptionTitle";

export const Works  = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionDescriptionTitle>Things I’ve built so far</SectionDescriptionTitle>
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
    border: 3px solid black;
    min-height: 100vh;
`