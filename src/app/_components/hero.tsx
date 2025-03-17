'use client'
import React, { useEffect } from 'react'
import bgstar from '@/assets/images/bg-star.png'
import { cn } from '@/libs/cn'

// image
import google from '@/assets/images/google.png'
import aws from '@/assets/images/aws.png'
import az from '@/assets/images/az.png'
import huawel from '@/assets/images/huawel.png'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll } from '@/contexts/ScrollContext'

function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { sectionRefs } = useScroll()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
    <>
      {/* ส่วนที่ 1 */}
      <section
        ref={sectionRefs.hero}
        className={cn(
          'relative w-full h-max lg:h-screen pb-14 lg:pb-0 bg-cover bg-bottom flex justify-center flex-col px-4 lg:px-[210px]'
        )}
        style={{ backgroundImage: `url(${bgstar.src})` }}
      >
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#020816] opacity-50" /> */}
        {/* Layer ที่ช่วยปรับสี Overlay */}
        <div className="absolute inset-0 bg-[#003094] mix-blend-color w-full h-full opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center lg:justify-center my-14 lg:my-0 h-full text-white text-center">
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8">
            <h1 className="text-[48px] lg:text-[80px] font-bold leading-snug lg:leading-none">
              Empowering the Future with Cloud Innovation{' '}
            </h1>
            <p className="text-sm lg:text-xl text-body">
              Whether you&apos;re looking to accelerate your digital transformation or just strive to become more agile
              and innovative through cloud technology, our team of cloud specialists is here to help you navigate your
              journey in the Cloud.
            </p>
          </motion.div>

          {/* Logo Icons */}
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="my-12 grid grid-cols-4 gap-4 lg:gap-8">
            {[aws, az, google, huawel].map((item, index) => (
              <div
                key={index}
                className="w-[80px] lg:w-[100px] max-w-full aspect-square grid place-content-center bg-white rounded-full relative"
              >
                <Image
                  src={item}
                  alt="cloud-logo"
                  width={60}
                  height={60}
                  className="absolute inset-0 m-auto"
                />
              </div>
            ))}
          </motion.div>
          {/* Button */}
          <Button link="https://cal.com/airbridges" titel="Book a Free Consultation" animation />
        </div>
      </section>
    </>
  )
}

export default Hero
