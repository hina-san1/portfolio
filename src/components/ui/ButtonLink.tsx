import type { ComponentProps } from 'react'

type ButtonLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border-2 whitespace-nowrap transition active:scale-95'

const variants = {
  primary:
    'border-transparent bg-primary text-on-primary hover:opacity-90 active:opacity-80',
  outline:
    'border-charcoal bg-transparent text-charcoal hover:bg-surface-2 active:bg-line',
}

// py is 2px less than usual because border-2 adds height
const sizes = {
  md: 'px-4 py-2 text-sm font-medium',
  lg: 'px-5 py-2.5 text-base font-semibold md:px-6 md:py-3',
}

function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}

export default ButtonLink
