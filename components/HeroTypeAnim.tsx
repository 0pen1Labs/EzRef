'use client'
import { TypeAnimation } from 'react-type-animation'

type Props = {
  sequence: Array<any>
}

function HeroTypeAnim({ sequence }: Props) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      className="bg-gradient-to-r from-pink-500 to-cyan-300 bg-clip-text text-3xl text-transparent"
      repeat={Infinity}
    />
  )
}

export default HeroTypeAnim
