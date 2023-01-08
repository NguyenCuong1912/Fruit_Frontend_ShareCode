import { message } from "antd";
import { manageProductServices } from "../../services/ManageProductServices";
import { history } from "../../App";
import { _admin, _product } from "../../utils/Utils/configPath";
import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../Types/ManageProductTypes";




export const AddProductAction = (dataProduct) => {
    return async dispatch => {
        try {
            const result = await manageProductServices.addProduct(dataProduct);
            if (result.status === 200) {
                history.push(`${_admin}${_product}`)
                await message.success("Thêm mới thành công!")
            }
            else {
                message.error("Thêm mới thất bại!")
            }
        } catch (error) {
            message.error("Loại sản phẩm này đã tồn tại!")
            console.log('error', error.response?.data)
        }
    }
}


export const GetAllProductAction = (name = '') => {
    return async dispatch => {
        try {
            const result = await manageProductServices.getAll(name);
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    dataProduct: result.data
                })
            }
            else {
                message.error("Không lấy được sản phẩm!")
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}
export const GetDetailProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageProductServices.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_PRODUCT,
                    dataDetail: result.data
                })
            }
            else {
                message.warning('error!')
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const UpdateProductAction = (id, data) => {
    return async dispatch => {
        try {

            const result = await manageProductServices.updateProduct(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật sản phẩm thành công!")
                history.push(`${_admin}${_product}`)
            }
            else {
                message.error("Cập nhật sản phẩm thất bại!")
            }
        } catch (error) {
            message.error("Cập nhật sản phẩm thất bại!!")
            console.log('error', error.response?.data)

        }
    }
}

export const DeleteProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageProductServices.delProduct(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllProductAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            message.warning('Xóa thất bại!')
            console.log('error', error.response?.data)

        }
    }
}