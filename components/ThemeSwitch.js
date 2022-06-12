import { useState } from 'react'
import DarkTheme from './DarkTheme'

function loadDarkMode() {
  if (typeof localStorage === 'undefined') {
    return false
  }
  const darkMode = localStorage.getItem('darkMode')
  return darkMode !== null ? JSON.parse(darkMode) : false
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  console.log('[ThemeSwitch] darkMode:', darkMode)
  const text = darkMode ? 'Light Mode' : 'Dark Mode'
  return (
    <>
      {/* hydrate 水合作用 */}
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  )
}

export default ThemeSwitch
