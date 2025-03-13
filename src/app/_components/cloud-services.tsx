'use client'
import React from 'react'

import { cn } from '@/libs/cn'
import { BoxBody, BoxContent } from '@/components/ui/box'
import Divider from '@/components/ui/divider'

import dataCard from '@/assets/data/cloud-services.json'
import Tick from '@/assets/icons/tick'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import Image from 'next/image'

import arrow from '@/assets/svg/icon/arrow.svg'

function CloudServices() {
  const { data } = dataCard

  return (
    <section
      className={cn(
        'relative bg-image-start w-full h-max pb-14 lg:pb-0 bg-cover scale-100 bg-bottom flex justify-center items-center flex-col px-4 gap-10 lg:gap-0'
      )}
    >
      {/* Layer ที่ช่วยปรับสี Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#003094] lg:to-[#020816] opacity-100" />
      <div
        className="hidden lg:block absolute inset-0 bg-[#003094] mix-blend-color w-full h-full opacity-70"
        style={{ filter: 'brightness(60%)' }}
      ></div>
      <div className="z-50 container mx-auto space-y-12 lg:my-8">
        <div className="flex flex-col justify-start items-center gap-20 container mx-auto">
          <div className="space-y-6 flex flex-col items-center pt-14">
            <div className="border border-white/80 rounded-full px-8 py-3 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
              <span className="text-white">Our Cloud Services</span>
            </div>
            <div className="text-center w-full lg:w-[1054px] max-w-full text-2xl lg:text-[57.6px]">
              <h3 className="text-white ">Here for you at each stage of your journey to the cloud.</h3>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 44,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 44,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 44,
            }
          }
          }
          spaceBetween={46}
        >
          {data.map((item, index) => {
            return (
              <>
                <SwiperSlide>
                  <BoxBody key={index + 1} className="aspect-[8/16] !p-10">
                    <BoxContent>
                      <div className="text-center space-y-1">
                        <span className={`uppercase`} style={{ color: `${item.color}` }}>
                          {item.tage}
                        </span>
                        <h3 className="text-white">{item.haderText}</h3>
                        <span className="text-body">{item.subText}</span>
                      </div>
                      <Divider className="my-5" />
                      <div>
                        <ul className={cn('text-body space-y-10')}>
                          {item.detail.map((datail, index) => {
                            return (
                              <>
                                <li key={index + 1} className="flex items-center gap-3">
                                  <Tick color={item.color} size={22} />
                                  {datail}
                                </li>
                              </>
                            )
                          })}
                        </ul>
                      </div>
                    </BoxContent>
                  </BoxBody>
                </SwiperSlide>
              </>
            )
          })}
        </Swiper>
      </div>
      <div className='z-20 flex gap-10 lg:hidden'>
        <Image src={arrow} alt='arrow' width={70} height={70} />
        <Image src={arrow} alt='arrow' width={70} height={70} className='rotate-180' />
      </div>
      {/* Button */}
      <button className="py-4 z-20 cursor-pointer lg:mt-[100px] px-10  min-w-[300px] rounded-[792.31px] bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#1779EA_0%,_#003094_100%)] shadow-[inset_0px_4px_28.5px_rgba(255,255,255,0.4),_-1px_4px_23.8px_-11px_#003094]
      hover:bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#c0deff_0%,_#0050f7_100%)] hover:shadow-[-1px_-1px_15.8px_0px_#1779EA]"
      >
        <span className="text-lg text-white">Book a Free Consultation</span>
      </button>
    </section>
  ) 
}

export default CloudServices
