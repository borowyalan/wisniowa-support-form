import React from 'react';
import FormikComponent from './FormikComponent';
import styled from 'styled-components/macro'

const WisniowaForm = () => (
    <ContentContainer>
        <FormikComponent/>
    </ContentContainer>
);

const ContentContainer = styled.div`
    flex: 1;

    min-width: 80vw;

    /* margin: auto; */
    padding-bottom: 2em;
`;

export default WisniowaForm;