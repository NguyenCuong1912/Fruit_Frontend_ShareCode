import React, { useEffect } from 'react'
import HomeSlick from '../../../components/HomeSlick/HomeSlick'
import BannerLink from '../../../components/BannerLink/BannerLink'
import Product from '../../../components/Product/Product'
import { _main1, _main2 } from '../../../utils/Utils/imgPath'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductActions'

export default function Home() {
    const dispatch = useDispatch();
    const { lstProduct } = useSelector(state => state.ManageProductReducers);
    useEffect(() => {
        dispatch(GetAllProductAction())
    }, [])

    let productForeign = lstProduct.filter(function (item) {
        return item.Origin !== 'Việt Nam'
    })
    const renderProduct1 = () => {
        return productForeign.slice(0, 8).map((item, index) => {
            return <Product key={index} product={item} />
        })
    }
    let productVN = lstProduct.filter(function (item) {
        return item.Origin === 'Việt Nam'
    })
    const renderProduct2 = () => {
        return productVN.slice(0, 8).map((item, index) => {
            return <Product key={index} product={item} />
        })
    }

    return (
        <div className='mt-36' style={{ backgroundColor: '#fffdf1' }}>
            <HomeSlick />
            <div className='grid grid-cols-12'>
                <div className='col-start-3 col-span-8 mx-16'>
                    <BannerLink />
                    <div className='mt-16 grid grid-cols-3 items-center'>
                        <hr />
                        <span className='uppercase text-center text-3xl font-bold font-serif text-amber-900'>TRÁI CÂY NHẬP KHẨU</span>
                        <hr />
                    </div>
                    <div className='text-center text-lg font-medium '>
                        Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực phía bắc
                    </div>
                    <div className='grid grid-cols-4 my-8'>
                        {renderProduct1()}
                    </div>
                    <div className='text-center my-4'>
                        <button className='border py-2 px-8 border-green-500 rounded-3xl text-green-500 bg-white font-medium text-base hover:bg-green-500 hover:text-white'>
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center bg-white flex justify-center'>
                <img className='h-72' src={_main1} alt='banner' />
                <img className='-ml-32 h-72' src={_main2} alt='banner2' />
            </div>
            <div className='grid grid-cols-12 pb-32'>
                <div className='col-start-3 col-span-8 mx-16'>
                    <div className='mt-16 grid grid-cols-3 items-center'>
                        <hr />
                        <span className='uppercase text-center text-3xl font-bold font-serif text-amber-900'>TRÁI CÂY NỘI ĐỊA</span>
                        <hr />
                    </div>
                    <div className='text-center text-lg font-medium '>
                        Có hàng ngàn mẫu hoa quả tươi đủ loại cho bạn chọn!
                    </div>
                    <div className='grid grid-cols-4 my-8'>
                        {renderProduct2()}
                    </div>
                    <div className='text-center my-4'>
                        <button className='border py-2 px-8 border-green-500 rounded-3xl text-green-500 bg-white font-medium text-base hover:bg-green-500 hover:text-white'>
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
