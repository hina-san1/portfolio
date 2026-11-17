import Logo from '../ui/Logo.tsx'
import { Mail, Menu } from 'lucide-react'
import { navLinks } from '../../data/navLinks.ts'
import { useState } from 'react'
import MobileMenu from './MobileMenu.tsx'
import ThemeToggle from '../ui/ThemeToggle.tsx'
import { applyTheme, getInitialTheme } from '../../lib/theme.ts'
import type { Theme } from '../../lib/theme.ts'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  return (
    <>
      <header className="sticky top-0 z-50 px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Logo className="size-10" />
            <span className="text-lg font-semibold">RC Jimenez</span>
          </a>
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex gap-8 2xl:gap-12">
              {navLinks.map((link) => (
                <li key={link.href} className="text-sm">
                  <a
                    href={link.href}
                    className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a
              href="#contact"
              className="hidden items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 active:brightness-95 xl:inline-flex"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink transition hover:bg-blue-100 active:scale-95 xl:hidden dark:hover:bg-blue-200"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default Navbar
