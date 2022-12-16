import React from 'react';
import Component, { ComponentType } from './Component';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, DefaultTheme } from '@dafiti/poc-lib-frontend-new-web'

const App = (props: ComponentType) => <ThemeProvider theme={DefaultTheme}>
    <div className='hypernova'><Component {...props} /></div>
    <GlobalStyle />
</ThemeProvider>

export default App