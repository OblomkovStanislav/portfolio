import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Top>
                <Logo/>
                <Phone>+7 (999) 777-77-77</Phone>
                <Email>oblomkovstanislav@gmail.com</Email>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"githubSvg"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"githubSvg"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"githubSvg"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </Top>

            <Bottom>
                <Menu menuItems={items}/>
            </Bottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: green;
`

const Top = styled.div`
    
`

const Phone = styled.span`
    
`

const Email = styled.span`
    
`

const SocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const Bottom = styled.div`
    
`