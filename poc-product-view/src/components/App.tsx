import React from 'react';
import Component from './Component';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, DefaultTheme } from '@dafiti/poc-lib-frontend-new-web'

const App = (props: any) => <ThemeProvider theme={DefaultTheme}>
    <div className='hypernova'><Component {...props} /></div>
    <GlobalStyle />
</ThemeProvider>

export default App