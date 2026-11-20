import { ArrowRight, Sprout } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import aboutImage from '../assets/about.webp'

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '7+', label: 'Certificates Earned' },
  { value: '4+', label: 'Years Coding' },
]

function About() {
  return (
    <section id="about" className="px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/*Text Content*/}
        <div className="mx-auto flex max-w-150 flex-col items-center gap-8 text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-label uppercase lg:justify-start">
              <span aria-hidden="true" className="h-0.5 w-6 bg-charcoal" />
              About me
              <span
                aria-hidden="true"
                className="h-0.5 w-6 bg-charcoal lg:hidden"
              />
            </p>
            <h2 className="text-2xl leading-snug font-semibold md:text-3xl">
              Hi, I'm RC
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              Ready to adapt,{' '}
              <span className="font-semibold text-label">dedicated</span> to
              learning.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-muted">
            <p>
              I enjoy both sides of the web: designing interfaces that look
              polished and building the logic that makes them work. I come from
              an IT background, and I learn best by doing, so every project
              teaches me something new.
            </p>
            <p>
              I'm committed to upskilling, whether that's picking up a new
              framework, earning a certification or improving how I write code.
              My goal is simple: be a better developer today than I was
              yesterday.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 divide-x divide-line">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-2 lg:px-6 lg:first:pl-0"
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <ButtonLink href="#contact" size="lg" className="w-full md:w-auto">
            Let's Work Together
            <ArrowRight size={20} />
          </ButtonLink>
        </div>

        {/*Image Content*/}
        <div className="relative justify-self-center lg:order-first lg:ml-6 lg:justify-self-start">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-1/6 scale-90 rotate-10 rounded-[7%] bg-tile"
          />
          <img
            src={aboutImage}
            alt="Photo of Raymond Charles Jimenez"
            width={1192}
            height={1320}
            loading="lazy"
            className="relative block h-64 w-auto rounded-[7%] rounded-tr-[30%] shadow-lg md:h-80 lg:h-100 xl:h-116"
          />
          <div className="absolute -bottom-2 -left-6 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl">
            <div className="flex size-9 items-center justify-center rounded-lg bg-tile text-graphite-0 dark:bg-graphite-0 dark:text-graphite-950">
              <Sprout size={18} />
            </div>
            <div>
              <p className="text-xs text-ink-muted">Dedicated to</p>
              <p className="text-sm font-semibold">Learning & upskilling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
