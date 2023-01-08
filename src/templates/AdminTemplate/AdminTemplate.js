import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { USER_LOGIN } from '../../redux/Types/ManageAccountTypes';
import { Redirect, Route } from 'react-router';
import { Layout, Menu, message } from 'antd';
import { _account, _admin, _bill, _cate, _home, _login, _product } from './../../utils/Utils/configPath';
import { NavLink } from 'react-router-dom';
import { history } from './../../App';
import { _logo } from '../../utils/Utils/imgPath';
import _ from 'lodash'


const { Content, Sider } = Layout;


export default function AdminTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const { userLogin } = useSelector(state => state.ManageAccountReducers);
    if (!sessionStorage.getItem(USER_LOGIN)) {
        message.error('Bạn chưa đăng nhập!')
        return <Redirect to={_login} />
    }
    if (userLogin.account.Role !== 'ADMIN') {
        message.error('Bạn không có quyền truy cập vào trang này!')
        return <Redirect to={_home} />
    }


    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <div className='flex'>
            <NavLink to='/profile' className='flex'>
                <img className='w-14 h-14 rounded-full' src='https://www.collinsdictionary.com/images/full/apple_158989157.jpg' alt={userLogin.username} />
                <span className='flex items-center border-r-2 border-green-900 text-lg font-bold mx-4 pr-4 cursor-pointer text-black'>Xin chào!, {userLogin.account.Username}</span>
            </NavLink>
            <button onClick={() => {
                sessionStorage.removeItem(USER_LOGIN);
                history.push(`${_home}`);
                window.location.reload();
            }} className="self-center mr-8 px-4 py-3 border border-red-500 rounded-lg text-red-500 text-lg font-bold hover:text-white hover:bg-red-500">Đăng xuất</button>
        </div> : ''}
    </Fragment>
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }} >
                <Sider className='border-r' style={{ backgroundColor: '#669933' }}>
                    <div onClick={() => {
                        history.push(`${_home}`)
                    }} className="w-full flex justify-center my-4 cursor-pointer" title='Trang chủ'>
                        <img className='h-20' src={_logo} alt='HALONA' />
                    </div>
                    <Menu theme='white' defaultSelectedKeys={['1']} style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key='1' >
                            <NavLink className='text-black text-xl nav-link ' to={`${_admin}${_account}`} >Accounts</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' >
                            <NavLink className='text-black text-xl nav-link' to={`${_admin}${_cate}`} >Category</NavLink>
                        </Menu.Item>
                        <Menu.Item key='3' >
                            <NavLink className='text-black text-xl nav-link' to={`${_admin}${_product}`}>Product</NavLink>
                        </Menu.Item>
                        <Menu.Item key='4'  >
                            <NavLink className='text-black text-xl nav-link' to={`${_admin}${_bill}`}>Bill</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <div className='bg-white border-b shadow-lg'>
                        <div className='flex justify-end mt-1'>{operations}</div>
                    </div>
                    <Content style={{ margin: '0 16px', }}>
                        <div style={{ padding: 24, minHeight: 360, }}>

                            <Component {...propsRoute} />

                        </div>
                    </Content>
                    <div className='py-4 text-center border-t-2'>
                        Created by Quang Anh
                    </div>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}
