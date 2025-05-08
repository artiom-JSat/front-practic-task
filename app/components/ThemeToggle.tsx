import { FiSun, FiMoon } from 'react-icons/fi'

type ThemeToggleProps = {
  darkMode: boolean
  toggleThemeSwitch: () => void
}

const ThemeToggle = ({ darkMode, toggleThemeSwitch }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleThemeSwitch}
      className={`btn-switch-theme ${darkMode ? 'icon-dark' : 'icon-light'}`}
      title={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeToggle
