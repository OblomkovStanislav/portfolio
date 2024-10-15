import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const SocialList = () => {
    return (
        <StyledSocialList>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={"github"} width="30" height="30"/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink>
                    <Icon iconId={"github"} width="30" height="30"/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink>
                    <Icon iconId={"github"} width="30" height="30"/>
                </SocialLink>
            </SocialItem>
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`