import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function DarkButton() {
    const {mode, changeMode} = useContext(ThemeContext)
  return (
    <> 
      <button onClick={()=> mode==='light'? changeMode('dark'): changeMode('light')}> Change Theme</button>
    </>
  )
}

export default DarkButton