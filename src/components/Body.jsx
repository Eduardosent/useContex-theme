import React,{useContext} from 'react'
import { ThemeContext } from '../context/GestorContext'
import BotonTheme from './BotonTheme'
import '../index.css'
import NavBar from './navbar/NavBar';

export default function () {

    const {theme} = useContext(ThemeContext);

  return (
    <div className='total' style={{background: theme}}>
        <NavBar/>  
        <h1 style={{color: theme == "darkblue"? "white": "black"}}>body</h1>
        <BotonTheme/>
        <h2 style={{color: theme == "darkblue"? "white": "black"}}>
            {theme == "white" ? "Light": theme == "darkblue" ? "Dark" : "Pink"} Mode
        </h2>
    </div>
  )
}
