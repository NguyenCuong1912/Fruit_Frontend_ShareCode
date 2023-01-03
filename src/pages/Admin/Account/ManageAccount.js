import { Input, Popconfirm, Table } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { history } from '../../../App';
import { _account, _add, _admin, _edit } from '../../../utils/Utils/configPath';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserAction, GetListUserAction } from '../../../redux/Actions/ManageAccountActions';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";


const { Search } = Input;

export default function ManageAccount() {
    const dispatch = useDispatch();
    const { lstUser } = useSelector(state => state.ManageAccountReducers);

    useEffect(() => {
        dispatch(GetListUserAction())
    }, [])

    const onSearch = (value) => {
        dispatch(GetListUserAction(value))
    };

    const cancel = (e) => {
        console.log(e);
    };


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tài khoản',
            dataIndex: 'Username'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'PhoneNumber',
            render: (text, user) => {
                return <Fragment>
                    {user.PhoneNumber === null ?
                        <div className='text-green-500 flex text-base italic'>
                            <span>Chưa có số điện thoại...</span>
                        </div>
                        : <span>{user.PhoneNumber}</span>}
                </Fragment>
            },
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'Address',
            render: (text, user) => {
                return <Fragment>
                    {user.Address === null ?
                        <div className='text-green-500 flex text-base italic'>
                            <span>Chưa có địa chỉ...</span>
                        </div>
                        : <span>{user.Address}</span>}
                </Fragment>
            },
        },
        {
            title: 'Quyền',
            dataIndex: 'Role',
            render: (text, user) => {
                return <Fragment>
                    {user.Role === 'ADMIN' ? <span className='text-red-500'>{user.Role}</span> : <span>{user.Role}</span>}
                </Fragment>
            }
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, user) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_account}${_edit}/${user.id}`)
                    }}>
                        <BsPencilSquare style={{ fontSize: 25 }} />
                    </button>

                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' >
                        <Popconfirm
                            title="Bạn có muốn xóa tài khoản không?"
                            onConfirm={() => { dispatch(DeleteUserAction(user.id)) }}
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                        >
                            <BsFillTrashFill style={{ fontSize: 25 }} />
                        </Popconfirm>
                    </button>
                </div>
            },
        },
    ]
    return (
        <Fragment>
            <div className='container mt-4'>
                <div className='flex justify-center'>
                    <h2 className='text-4xl font-bold text-green-500'>Quản lý Tài khoản</h2>
                </div>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-green-600 rounded w-24 h-10 text-lg font-bold text-green-500 hover:text-white hover:bg-green-600' onClick={() => {
                        history.push(`${_admin}${_account}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/2'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstUser} columns={columns} rowKey='id' />
            </div>
        </Fragment>
    )
}
