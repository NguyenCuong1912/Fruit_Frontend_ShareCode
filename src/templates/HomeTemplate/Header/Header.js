

import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { _logo } from '../../../utils/Utils/imgPath';
import { AiOutlineCaretDown, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { _account, _cart, _edit, _home, _login, _order, _product } from '../../../utils/Utils/configPath';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCateAction } from '../../../redux/Actions/ManageCategoryActions';
import { Dropdown, Menu, Space } from 'antd';
import { history } from '../../../App';
import { USER_LOGIN } from '../../../redux/Types/ManageAccountTypes';
import { BsPersonCircle } from 'react-icons/bs';
import _ from 'lodash'

export default function Header() {
    const dispatch = useDispatch();
    const { lstCate } = useSelector(state => state.ManageCategoryReducers);
    const { userLogin } = useSelector(state => state.ManageAccountReducers);
    const { cart } = useSelector(state => state.ManageCartReducers);

    useEffect(() => {
        dispatch(GetAllCateAction())
    }, [])

    let number = 0;
    cart?.forEach(element => {
        number += element.Quantity
    })

    const productCate = (
        <Menu>
            {lstCate?.map((cate, index) => {
                return <Fragment key={index}>
                    <Menu.Item key={cate.id}>
                        <button onClick={() => {
                            history.push(`${_product}/${cate.id}`)
                        }} className='pr-20 text-base hover:text-green-500 hover:font-bold'>{cate.CategoryName}</button>
                    </Menu.Item>
                </Fragment>
            })}
        </Menu>
    );

    const menu = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_account}${_edit}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:font-bold hover:text-green-500">Thông tin tài khoản</button>,
                    key: '0',
                },
                {
                    label: <Fragment>
                        <button onClick={() => {
                            history.push(`${_order}/${userLogin.account.id}`);
                            window.location.reload();
                        }} className="self-center px-4 py-2 hover:font-bold hover:text-green-500">Lịch sử đặt hàng</button>
                    </Fragment>,
                    key: '1',
                },
                {
                    label: <button onClick={() => {
                        sessionStorage.removeItem(USER_LOGIN);
                        history.push(`${_home}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:font-bold hover:text-green-500">Đăng xuất</button>,
                    key: '2',
                },
            ]}
        />
    )

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ?
            <Dropdown
                overlay={menu}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='flex items-center text-white opacity-70 cursor-pointer hover:text-white'>
                            <BsPersonCircle className='text-xl mr-1' />
                            <span className='flex items-center text-base font-bold'>{userLogin.account.Username}</span>
                        </div>
                    </Space>
                </span>
            </Dropdown>
            : <Fragment>
                <NavLink to={_login} className='text-white mx-2 opacity-70 hover:opacity-100 hover:text-white' >
                    Tài khoản
                </NavLink>
            </Fragment>}
    </Fragment>
    return (
        <div className='fixed top-0 w-full z-50'>
            <div style={{ backgroundColor: '#669933' }}>
                <div className='grid grid-cols-12'>
                    <div className='col-start-3 col-span-8 py-2 mx-16 text-white flex items-center justify-between'>
                        <div>
                            Chuyên cung cấp thực phẩm sạch | Halona Fruist
                        </div>
                        <div className='flex items-center'>
                            {operations}
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
                        <div className='col-span-2 flex items-center'>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Trang chủ
                            </NavLink>

                            <div className='cursor-pointer text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                <Dropdown overlay={productCate}>
                                    <div className='text-black hover:text-white' onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Sản phẩm
                                            <AiOutlineCaretDown />
                                        </Space>
                                    </div>
                                </Dropdown>
                            </div>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Giới thiệu
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Tin tức
                            </NavLink>
                            <NavLink to='' className='text-black text-base px-2 py-1 mx-2 font-medium rounded-full hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white'>
                                Liên hệ
                            </NavLink>
                            <NavLink to={_cart} className='flex'>
                                <AiOutlineShopping className='ml-4 text-3xl text-black hover:text-green-600' />
                                <span className='text-base text-red-500 -mt-1'>({number})</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
