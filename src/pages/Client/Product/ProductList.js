import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ManageProductReducers } from './../../../redux/Reducers/ManageProductReducers';
import { ManageCategoryReducers } from './../../../redux/Reducers/ManageCategoryReducers';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductActions';
import { GetAllCateAction } from '../../../redux/Actions/ManageCategoryActions';
import Product from '../../../components/Product/Product';

export default function ProductList(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch();
    const { lstProduct } = useSelector(state => state.ManageProductReducers);
    const { lstCate } = useSelector(state => state.ManageCategoryReducers);
    useEffect(() => {
        dispatch(GetAllProductAction())
        dispatch(GetAllCateAction())
    }, [])

    const renderItem = () => {
        return lstProduct?.map((item, index) => {
            return <Fragment>
                {id == item.Category_ID ? <Product key={index} product={item} /> : ''}
            </Fragment>
        })
    }
    const renderProduct = () => {
        return lstProduct?.slice(0, 4).map((item, index) => {
            return <Product key={index} product={item} />
        })
    }

    return (
        <div className='mt-56'>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <div className='mb-8 uppercase text-center text-2xl font-bold text-green-500'>
                        {lstCate?.map((cate, index) => {
                            return <Fragment>
                                {cate.id == id ? <div>{cate.CategoryName}</div> : ''}
                            </Fragment>
                        })}
                    </div>
                    <div className='grid grid-cols-4 text-center'>
                        {renderItem()}
                    </div>
                    <div className='mt-28 border-t pt-4'>
                        <h1 className='uppercase text-2xl'>Các sản phẩm khác</h1>
                        <div className='grid grid-cols-4'>
                            {renderProduct()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
