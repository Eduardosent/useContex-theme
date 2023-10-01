import React,{ useContext } from 'react'
import GestorContext, { ThemeContext } from './context/GestorContext'
import BotonTheme from './components/botonTheme'
import Body from './components/Body'
import NavBar from './components/navbar/NavBar'

export default function App() {

  return (
    <GestorContext>
        <Body>
          <NavBar/>
          <BotonTheme/>
        </Body>
    </GestorContext>
  )
}

