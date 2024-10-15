import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { SectionDescriptionTitle } from "../../../components/SectionDescriptionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescriptionTitle>Technologies I’ve been working with recently</SectionDescriptionTitle>
            
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Skill iconId={"html"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"redux"}/>
                <Skill iconId={"bootstrap"}/>
                <Skill iconId={"tailwind"}/>
                <Skill iconId={"sass"}/>
                <Skill iconId={"git"}/>
                <Skill iconId={"greensock"}/>
                <Skill iconId={"vscode"}/>
                <Skill iconId={"github"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    border: 3px solid black;
    min-height: 100vh;
`