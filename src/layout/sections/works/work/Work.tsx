import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link href={"#"}>dd</Link>
            <Link href={"#"}>dd</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    border: 3px solid black;
    width: 33%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    
`

const Title = styled.h3`
    
`

const Description = styled.p`
    
`

const Link = styled.a`
    
`