import type { ComponentProps } from 'react'

type ButtonLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border-2 whitespace-nowrap transition active:scale-95'

const variants = {
  primary:
    'border-transparent bg-primary text-white hover:brightness-110 active:brightness-95',
  outline:
    'border-accent bg-surface text-accent hover:bg-bg-alt active:bg-blue-100 dark:active:bg-blue-200',
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
