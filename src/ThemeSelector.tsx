import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import {
    darkTheme,
    yoshiTheme,
    partyTheme,
    classicTheme,
    chocoTheme,
    toadTheme,
} from './themes'
import { applyTheme } from './redux/themeActions'

const StyledButton = styled.button`
    color: #ffffff;
    background-color: #55aacc;
    box-shadow: none;
    border: 0px;
    border-radius: 4px;
    font-size: 1.2em;
    min-width: 120px;
    padding: 12px;
    margin: 12px;
`
const HeaderWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 5px 6px 0px #888;
`

const ThemeSelector = () => {
    const dispatch = useDispatch()

    const changeTheme = (theme: any) => {
        dispatch(applyTheme(theme))
    }

    return (
        <HeaderWrapper>
            <StyledButton onClick={() => changeTheme(classicTheme)}>
                Classic
            </StyledButton>
            <StyledButton onClick={() => changeTheme(darkTheme)}>
                Dark
            </StyledButton>
            <StyledButton onClick={() => changeTheme(chocoTheme)}>
                Choco
            </StyledButton>
            <StyledButton onClick={() => changeTheme(toadTheme)}>
                Toad
            </StyledButton>
            <StyledButton onClick={() => changeTheme(yoshiTheme)}>
                Yoshi
            </StyledButton>
            <StyledButton onClick={() => changeTheme(partyTheme)}>
                Rainbow
            </StyledButton>
        </HeaderWrapper>
    )
}

export default ThemeSelector
