import React from 'react'

export default function Product() {
    return (
        <div className='m-2 relative border-2 border-green-500 rounded-3xl bg-white shadow-lg cursor-pointer text-center'>
            <img className='rounded-t-3xl' src='../img/products/tao/envy.jpg' alt='' />
            <div className='absolute top-4 left-4 h-12 w-12 bg-red-500 rounded-full text-white flex items-center justify-center'>
                10%
            </div>
            <div className='my-2 text-lg font-bold font-serif'>
                Táo envy new Zealand
            </div>
            <div className='my-2 flex justify-around '>
                <div>
                    dvt:kg
                </div>
                <div>
                    Giá gốc: <span className='line-through'>199000 đ</span>
                </div>
            </div>
            <div className='my-2 text-lg text-red-500 font-bold'>
                150000 d
            </div>
            <button className='my-2 border py-2 px-8 border-green-600 rounded-3xl bg-green-500 text-white font-medium hover:bg-white hover:text-green-500'>
                Mua ngay
            </button>
        </div>
    )
}
