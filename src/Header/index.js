import React from 'react';
import styled from 'styled-components/macro'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText> Wiśniowa Support&nbsp;Form</HeaderText>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    
    height: 14vh;

    margin-top: 3em;
    margin-bottom: 3em;
    /* @TODO */
    ${'' /* for desktop view
    @media {
        justify-content: flex-start;
        padding-left: 10vw;
        border-bottom: solid 1px black;
    } */}
`

const HeaderText = styled.h1`
    margin: 0;
    max-width: 80vw;
    font-family: 'Aleo';
    font-weight: bold;
    font-size: 2.5em;
`
