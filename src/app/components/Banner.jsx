import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='flex flex-col bg-[#fefcfd] py-10 px-10 gap-10'>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:text-4xl text-xl'>On s’occupe de <span className='text-[#5CD2DD]'>tout</span></div>
                <p>Office ipsum you must be muted. It meeting commitment busy pain.</p>
            </div>
            <div className='lg:flex block justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <Image src="/banner-icon-1.png" alt="/banner-icon-1" width={100} height={100} className={`w-40 object-cover`} />
                    <div className='text-2xl'>Livraison & Reprise</div>
                    <span className='text-lg text-gray-300'>Selon vos besoins</span>
                </div>
                <hr className='w-16 lg:m-0 m-auto'/>
                <div className='flex flex-col justify-center items-center'>
                    <Image src="/banner-icon-2.png" alt="/banner-icon-2" width={100} height={100} className={`w-40 object-cover`} />
                    <div className='text-2xl'>Nettoyage</div>
                    <span className='text-lg text-gray-300'>Selon vos besoins</span>
                </div>
                <hr className='w-16 lg:m-0 m-auto'/>
                <div className='flex flex-col justify-center items-center'>
                    <Image src="/banner-icon-3.png" alt="/banner-icon-3" width={100} height={100} className={`w-40 object-cover`} />
                    <div className='text-2xl'>Commande Illimitée</div>
                    <span className='text-lg text-gray-300'>Tout est possible</span>
                </div>
                <hr className='w-16 lg:m-0 m-auto' />
                <div className='flex flex-col justify-center items-center'>
                    <Image src="/banner-icon-4.png" alt="/banner-icon-4" width={100} height={100} className={`w-40 object-cover`} />
                    <div className='text-2xl'>Transport & Enlèvement</div>
                    <span className='text-lg text-gray-300'>On s’occupe de tout.</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
