import { ArrowRight, Download } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import heroImage from '../assets/hero.webp'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-var(--spacing-nav))] items-center px-4 py-8 md:px-8 lg:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        {/*Text Content*/}
        <div className="mx-auto flex max-w-150 flex-col items-center gap-8 text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-label uppercase lg:justify-start">
              <span aria-hidden="true" className="h-0.5 w-6 bg-charcoal" />
              Hello, I'm
              <span
                aria-hidden="true"
                className="h-0.5 w-6 bg-charcoal lg:hidden"
              />
            </p>
            <h1 className="text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
              Raymond Charles <span className="text-name">Jimenez</span>
            </h1>
            <p className="text-lg leading-relaxed md:text-xl">
              Aspiring{' '}
              <span className="font-semibold text-label">Full-Stack</span> Web
              Developer
            </p>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-ink-muted">
            I build modern, responsive, and user-friendly web applications,
            combining thoughtful interface design with functional and reliable
            solutions.
          </p>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-4">
            <ButtonLink href="#projects" size="lg">
              View Projects
              <ArrowRight size={20} />
            </ButtonLink>
            <ButtonLink href="/cv.pdf" download variant="outline" size="lg">
              Download CV
              <Download size={20} />
            </ButtonLink>
          </div>
        </div>

        {/*Image Content*/}
        <div className="relative mx-auto w-fit shrink-0 lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute bottom-0 aspect-square w-full -translate-x-1/10 -translate-y-1/10 rounded-full bg-blob-back"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 aspect-square w-full rounded-full bg-blob-front"
          />
          <div className="relative overflow-hidden rounded-b-full px-6">
            <img
              src={heroImage}
              alt="Photo of Raymond Charles Jimenez"
              width={860}
              height={1279}
              fetchPriority="high"
              className="block h-80 w-auto md:h-96 lg:h-120"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
