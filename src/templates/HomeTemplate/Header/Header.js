

import React from 'react'
import { NavLink } from 'react-router-dom';
import { _logo } from '../../../utils/Utils/imgPath';
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { _login } from '../../../utils/Utils/configPath';

export default function Header() {
    return (
        <div className='fixed top-0 w-full z-50'>
            <div style={{ backgroundColor: '#669933' }}>
                <div className='grid grid-cols-12'>
                    <div className='col-start-3 col-span-8 py-2 mx-16 text-white flex justify-between'>
                        <div>
                            Chuyên cung cấp thực phẩm sạch | Halona Fruist
                        </div>
                        <div className='flex'>
                            <NavLink to={_login} className='text-white mx-2 opacity-70 hover:opacity-100 hover:text-white' >
                                Tài khoản
                            </NavLink>
                            <NavLink to='' className='text-white mx-2 opacity-70 hover:opacity-100 hover:text-white'>
                                Thanh toán
                            </NavLink>
                            <NavLink to='' className='text-white mx-2 opacity-70 hover:opacity-100 hover:text-white'>
                                Cửa hàng
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 border-b pb-2 shadow-lg bg-white'>
                <div className='col-start-3 col-span-8 mx-16'>
                    <div className='grid grid-cols-4'>
                        <img className='h-24' src={_logo} alt='Halona' />
                        <div className='flex items-center'>
                            <div className='w-full flex h-10 border rounded-l'>
                                <input className='h-10 border w-4/5 pl-2' placeholder='Tìm kiếm' />
                                <div className='w-1/5 flex items-center justify-center rounded-r' style={{ backgroundColor: '#669933' }}>
                                    <AiOutlineSearch className='text-2xl text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 flex items-center ml-8'>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Trang chủ
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Sản phẩm
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Giới thiệu
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Tin tức
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Liên hệ
                            </NavLink>
                            <NavLink to=''>
                                <AiOutlineShopping className='ml-4 text-3xl text-black hover:text-green-600' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
