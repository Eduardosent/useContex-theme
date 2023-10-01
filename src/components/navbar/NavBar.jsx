import React from 'react'
import './NavBar.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/GestorContext'
import { useState } from 'react';

export default function NavBar() {

    const {theme} = useContext(ThemeContext);

    const [select1, setSelect1] = useState(1);
    const [select2, setSelect2] = useState(0);
    const [select3, setSelect3] = useState(0);
    const [select4, setSelect4] = useState(0);

    const seleccionar1  = () => {
        setSelect1(1);
        setSelect2(0);
        setSelect3(0);
        setSelect4(0);
    }
    const seleccionar2  = () => {
        setSelect1(0);
        setSelect2(1);
        setSelect3(0);
        setSelect4(0);
    }
    const seleccionar3  = () => {
        setSelect1(0);
        setSelect2(0);
        setSelect3(1);
        setSelect4(0);
    }
    const seleccionar4  = () => {
        setSelect1(0);
        setSelect2(0);
        setSelect3(0);
        setSelect4(1);
    }

  return (
    <div className='nav-bar'>
        <a onClick={seleccionar1} style={{color: select1 == 1 ? theme : "black",background: theme=="white" && select1 == 1 ? "darkblue" : "white", fontWeight: select1 == 1 && "bolder"}} href="#">Home</a>
        <a onClick={seleccionar2} style={{color: select2 == 1 ? theme : "black",background: theme=="white" && select2 == 1 ? "darkblue" : "white", fontWeight: select2 == 1 && "bolder"}} href="#">Buscar</a>
        <a onClick={seleccionar3} style={{color: select3 == 1 ? theme : "black",background: theme=="white" && select3 == 1 ? "darkblue" : "white", fontWeight: select3 == 1 && "bolder"}} href="#">Contacto</a>
        <a onClick={seleccionar4} style={{color: select4 == 1 ? theme : "black",background: theme=="white" && select4 == 1 ? "darkblue" : "white", fontWeight: select4 == 1 && "bolder"}} href="#">Menu</a>
    </div>
  )
}
