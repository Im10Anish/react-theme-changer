import React from 'react'
import { useSelector } from 'react-redux'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'
import './App.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`

const H1 = styled.h1`
    color: ${(props: any) => props.theme.primary};
    font-family: Roboto;
    font-size: 60px;
    margin: 0;
`
const H4 = styled.h4((p) => ({
    color: p.theme.primary,
    fontFamily: 'Roboto Light',
    fontSize: '20px',
    margin: 0,
}))

const P = styled.p((p) => ({
    color: p.theme.primary,
    fontFamily: 'Roboto Light',
    fontSize: '20px',
    width: '50%',
    margin: '50px auto',
    textAlign: 'justify',
}))

const Wrapper = styled.div`
    padding: 80px;
`
const Box = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
`
const Line = styled.div`
    height: 5px;
    margin: 0 auto;
    width: 50%;
    background-color: ${(props: any) => props.theme.lineColor};
`

function App() {
    const theme = useSelector((state: any) => state.theme)

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle />
                <ThemeSelector />
                <Wrapper>
                    <H1>Color Theme Switcher</H1>
                    <Line />
                    <Box>
                        <H4>{new Date().toLocaleDateString()}</H4>
                        <H4>Code, Design</H4>
                    </Box>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cum illum aliquid fugiat assumenda quisquam non
                        ullam similique vitae sequi minima tempore voluptatum,
                        sunt dolorem perspiciatis! Temporibus aspernatur
                        cupiditate veniam culpa. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Tempore quaerat quibusdam
                        sint. Iste nemo expedita in quisquam excepturi quis,
                        labore incidunt, autem saepe reiciendis accusantium
                        facilis? Voluptatem adipisci alias nam. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                        Repellendus maiores, impedit minus reprehenderit
                        nesciunt enim natus dolorum eius, soluta temporibus
                        laborum sed ut illum iusto, repellat dolore ad odit
                        magnam.
                    </P>
                </Wrapper>
            </div>
        </ThemeProvider>
    )
}

export default App
