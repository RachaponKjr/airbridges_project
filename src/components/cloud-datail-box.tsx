'use client'
import React from 'react'
import { cn } from '../libs/cn'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/app/_components/choose-cloud';

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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
        'flex flex-col gap-7 lg:gap-16 items-center w-full container mx-auto'
      )}
    >
      <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: reverse ? 50 : -50 }} transition={{ duration: 0.5 }} className="w-full lg:w-[500px] shrink-0 max-w-full aspect-video lg:aspect-[8/11] rounded-3xl lg:rounded-[53px]">
        <Image
          src={image}
          alt={titel}
          quality={100}
          width={100}
          height={100}
          className="w-full lg:w-[500px] shrink-0 max-w-full aspect-video lg:aspect-[8/11] rounded-3xl lg:rounded-[53px]"
        />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white space-y-6 self-start grow px-4">
        <motion.div
          variants={fadeInUp}
          className="space-y-3 lg:space-y-2">
          <span className={`text-base lg:text-3xl`} style={{ color: color }}>
            {tage}
          </span>
          <h2 className="text-2xl lg:text-[54px]">{titel}</h2>
          <span className="text-sm lg:text-xl text-white/80 font-bold">{subtitel}</span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-sm lg:text-2xl space-y-14 text-body">
          {details.map((item, index) => {
            return <p key={index + 1}>{item}</p>
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default CloudDetailBox
