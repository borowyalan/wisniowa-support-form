import React from 'react';
import styled from 'styled-components/macro'

const Footer = () => {
    return (
        <FooterContainer> asdf </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10vw;
    min-height: 9vh;

    color: white;
    background-color: black;
    ${'' /* border-top: solid 1px black; */}
`

export default Footer;