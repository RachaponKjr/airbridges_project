/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import star from '@/assets/images/star1.png'
import Button from '@/components/ui/button'

function WhatYouWant() {
    return (
        <div className='h-max lg:h-[750px] w-full relative px-4 lg:px-12 flex flex-col gap-20'>
            <div
                className='h-full flex flex-col gap-12 items-center justify-center relative bg-no-repeat bg-cover pt-40 lg:pt-0'
                style={{
                    backgroundImage: `url(${star.src})`,
                    backgroundPosition: 'bottom',
                    mixBlendMode: 'screen',
                }}
            >
                <div className='w-[965px] max-w-full text-center text-white space-y-2'>
                    <h3 className='text-2xl lg:text-[56px]'>Don't see what you want?</h3>
                    <p className='text-sm lg:text-2xl'>
                        AC has considerable experience in helping companies reap the benefits of the Cloud,
                        both on a small and large scale. Get in touch with us today to find out how our cloud
                        consulting services can transform your business processes and capabilities.
                    </p>
                </div>
                <Button link='https://cal.com/airbridges' titel='Book a Free Consultation' />
            </div>
        </div>
    )
}

export default WhatYouWant
