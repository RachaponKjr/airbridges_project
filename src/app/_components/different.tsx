import React from 'react'

import bgstar from '@/assets/images/bg-star.png'

import think from "@/assets/svg/icon/think.svg"
import lock from "@/assets/svg/icon/lock.svg"
import check from "@/assets/svg/icon/check.svg"
import setting from "@/assets/svg/icon/setting.svg"

import Image from 'next/image'
function Different() {

    const different = [
        {
            image: think,
            title: 'Drive value',
            description: 'We continuously assess how we can deliver the most value to you and prioritise our work to ensure you can get the most out of your cloud solutions'
        },
        {
            image: lock,
            title: 'Promote innovation',
            description: 'Our team has a wide range of skills and experience, allowing us to approach problem-spaces from unique perspectives and deliver innovative solutions'
        },
        {
            image: check,
            title: 'Have proven success',
            description: 'We harness proven processes to maximise return on investment and consistently deliver projects to the highest standard, for example our CloudShift model'
        },
        {
            image: setting,
            title: 'Are provider agnostic',
            description: 'Our cloud services are tailored to meet your requirements, no matter what platform you’re using'
        },
    ]

    return (
        <section className='bg-cover bg-bottom relative w-full h-max px-4 lg:py-32 lg:p-32 flex flex-col gap-20'
            style={{ backgroundImage: `url(${bgstar.src})` }}
        >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#020816] opacity-100" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b via-transparent to-[#020816] opacity-100" />
            {/* Layer ที่ช่วยปรับสี Overlay */}
            <div className="absolute inset-0 bg-[#003094] mix-blend-color w-full h-full opacity-80"></div>
            <div className='max-w-[1024px] mx-auto container z-10 space-y-20'>
                <div className='text-center text-white  space-y-4'>
                    <h2 className='text-2xl lg:text-6xl font-bold'>What makes us different?</h2>
                    <p className='text-sm lg:text-2xl leading-loose'>Automation Consultants is able to:</p>
                </div>
                <div className='flex flex-col gap-10 lg:gap-28 px-2 lg:px-12'>
                    {different.map((item, index) => {
                        return (
                            <div key={index + 1} className='flex items-center gap-4 lg:gap-10'>
                                <div className='min-w-[60px] lg:min-w-[105px] aspect-square rounded-full grid place-content-center border border-white/80 bg-box-gradient shadow-[0px_0px_44.492px_0px_#3F3DB0]'>
                                    <Image src={item.image} alt={item.title} className='w-[30px] lg:w-[62px] aspect-square' />
                                </div>
                                <div className='shrink'>
                                    <h3 className='text-base lg:text-[40px] text-white font-bold'>{item.title}</h3>
                                    <p className='text-sm lg:text-2xl text-body'>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Different