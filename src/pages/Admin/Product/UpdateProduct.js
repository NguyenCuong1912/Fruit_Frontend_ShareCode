import React, { Fragment, useEffect, useState } from 'react'
import { history } from '../../../App';
import { _admin, _product } from '../../../utils/Utils/configPath';
import { BsBackspace } from 'react-icons/bs';
import { Input, Select } from 'antd';
import { IMG } from '../../../utils/Settings/config';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailProductAction, UpdateProductAction } from '../../../redux/Actions/ManageProductActions';
import { GetAllCateAction } from '../../../redux/Actions/ManageCategoryActions';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function UpdateProduct(props) {
    const { TextArea } = Input;
    let { id } = props.match.params;
    const dispatch = useDispatch();

    const { detailProduct } = useSelector(state => state.ManageProductReducers);
    const { lstCate } = useSelector(state => state.ManageCategoryReducers);



    useEffect(() => {
        dispatch(GetDetailProductAction(id))
        dispatch(GetAllCateAction())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Category_ID: detailProduct.Category_ID,
            ProductName: detailProduct.ProductName,
            Price: detailProduct.Price,
            Discount: detailProduct.Discount,
            Description: detailProduct.Description,
            products: null,
        },
        validationSchema: Yup.object({
            Category_ID: Yup.string()
                .required("Không được trống !"),

            ProductName: Yup.string()
                .required("Không được trống !"),

            Price: Yup.number()
                .required("Không được trống !"),

            Discount: Yup.number()
                .required("Không được trống !"),

            Description: Yup.string()
                .required("Không được trống !"),


        }),
        onSubmit: values => {
            values.Discount *= 1;

            let dataFruits = new FormData();
            for (let key in values) {
                if (key !== 'products') {
                    dataFruits.append(key, values[key]);
                }
                else {
                    if (values.products !== null) {
                        dataFruits.append('products', values.products, values.products.name);
                    }
                }
            }

            dispatch(UpdateProductAction(id, dataFruits));

        }
    })
    function changeSelect(value) {
        formik.setFieldValue('Category_ID', value)
    }
    const [img, setImg] = useState('');
    const handleChangeFile = async (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImg(e.target.result) //Hinh base 64
            }
            formik.setFieldValue('products', file)
        }

    }
    return (
        <Fragment>
            <div>
                <div>
                    <button type='button' title='Trở về trang sản phẩm' className='text-4xl text-teal-500 hover:text-teal-700' onClick={() => {
                        history.push(`${_admin}${_product}`)
                    }}>
                        <BsBackspace />

                    </button>
                </div>
                <h1 className='text-center text-4xl font-bold text-teal-500'>Cập nhật sản phẩm</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Loại sản phẩm:</div>
                                <Select className='w-2/3' placeholder='Chọn loại sản phẩm' name='Category_ID' onChange={changeSelect} value={formik.values.Category_ID}>
                                    {lstCate.map((item, index) => {
                                        return <Select.Option key={index} value={item.id}>{item.CategoryName}</Select.Option>
                                    })}
                                </Select>
                                {formik.errors.Category_ID && formik.touched.Category_ID && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Category_ID}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Tên sản phẩm:</div>
                                <input type='text' name='ProductName'
                                    onChange={formik.handleChange} value={formik.values.ProductName} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-teal-500 focus:outline-none focus:border focus:border-teal-500' placeholder='Tên sản phẩm...' />
                                {formik.errors.ProductName && formik.touched.ProductName && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.ProductName}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Giá tiền:</div>
                                <input type='number' name='Price' onChange={formik.handleChange} value={formik.values.Price} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-teal-500 focus:outline-none focus:border focus:border-teal-500' placeholder='Giá tiền...' />
                                {formik.errors.Price && formik.touched.Price && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Price}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Ưu đãi:</div>
                                <input type='number' name='Discount' onChange={formik.handleChange} value={formik.values.Discount} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-teal-500 focus:outline-none focus:border focus:border-teal-500' placeholder='Ưu đãi...' />
                                {formik.errors.Discount && formik.touched.Discount && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Discount}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <span className='mr-2'>Hình ảnh:</span>
                                <input type='file' onChange={handleChangeFile} accept='image/jpeg, image/jpg, image/png' />
                            </div>
                            <div className='my-4'>
                                <img className='w-36 h-36 rounded-md' src={img === '' ? `${IMG}${detailProduct?.ProductImage}` : img} alt={detailProduct?.ProductName} />
                            </div>
                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>Mô tả:</div>
                                <TextArea name='Description' onChange={formik.handleChange} value={formik.values.Description} rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                                {formik.errors.Description && formik.touched.Description && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Description}</p>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='text-center p-3 border border-teal-600 w-36 text-xl font-bold rounded text-teal-500 hover:bg-teal-600 hover:text-white'>Cập nhật</button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
