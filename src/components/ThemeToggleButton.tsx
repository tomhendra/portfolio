/** @jsxImportSource theme-ui */
import { IconButton, useColorMode } from 'theme-ui';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggleButton({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
      {...props}
    >
      {colorMode === 'default' ? <FiMoon /> : <FiSun />}
    </IconButton>
  );
}