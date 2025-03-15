import CloudDetailBox from '@/components/cloud-datail-box'
import React from 'react'

import devops from '@/assets/images/devops.png'
import cloudshift from '@/assets/images/cloudshift.png'
import cloudstart from '@/assets/images/cloudstart.png'

function DetailCloud() {
  const cloudDetail = [
    {
      tage: 'SETUP',
      titel: 'CloudStart',
      subtitel: 'Your first step towards cloud solutions has never been simpler.',
      details: [
        'Thinking about transitioning to the Cloud? 85% of businesses worldwide are making use of cloud technology, and so should you!',
        'Building a solution in the Cloud can be a challenging task, especially if you’re new to cloud services. AWS, Azure and Google Cloud Platform all have hundreds of services available to start building your platform, so the best way forward may not seem obvious.',
        'AC’s CloudStart service is designed to help you make your first move to the Cloud.',
      ],
      image: cloudstart,
    },
    {
      tage: 'MIGRATION',
      titel: 'CloudShift',
      subtitel: 'The best way to move your solutions to a cloud platform.',
      details: [
        'Looking to shift your existing workloads from on-premises to the Cloud? Or maybe you need to switch from one cloud platform to another?',
        'Mapping out the path from your on-premises workload to the Cloud, or between different cloud platforms, is a complex process. From requirements gathering to the point of migration, this process requires a significant time investment, on top of maintaining your existing operations.',
        'AC’s CloudShift service follows our proven cloud model to ensure a smooth transition to the Cloud, giving you peace of mind that all dependencies are considered, and all possibilities are covered.',
      ],
      image: cloudshift,
    },
    {
      tage: 'DEVOPS',
      titel: 'CloudPace',
      subtitel:
        'Considering implementing DevOps in your cloud environment? Unsure which services will support and improve your ways of working?',
      details: [
        'Cloud computing and DevOps go hand-in-hand. The agile and on-demand model of cloud platforms provides the perfect environment to drive DevOps automation. However, mapping your DevOps processes to cloud services is not always straightforward.',
        'AC’s CloudPace service helps businesses review their DevOps goals and design cloud solutions around them. Whether you are looking to implement CI/CD Pipelines, build Infrastructure as Code, orchestrate your containers or anything in-between, AC utilises the cloud platforms services to help you achieve faster delivery, higher reliability and greater innovation.',
      ],
      image: devops,
    },
  ]
  return (
    <section className="bg-bg h-max px-4 py-32 flex flex-col justify-start items-center lg:!px-[160px] gap-5 lg:gap-[120px] relative">
      <CloudDetailBox
        image={cloudDetail[0].image.src}
        details={cloudDetail[0].details}
        subtitel={cloudDetail[0].subtitel}
        tage={cloudDetail[0].tage}
        titel={cloudDetail[0].titel}
        color="#1779EA"
      />
      <CloudDetailBox
        image={cloudDetail[1].image.src}
        details={cloudDetail[1].details}
        subtitel={cloudDetail[1].subtitel}
        tage={cloudDetail[1].tage}
        titel={cloudDetail[1].titel}
        color="#55E1DD"
        reverse
      />
      <CloudDetailBox
        image={cloudDetail[2].image.src}
        details={cloudDetail[2].details}
        subtitel={cloudDetail[2].subtitel}
        tage={cloudDetail[2].tage}
        titel={cloudDetail[2].titel}
        color="#9747FF"
      />
    </section>
  )
}

export default DetailCloud
