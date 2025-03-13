import React from 'react'
import bgstar from '@/assets/images/bg-star.png'
import { cn } from '@/libs/cn'

// image
import google from '@/assets/images/google.png'
import aws from '@/assets/images/aws.png'
import az from '@/assets/images/az.png'
import huawel from '@/assets/images/huawel.png'
import Image from 'next/image'

function Hero() {
  return (
    <>
      {/* ส่วนที่ 1 */}
      <section
        className={cn(
          'relative w-full h-max lg:h-screen pb-14 lg:pb-0 bg-cover bg-bottom flex justify-center flex-col px-4 lg:px-[210px]'
        )}
        style={{ backgroundImage: `url(${bgstar.src})` }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#020816] opacity-100" />
        {/* Layer ที่ช่วยปรับสี Overlay */}
        <div className="absolute inset-0 bg-[#003094] mix-blend-color w-full h-full opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center lg:justify-center my-14 lg:my-0 h-full text-white text-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl lg:text-[80px] font-bold leading-snug lg:leading-none">
              Empowering the Future with Cloud Innovation{' '}
            </h1>
            <p className="text-sm lg:text-xl text-body">
              Whether you&apos;re looking to accelerate your digital transformation or just strive to become more agile
              and innovative through cloud technology, our team of cloud specialists is here to help you navigate your
              journey in the Cloud.
            </p>
          </div>

          {/* Logo Icons */}
          <div className="my-12 grid grid-cols-4 gap-4 lg:gap-8">
            {[aws, az, google, huawel].map((item, index) => (
              <div
                key={index}
                className="w-[80px] lg:w-[100px] max-w-full aspect-square grid place-content-center bg-white rounded-full relative"
              >
                <Image
                  src={item} // ✅ ใช้ item แทน aws
                  alt="cloud-logo"
                  width={60}
                  height={60}
                  className="absolute inset-0 m-auto"
                />
              </div>
            ))}
          </div>
          {/* Button */}
          <button className="py-4 px-10 cursor-pointer min-w-[300px] rounded-[792.31px] bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#1779EA_0%,_#003094_100%)] shadow-[inset_0px_4px_28.5px_rgba(255,255,255,0.4),_-1px_4px_23.8px_-11px_#003094]
          hover:bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#c0deff_0%,_#0050f7_100%)] hover:shadow-[-1px_-1px_15.8px_0px_#1779EA]
          ">
            <span className="text-lg text-white">Book a Free Consultation</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
