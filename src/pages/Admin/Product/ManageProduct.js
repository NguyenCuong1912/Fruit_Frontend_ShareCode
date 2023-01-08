import React, { Fragment, useEffect } from 'react'
import { history } from '../../../App';
import { _add, _admin, _edit, _product } from '../../../utils/Utils/configPath';
import { Input, Popconfirm, Table } from 'antd';
import { DeleteProductAction, GetAllProductAction } from './../../../redux/Actions/ManageProductActions';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCateAction } from '../../../redux/Actions/ManageCategoryActions';
import { IMG } from '../../../utils/Settings/config';



export default function ManageProduct() {
    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducers);
    const { lstCate } = useSelector(state => state.ManageCategoryReducers);
    useEffect(() => {
        dispatch(GetAllProductAction())
        dispatch(GetAllCateAction())
    }, [])

    const { Search } = Input;
    const onSearch = (value) => {
        dispatch(GetAllProductAction(value))
    };
    const cancel = (e) => {
        console.log(e);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '2%'
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'CategoryName',
            render: (text, item) => {
                return <Fragment>
                    {lstCate.map((lst, index) => {
                        return <span key={index}>{lst.id === item.Category_ID ? <span>{lst.CategoryName}</span> : ''}</span>
                    })}
                </Fragment>
            },
            width: '10%',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'ProductName',
            width: '10%',
        },
        {
            title: 'Xuất xứ',
            dataIndex: 'Origin',
            width: '10%',
        },
        {
            title: 'Đơn vị tính',
            dataIndex: 'Unit',
            width: '5%',
        },

        {
            title: 'Hình ảnh',
            dataIndex: 'ProductImage',
            render: (text, item) => {
                return <Fragment>
                    <img className='h-36 w-36' src={`${IMG}${item.ProductImage}`} alt={item.ProductName} />
                </Fragment>
            },
            width: '12%'

        },

        {
            title: 'Mô tả',
            dataIndex: 'Description',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'Price',
            width: '10%',
            render: (text, item) => {
                return <Fragment>
                    {(item.Price * 1).toLocaleString()} <span className='underline'>đ</span>
                </Fragment>
            },

        },
        {
            title: 'Giảm giá',
            dataIndex: 'Discount',
            width: '10%',
            render: (text, item) => {
                return <Fragment>
                    {item.Discount} %
                </Fragment>
            },

        },

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_product}${_edit}/${item.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa'>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa sản phẩm không?"
                            onConfirm={() => { dispatch(DeleteProductAction(item.id)) }}
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                        >
                            <DeleteOutlined style={{ fontSize: 25 }} />
                        </Popconfirm>
                    </button>
                </div>
            },
            width: '10%'

        },

    ]
    return (
        <Fragment>
            <div className='mt-4'>
                <div className='flex justify-center'>
                    <h2 className='text-4xl font-bold text-green-500 flex items-center'>Quản lý sản phẩm</h2>

                </div>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-green-600 rounded w-24 h-10 text-lg font-bold text-green-500 hover:text-white hover:bg-green-600' onClick={() => {
                        history.push(`${_admin}${_product}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstProduct} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
