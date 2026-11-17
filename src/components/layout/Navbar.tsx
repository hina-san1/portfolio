import Logo from '../ui/Logo.tsx'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/navLinks.ts'
import { useState } from 'react'
import MobileMenu from './MobileMenu.tsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <Logo className="size-10" />
            <span className="text-lg font-semibold">RC Jimenez</span>
          </a>
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex gap-8 2xl:gap-12">
              {navLinks.map((link) => (
                <li key={link.href} className="text-sm">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center rounded-full bg-primary px-5.5 py-3 text-sm font-medium text-white xl:inline-flex"
            >
              Contact Me
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink xl:hidden"
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
