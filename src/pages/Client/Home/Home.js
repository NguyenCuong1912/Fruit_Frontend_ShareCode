import React from 'react'
import HomeSlick from '../../../components/HomeSlick/HomeSlick'
import BannerLink from '../../../components/BannerLink/BannerLink'

export default function Home() {
    return (
        <div className='mt-36'>
            <HomeSlick />
            <div className='grid grid-cols-12'>
                <div className='col-start-3 col-span-8 mx-16'>
                    <BannerLink />
                </div>
            </div>
        </div>
    )
}
