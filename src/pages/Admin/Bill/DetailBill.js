import React, { Fragment, useEffect } from 'react'
import { history } from '../../../App';
import { _admin, _bill } from '../../../utils/Utils/configPath';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { Table } from 'antd';
import { IMG } from '../../../utils/Settings/config';
import { useDispatch, useSelector } from 'react-redux';
import { GetBillDetail } from '../../../redux/Actions/ManageCheckoutActions';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductActions';

export default function DetailBill(props) {
    let { id } = props.match.params;

    const dispatch = useDispatch();

    const { lstBillDetail } = useSelector(state => state.ManageCartReducers);

    const { lstProduct } = useSelector(state => state.ManageProductReducers);


    useEffect(() => {
        dispatch(GetBillDetail(id));
        dispatch(GetAllProductAction())
    }, [])

    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'ProductName',
            width: '20%',
            render: (text, item) => {
                return <span className='text-base font-medium'>
                    {item.Product.ProductName}
                </span>
            }
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'ImageProduct',
            width: '12%',
            render: (text, item) => {

                return <Fragment >
                    <img className='h-36 w-36' src={`${IMG}${item.Product.ProductImage}`} alt={`${item.Product.ProductName}`} />
                </Fragment>


            }

        },
        {
            title: 'Mô tả',
            dataIndex: 'Description',
            render: (text, item) => {
                return <Fragment>
                    {lstProduct?.map((product, index) => {
                        return <Fragment key={index}>
                            {product.ProductName === item.Product.ProductName ? <span>{product.Description}</span> : ''}
                        </Fragment>
                    })}
                </Fragment>
            }
        },
        {
            title: 'Số lượng',
            dataIndex: 'Quantity',
            width: '6%',

        },
        {
            title: 'Giá tiền',
            dataIndex: 'Price',
            width: '10%',
            render: (text, item) => {
                return <span className='text-base font-medium text-red-500'>
                    {(item.Price * 1).toLocaleString()} <span className='underline'>đ</span>
                </span>
            }
        },
        {
            title: 'Giảm giá',
            dataIndex: 'Discount',
            width: '10%',
            render: (text, item) => {
                return <span className='text-base font-medium text-green-500'>
                    {item.Product.Discount !== 0 ? <span>{item.Product.Discount} %</span> : ''}
                </span>
            }

        },
        {
            title: 'Đã giảm giá',
            dataIndex: 'Price',
            width: '10%',
            render: (text, item) => {
                return <span className='text-base font-medium text-red-500'>
                    {(item.Price - item.Price * item.Product.Discount / 100).toLocaleString()} <span className='underline'>đ</span>
                </span>
            }
        }
    ]
    return (
        <Fragment>
            <div className='mt-4'>
                <div>
                    <button type='button' title='Trở về trang hóa đơn' className='text-4xl text-green-500 hover:text-green-700 border px-3 py-1 rounded border-green-500' onClick={() => {
                        history.push(`${_admin}${_bill}`)
                    }}>
                        <BsArrowReturnLeft />
                    </button>
                </div>
                <h2 className='text-4xl font-bold text-center text-green-500'>Chi tiết hóa đơn</h2>
                <div className='my-10 flex justify-end'>

                </div>
                <Table dataSource={lstBillDetail} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
