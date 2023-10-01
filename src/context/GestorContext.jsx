import React, { createContext, useContext, useState } from 'react';

// Crear un contexto
export const ThemeContext = createContext();

// Crear un componente que envuelve a otros componentes con el proveedor de contexto
export default function GestorContext({ children }) {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//export {ThemeContext}



// Envolver tus componentes con el proveedor de conte