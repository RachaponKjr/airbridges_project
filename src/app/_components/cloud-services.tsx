'use client'
import React, { useEffect, useRef } from 'react'

import { cn } from '@/libs/cn'
import { BoxBody, BoxContent } from '@/components/ui/box'
import Divider from '@/components/ui/divider'

import dataCard from '@/assets/data/cloud-services.json'
import Tick from '@/assets/icons/tick'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

import arrow from '@/assets/svg/icon/arrow.svg'
import Button from '@/components/ui/button'
import { NavigationOptions } from 'swiper/types'

function CloudServices() {
  const { data } = dataCard
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
      className={cn(
        'relative bg-image-start w-full h-max pb-14 lg:pb-0 bg-cover scale-100 bg-bottom flex justify-center items-center flex-col gap-10 lg:gap-0'
      )}
    >
      {/* Layer ที่ช่วยปรับสี Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#003094] lg:to-[#020816] opacity-100 lg:opacity-70" />
      <div
        className="hidden lg:block absolute inset-0 bg-[#003094] mix-blend-color w-full h-full opacity-70"
        style={{ filter: 'brightness(80%)' }}
      />
      <div className="z-50 container mx-auto space-y-12 lg:my-8">
        <div className="flex flex-col justify-start items-center gap-20 container mx-auto">
          <div className="space-y-2 lg:space-y-6 flex flex-col items-center pt-14">
            <div className="border border-white/10 rounded-full px-8 py-2 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
              <span className="text-white text-sm lg:text-2xl">Our Cloud Services</span>
            </div>
            <div className="text-center w-full lg:w-[1054px] max-w-full text-2xl lg:text-[57.6px]">
              <h3 className="text-white text-2xl lg:text-5xl">
                Here for you at each stage of your journey to the cloud.
              </h3>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          spaceBetween={46}
          navigation={{
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          modules={[Navigation]}
          className="z-30"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="p-4">
              <BoxBody key={index} className="aspect-[8/16] !p-10" anime>
                <BoxContent>
                  <div className="text-center space-y-1">
                    <span className="uppercase text-lg lg:text-2xl" style={{ color: `${item.color}` }}>
                      {item.tage}
                    </span>
                    <h3 className="text-white text-xl lg:text-[32px]">{item.haderText}</h3>
                    <span className="text-body text-sm lg:text-lg">{item.subText}</span>
                  </div>
                  <Divider className="my-5" />
                  <div>
                    <ul className={cn('text-body text-sm lg:text-lg space-y-10')}>
                      {item.detail.map((datail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Tick color={item.color} size={22} />
                          {datail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </BoxContent>
              </BoxBody>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ปุ่มกดเลื่อน Swiper */}
      <div className="z-20 flex gap-10 lg:hidden">
        <Image src={arrow} alt="Previous" width={70} height={70} className="cursor-pointer button-prev" />
        <Image src={arrow} alt="Next" width={70} height={70} className="rotate-180 cursor-pointer button-next" />
      </div>

      {/* Button */}
      <div className="mt-0 lg:mt-24 z-50">
        <Button link="https://cal.com/airbridges" titel="Book a Free Consultation" />
      </div>
    </section>
  )
}

export default CloudServices
