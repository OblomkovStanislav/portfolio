import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { SocialList } from "../../components/socialList/SocialList";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialList/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    border: 3px solid black;
    display: flex;
    justify-content: space-between;
`