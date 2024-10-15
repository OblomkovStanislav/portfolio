import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder="Name"/>
                <Field placeholder="Subject"/>
                <Field placeholder="Message" as="textarea"/>
                <Button>send</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background: grey;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    width: 100%;

`

const Field = styled.input`
    
`