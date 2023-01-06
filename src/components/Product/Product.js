import React from 'react'
import { IMG } from '../../utils/Settings/config'
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { ADD_CART } from '../../redux/Types/ManageCartTypes';
import { NavLink } from 'react-router-dom';
import { _detail } from '../../utils/Utils/configPath';

export default function Product(props) {
    const dispatch = useDispatch();
    const { product } = props;
    return (
        <div className='m-2 relative border-2 border-green-500 rounded-3xl bg-white shadow-lg cursor-pointer text-center'>
            <NavLink to={`${_detail}/${product.id}`}>
                <img title={product.ProductName} className='rounded-t-3xl h-64 w-full' src={`${IMG}${product.ProductImage}`} alt={`${product.ProductName}`} />
            </NavLink>
            {product.Discount > 0 ? <div className='absolute top-4 left-4 h-12 w-12 bg-red-500 rounded-full text-white flex items-center justify-center'>
                {product.Discount}%
            </div> : ''}
            <div className='my-2 text-lg font-bold font-serif' title={product.ProductName}>
                {_.truncate(product.ProductName, { 'length': 20, })}
            </div>
            <div className='my-2 flex justify-around '>
                <div>
                    dvt:{product.Unit}
                </div>
                <div>
                    Giá gốc: <span className='line-through'>{(product.Price * 1).toLocaleString()} đ</span>
                </div>
            </div>
            <div className='my-2 text-lg text-red-500 font-bold'>
                {(product.Price - product.Price * product.Discount / 100).toLocaleString()} đ
            </div>
            <button onClick={() => {
                dispatch({
                    type: ADD_CART,
                    data: {
                        item: product,
                        number: 1
                    }
                })
                message.success('Sản phẩm đã được thêm vào giỏ hàng')
            }} className='my-2 border py-2 px-8 border-green-600 rounded-3xl bg-green-500 text-white font-medium hover:bg-white hover:text-green-500'>
                Mua ngay
            </button>
        </div>
    )
}
