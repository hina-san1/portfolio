import { useEffect } from 'react'
import { X } from 'lucide-react'
import Logo from '../ui/Logo.tsx'
import { navLinks } from '../../data/navLinks.ts'

type MobileMenuProps = {
  onClose: () => void
}

function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col gap-7 overflow-y-auto bg-bg px-4 pt-3 pb-8 md:px-8 xl:hidden">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Logo className="size-10" />
          <span className="text-lg font-semibold">RC Jimenez</span>
        </a>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="grid size-11 place-items-center rounded-xl bg-bg-alt text-ink transition hover:bg-blue-100 active:scale-95 dark:hover:bg-blue-200"
        >
          <X size={20} />
        </button>
      </div>
      <nav aria-label="Mobile">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="flex min-h-14 items-center rounded-[14px] px-4 text-lg font-medium transition-colors hover:bg-bg-alt active:bg-blue-100 dark:active:bg-blue-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#contact"
        onClick={onClose}
        className="flex min-h-13 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-medium text-white transition hover:brightness-110 active:brightness-95"
      >
        Contact Me
      </a>
    </div>
  )
}

export default MobileMenu
