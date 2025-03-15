'use client'

import { BoxBody, BoxContent } from '@/components/ui/box'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import compass from '@/assets/svg/icon/compass.svg'
import deliver from '@/assets/svg/icon/deliver.svg'
import fund from '@/assets/svg/icon/fund.svg'
import benefit from '@/assets/svg/icon/benefit.svg'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './choose-cloud'

const workProcess = [
  {
    image: compass,
    title: 'Discover',
    description: 'Requirements gathering and technical review with your teams and processes.',
  },
  {
    image: deliver,
    title: 'Deliver',
    description: 'Design a solution using the best-fit cloud services.',
  },
  {
    image: fund,
    title: 'Fund',
    description:
      'Review whether incentive schemes are available to subsidize your costs. Forecast operating costs in the cloud.',
  },
  {
    image: deliver,
    title: 'Deliver',
    description: 'Execute the delivery playbook to get your workload running in the cloud.',
  },
  {
    image: benefit,
    title: 'Benefit',
    description: 'Start reaping the benefits of a cloud-first solution.',
  },
]

function ProcessWork() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#020816] w-full h-max px-4 py-16 lg:py-32 flex flex-col gap-10 lg:gap-20">
      <motion.div
        variants={fadeInUp}
        className="max-w-[1024px] mx-auto text-center text-white space-y-4">
        <h2 className="text-2xl lg:text-6xl font-bold">How does the process work?</h2>
        <p className="text-sm lg:text-2xl leading-loose">
          No matter what cloud service you’re looking for – whether it’s CloudStart, CloudShift, or CloudPace – AC uses
          its proven Cloud model to maximize the success of your journey in the cloud.
        </p>
      </motion.div>

      <div className="w-full container mx-auto">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            640: { slidesPerView: 2.5, centeredSlides: false },
            1024: { slidesPerView: 3.5, centeredSlides: false },
            1280: { slidesPerView: 5, centeredSlides: false },
          }}
        >
          {workProcess.map((item, index) => (
            <SwiperSlide key={index} className="p-4">
              <motion.div
                transition={{ duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 260, damping: 20 }}
                variants={fadeInUp} >
                <BoxBody className="aspect-[10/16] lg:aspect-[8/16] !min-w-full !p-8 rounded-[14px]" anime>
                  <BoxContent className="flex flex-col items-center justify-center gap-6">
                    <Image src={item.image} alt={item.title} width={50} height={50} />
                    <h4 className="text-base lg:text-[28px] font-bold text-white">{item.title}</h4>
                    <p className="text-body text-sm lg:text-lg text-center">{item.description}</p>
                  </BoxContent>
                </BoxBody>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}

export default ProcessWork
