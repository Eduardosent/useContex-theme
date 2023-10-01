import React, { useContext } from 'react'
import { ThemeContext } from '../context/GestorContext'

export default function BotonTheme() {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        if(theme=="white"){
            setTheme("darkblue");
            console.log(theme);
        }else if(theme=="darkblue") {
            setTheme("pink");
            console.log(theme);
        }else{
            setTheme("white");
            console.log(theme);
        }
    }

  return (
    <div className='boton'>
        <button onClick={changeTheme}>Cambiar tema</button>
    </div>
  )
}
