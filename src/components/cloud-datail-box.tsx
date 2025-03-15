import React from 'react'
import { cn } from '../libs/cn'
import Image from 'next/image'

interface CloudProps {
  reverse?: boolean
  color?: string
  tage: string
  titel: string
  subtitel: string
  details: string[]
  image: string
}

function CloudDetailBox({ reverse, details, subtitel, tage, titel, image, color = '#1779EA' }: CloudProps) {
  return (
    <div
      className={cn(
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
        'flex flex-col gap-7 lg:gap-16 items-center w-full container mx-auto'
      )}
    >
      <Image
        src={image}
        alt={titel}
        quality={100}
        width={100}
        height={100}
        className="w-full lg:w-[500px] shrink-0 max-w-full aspect-video lg:aspect-[8/11] rounded-3xl lg:rounded-[53px]"
      />
      <div className="text-white space-y-6 self-start grow px-4">
        <div className="space-y-3 lg:space-y-2">
          <span className={`text-base lg:text-3xl`} style={{ color: color }}>
            {tage}
          </span>
          <h2 className="text-2xl lg:text-[54px]">{titel}</h2>
          <span className="text-sm lg:text-xl text-white/80 font-bold">{subtitel}</span>
        </div>
        <div className="text-sm lg:text-2xl space-y-14 text-body">
          {details.map((item, index) => {
            return <p key={index + 1}>{item}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default CloudDetailBox
