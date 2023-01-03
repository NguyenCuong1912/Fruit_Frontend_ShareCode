import React from 'react'
import { _link1, _link2, _link3 } from '../../utils/Utils/imgPath'

export default function BannerLink() {
    return (
        <div className='grid grid-cols-3 my-16'>
            <div className='mx-2 shadow-lg drop-shadow-lg rounded-md border-2 border-green-500'>
                <div className='w-full h-48 rounded-md cursor-pointer flex items-center justify-center text-white hover:scale-105' style={{ backgroundImage: `url(${_link1})`, backgroundSize: 'cover' }}>
                    <div className='text-center font-bold italic'>
                        <span className='text-4xl'>Rau củ tươi</span>
                        <br />
                        <span className='text-2xl'>Được thẩm định rõ ràng</span>
                    </div>
                </div>
            </div>
            <div className='mx-2 shadow-lg drop-shadow-lg rounded-md border-2 border-green-500'>
                <div className='w-full h-48 rounded-md cursor-pointer flex items-center justify-center text-white hover:scale-105' style={{ backgroundImage: `url(${_link2})`, backgroundSize: 'cover' }}>
                    <div className='text-center font-bold italic'>
                        <span className='text-4xl'>Thực phẩm sạch</span>
                        <br />
                        <span className='text-2xl'>Quy trình sản xuất kin</span>
                    </div>
                </div>
            </div>
            <div className='mx-2 shadow-lg drop-shadow-lg rounded-md border-2 border-green-500'>
                <div className='w-full h-48 rounded-md cursor-pointer flex items-center justify-center text-white hover:scale-105' style={{ backgroundImage: `url(${_link3})`, backgroundSize: 'cover' }}>
                    <div className='text-center font-bold italic'>
                        <span className='text-4xl'>Trái cây tươi</span>
                        <br />
                        <span className='text-2xl'>Nhập khẩu & Trong nước</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
