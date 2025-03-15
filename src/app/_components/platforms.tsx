'use client'
import React, { useState } from 'react'

import google from '@/assets/images/google.png'
import aws from '@/assets/images/aws.png'
import az from '@/assets/images/az.png'
import huawel from '@/assets/images/huawel.png'
import Image from 'next/image'
import { BoxBody, BoxContent } from '@/components/ui/box'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './choose-cloud'

function Platfroms() {
  const [platform, setPlatform] = useState<number>(1)

  const platformsData = [
    {
      id: 1,
      name: 'Amazon Web Services',
      description:
        'Automation Consultants is an AWS Select partner. With a large team of qualified AWS Solution Architects and specialty AWS experts, Automation Consultants can help you migrate workloads to AWS, design and optimise them in AWS and create automated DevOps solutions in AWS.',
    },
    {
      id: 2,
      name: 'Microsoft Azure',
      description:
        'Automation Consultants is a Microsoft Gold Partner. Our team of Azure experts can help you migrate workloads to Azure, design and optimise them in Azure and create automated DevOps solutions in Azure.',
    },
    {
      id: 3,
      name: 'Google Cloud Platform',
      description:
        'Automation Consultants is a Google Cloud Partner. Our team of Google Cloud experts can help you migrate workloads to GCP, design and optimise them in GCP and create automated DevOps solutions in GCP.',
    },
    {
      id: 4,
      name: 'Huawei Cloud',
      description:
        'Automation Consultants is a Huawei Cloud Partner. Our team of Huawei Cloud experts can help you migrate workloads to Huawei Cloud, design and optimise them in Huawei Cloud and create automated DevOps solutions in Huawei Cloud.',
    },
  ]

  const handleClick = (id: number) => {
    setPlatform(id)
  }

  return (
    <section className="bg-[#020816] lg:bg-[radial-gradient(circle_800px_at_bottom_left,#003094_0%,#003094_24%,#020816_100%)] h-max px-4 lg:py-32 lg:p-32 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-start items-center gap-10 lg:gap-14 container mx-auto">
        <div className="space-y-2 lg:space-y-6 flex flex-col items-center pt-14">
          <motion.div
            variants={fadeInUp}
            className="border border-white/10 rounded-full px-8 py-2 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
            <span className="text-white text-sm lg:text-2xl">Platforms</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-white text-2xl lg:text-5xl">4 Major Cloud Platforms</h3>
          </motion.div>
        </div>
        <div className="grid grid-cols-4 gap-4 lg:gap-20 w-full">
          {[aws, az, google, huawel].map((item, index) => (
            <motion.div
              animate={{ scale: platform === index + 1 ? 1.1 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 260, damping: 20 }}
              variants={fadeInUp}
              key={index}
              onClick={() => handleClick(index + 1)}
              className="w-full cursor-pointer max-w-full aspect-square grid place-content-center bg-white rounded-full relative"
            >
              <Image
                src={item}
                alt="cloud-logo"
                className="absolute inset-0 m-auto w-[60px] md:w-[100px] lg:w-[140px]"
              />
            </motion.div>
          ))}
        </div>
        {/* Box */}
        <motion.div variants={fadeInUp}>
          <BoxBody className="rounded-[18px]">
            <BoxContent className="space-y-6 lg:space-y-2">
              <h3 className="text-white text-2xl">{platformsData[platform - 1].name}</h3>
              <p className="text-body text-base lg:text-lg leading-loose lg:leading-relaxed">
                {platformsData[platform - 1].description}
              </p>
            </BoxContent>
          </BoxBody>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Platfroms
