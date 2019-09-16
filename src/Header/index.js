import React from 'react';
import styled from 'styled-components/macro'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Header = () => {

    // useScrollPosition(({ prevPos, currPos}) => {
    //     const isVisible = currPos > prevPos  
    // })

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

    margin-top: 2em;
    margin-bottom: 2em;
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
    max-width: 90vw;
    font-family: 'Aleo';
    font-weight: bold;
    font-size: 2.7em;
`
