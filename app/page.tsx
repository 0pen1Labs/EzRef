import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroGenerateLinkButton from '@/components/HeroGenerateLinkButton'
import HeroTypeAnim from '@/components/HeroTypeAnim'
import { AnimTextSequence } from '@/utils/AnimTextSequence'
import HeroImage from '@/public/hero_img.svg'
import Image from 'next/image'
import Line from '@/public/line.svg'

export default function Home() {
  return (
    <main className=" flex h-screen min-h-screen flex-col bg-background text-foreground ">
      <Header />
      <div className="flex flex-grow flex-row items-center justify-evenly ">
        <div className="flex flex-col items-start">
          <div className="relative">
            <Image
              className="absolute -left-10 -top-8"
              src={Line}
              alt={'line'}
            />
            <div className="text-lg font-normal text-foreground/50">
              Hello, Welcome
            </div>
          </div>
          <div className="mt-4">
            <HeroTypeAnim sequence={AnimTextSequence} />
          </div>
          <div className="mt-8 text-4xl font-medium tracking-wide text-foreground/80">
            Simplify Your Search: Effortless
            <br />
            Referral Links for Exceptional
            <br />
            Job Candidates!
          </div>
          <div className="mt-24">
            <HeroGenerateLinkButton />
          </div>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt={'Description image'}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
