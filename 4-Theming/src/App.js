import { ThemeProvider } from 'styled-components';
import themes from './themes/themes'
import GlobalStyle from './globalStyle';
import Homelayout from './layout/home'
import { useState, useMemo } from 'react';

export default function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(()=>{
    return themes[theme] || themes.dark
  },[theme])

  function handleTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
     <GlobalStyle/>
     <Homelayout press={handleTheme}/>
    </ThemeProvider>
  );
}