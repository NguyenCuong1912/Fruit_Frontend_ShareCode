
import React, { Fragment } from 'react'
import { _banner, _logo } from '../../../utils/Utils/imgPath'
import { AiFillFacebook, AiFillHome, AiFillPhone, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <Fragment>

            <div className='relative'>
                <div style={{ backgroundImage: `url(${_banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className='bg-gray-500 opacity-80 h-96' />
                </div>
                <div className='grid grid-cols-12 absolute top-0'>
                    <div className='col-start-3 col-span-8 mx-16'>
                        <div className='grid grid-cols-4 my-8 '>
                            <div className='opacity-100 mr-4'>
                                <img src={_logo} alt='Halona' />
                                <div className='text-white'>
                                    <h1 className='text-white text-lg font-bold'>Về chúng tôi</h1>
                                    <span>
                                        Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại thực phẩm từ thiên nhiên.
                                    </span>
                                </div>
                            </div>
                            <div className='mx-4'>
                                <h1 className='text-white text-lg font-bold'>Liên hệ</h1>
                                <div className='text-white flex items-center my-2'>
                                    <AiFillHome className='text-xl -mt-1' />
                                    <span className='text-lg ml-2'>
                                        335 Cầu Giấy, Hà Nội
                                    </span>
                                </div>
                                <div className='text-white flex items-center my-2'>
                                    <AiFillPhone className='text-xl -mt-1' />
                                    <span className='text-lg ml-2'>
                                        0986.989.626 - 0986.989.626
                                    </span>
                                </div>
                                <div className='text-white flex items-center my-2'>
                                    <AiOutlineMail className='text-xl -mt-1' />
                                    <span className='text-lg ml-2'>
                                        Halona@gmail.com
                                    </span>
                                </div>
                                <div className='text-white flex items-center my-2'>
                                    <AiFillFacebook className='text-xl -mt-1' />
                                    <span className='text-lg ml-2'>
                                        fb.com
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-white text-lg font-bold'>Tin tức</h1>
                                <div className='text-white my-2'>
                                    <span className='text-lg cursor-pointer hover:text-green-500'>
                                        Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                                    </span>
                                </div>
                                <div className='text-white my-2'>
                                    <span className='text-lg cursor-pointer hover:text-green-500'>
                                        Eat Clean - bí kíp để có thân hình xinh như mơ của cô nàng 9x
                                    </span>
                                </div>
                                <div className='text-white my-2'>
                                    <span className='text-lg cursor-pointer hover:text-green-500'>
                                        Lấy lại vòng eo con kiến nhờ công thức đơn giản từ củ đậu và rau cải
                                    </span>
                                </div>
                                <div className='text-white my-2'>
                                    <span className='text-lg cursor-pointer hover:text-green-500'>
                                        KM: Tháng giải phóng mỡ thừa, da xấu, độc tố trong cơ thể
                                    </span>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-white text-lg font-bold'>Về chúng tôi</h1>
                                <ul className='list-disc ml-4 text-white text-base'>
                                    <li className='cursor-pointer hover:text-green-500'>
                                        Giới thiệu
                                    </li>
                                    <li className='cursor-pointer hover:text-green-500'>
                                        Lĩnh vực hoạt động
                                    </li>
                                    <li className='cursor-pointer hover:text-green-500'>
                                        Chính sách chất lượng
                                    </li>
                                    <li className='cursor-pointer hover:text-green-500'>
                                        Triết lí kinh doanh
                                    </li>
                                    <li className='cursor-pointer hover:text-green-500'>
                                        Năng lực - cơ sở vật chất
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-3 text-lg pl-48' style={{ backgroundColor: '#669933' }}>
                Copyright 2023 © by <span className='text-red-500 font-bold'>Quang Anh</span>
            </div>
        </Fragment>

    )
}
