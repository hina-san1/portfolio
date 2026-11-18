type LogoProps = {
  variant?: 'default' | 'inverse'
  className?: string
}

const colors = {
  default: {
    ring: 'stroke-graphite-300 dark:stroke-graphite-500',
    letter: 'fill-ink',
  },
  inverse: { ring: 'stroke-graphite-500', letter: 'fill-graphite-50' },
}

function Logo({ variant = 'default', className }: LogoProps) {
  const { ring, letter } = colors[variant]

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        className={ring}
        strokeWidth={8.32}
        d="M52.93 50.36A27.84 27.84 0 1 1 52.93 13.64"
      />
      <path
        className={letter}
        d="M37.38 44.6 32.13 35.06H30.65V44.6H24.5V19.33H34.83Q37.82 19.33 39.92 20.37Q42.03 21.42 43.07 23.23Q44.12 25.05 44.12 27.28Q44.12 29.8 42.69 31.78Q41.27 33.76 38.5 34.59L44.33 44.6ZM30.65 30.7H34.47Q36.16 30.7 37.01 29.88Q37.85 29.05 37.85 27.54Q37.85 26.1 37.01 25.27Q36.16 24.44 34.47 24.44H30.65Z"
      />
    </svg>
  )
}

export default Logo
