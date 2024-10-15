import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>dd</SectionTitle>
            
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Skill iconId={"htmlSvg"}/>
                <Skill iconId={"cssSvg"}/>
                <Skill iconId={"jsSvg"}/>
                <Skill iconId={"reactSvg"}/>
                <Skill iconId={"bootstrapSvg"}/>
                <Skill iconId={"tailwindSvg"}/>
                <Skill iconId={"sassSvg"}/>
                <Skill iconId={"gitSvg"}/>
                <Skill iconId={"greensockSvg"}/>
                <Skill iconId={"vscodeSvg"}/>
                <Skill iconId={"githubSvg"}/>
                <Skill iconId={"htmlSvg"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    background: black;
`