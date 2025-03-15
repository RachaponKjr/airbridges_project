/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import arrow from '@/assets/svg/icon/arrow.svg'
import Mtech from '@/assets/svg/icon/Mtech.svg'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { NavigationOptions } from 'swiper/types'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './choose-cloud'

function CustomerSuccess() {
  const swiperRef = useRef<SwiperRef | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper
      const navigationParams = swiperInstance.params.navigation as NavigationOptions
      navigationParams.prevEl = '.button-prev'
      navigationParams.nextEl = '.button-next'
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [])

  return (
    <section
      className="bg-[radial-gradient(circle_800px_at_bottom,#003094_0%,#003094_24%,#020816_100%)] 
        lg:bg-[radial-gradient(circle_800px_at_bottom_right,#003094_0%,#003094_24%,#020816_100%)] 
        relative h-max px-4 lg:py-32 lg:p-32 flex flex-col gap-14"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#020816] opacity-100" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1024px] mx-auto container px-4 lg:px-0 z-10">
        <motion.div variants={fadeInUp} className="text-center text-white space-y-4">
          <h2 className="text-2xl lg:text-6xl font-bold">Customer Success Story</h2>
          <p className="text-sm lg:text-2xl text-body">
            Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback
            below
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:mb-14 mt-8 lg:my-14 space-y-8 lg:space-y-10">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20 flex gap-10 justify-center items-center">
            <Image src={arrow} alt="Previous" width={70} height={70} className="cursor-pointer button-prev" />
            <Image src={arrow} alt="Next" width={70} height={70} className="rotate-180 cursor-pointer button-next" />
          </motion.div>

          {/* Swiper */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4 lg:space-y-10 mb-14 lg:mb-0">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              navigation={{
                prevEl: '.button-prev',
                nextEl: '.button-next',
              }}
              modules={[Pagination, Navigation,Autoplay]}
            >
              <SwiperSlide>
                <div className="lg:py-6 text-sm lg:text-[26px] text-center text-white lg:px-[187px]">
                  <p>
                    Automation Consultants provide us with an extra "confidence layer" when we're performing major work
                    or tasks that are not carried out routinely. We're able to tap into their expertise and experience
                    with various software solutions and ways of working that we may not have considered.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:py-6 text-sm lg:text-[26px] text-center text-white lg:px-[187px]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem dolorem, distinctio fugit
                    quisquam vero.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:py-6 text-sm lg:text-[26px] text-center text-white lg:px-[187px]">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo reprehenderit doloremque
                    saepe earum expedita minima totam neque ut odio?
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="flex flex-col text-white gap-4 items-center">
              <h6 className="text-[12px] lg:text-lg font-bold">Customer Name</h6>
              <div className="flex gap-4 items-center">
                <span className="text-[12px] lg:text-sm">Co-founder & CEO of MTech</span>
                <div className="w-[2px] h-[26px] bg-white/30" />
                <Image src={Mtech} alt="Mtech" width={80} height={80} />
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* จุด Pagination */}
        <div className="swiper-pagination"></div>
      </motion.div>
    </section>
  )
}

export default CustomerSuccess
