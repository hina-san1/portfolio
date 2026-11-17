import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../../lib/theme.ts'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Dark mode"
      onClick={onToggle}
      className="relative flex h-11 w-20 items-center justify-between rounded-full bg-surface-2 px-3 transition hover:bg-blue-100 active:scale-95 dark:hover:bg-blue-200"
    >
      <span
        aria-hidden="true"
        className="absolute top-1 left-1 size-9 rounded-full bg-white shadow-knob transition-transform motion-reduce:transition-none dark:translate-x-9 dark:bg-primary"
      />
      <Sun size={18} className="relative" />
      <Moon size={18} className="relative" />
    </button>
  )
}

export default ThemeToggle
