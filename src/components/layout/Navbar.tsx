import Logo from '../ui/Logo.tsx'
import { Mail, Menu } from 'lucide-react'
import { navLinks } from '../../data/navLinks.ts'
import { useState } from 'react'
import MobileMenu from './MobileMenu.tsx'
import ThemeToggle from '../ui/ThemeToggle.tsx'
import ButtonLink from '../ui/ButtonLink.tsx'
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
      <header className="sticky top-0 z-50 h-nav px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Logo className="size-10" />
            <span className="text-lg font-semibold">RC Jimenez</span>
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-6 xl:gap-8 2xl:gap-12">
              {navLinks.map((link) => (
                <li key={link.href} className="text-sm">
                  <a
                    href={link.href}
                    className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <div className="hidden lg:block">
              <ButtonLink href="#contact">
                Contact Me
                <Mail size={18} />
              </ButtonLink>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-xl bg-line text-ink transition hover:bg-line-strong active:scale-95 lg:hidden"
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
