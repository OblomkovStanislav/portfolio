import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { SocialList } from "../../components/socialList/SocialList";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Top>
                <Logo/>
                <Phone>+7 (999) 777-77-77</Phone>
                <Email>oblomkovstanislav@gmail.com</Email>
                <SocialList/>
            </Top>

            <Bottom>
                <Menu menuItems={items}/>
                <span>Designed and built by Pavan MG with Love & Coffee</span>
            </Bottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    border: 3px solid black;
`

const Top = styled.div`
    border: 3px solid black;
`

const Phone = styled.span`
    
`

const Email = styled.span`
    
`

const Bottom = styled.div`
    border: 3px solid black;
`