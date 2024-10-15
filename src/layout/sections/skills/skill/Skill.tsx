import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";


export const Skill = (props: {iconId: string}) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 16%;
    text-align: center;
`