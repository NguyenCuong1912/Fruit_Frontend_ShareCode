
import { GET_ALL_CATE, GET_DETAIL_CATE } from './../Types/ManageCategoryTypes';

const initialState = {
    lstCate: [],
    detailCate: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManageCategoryReducers = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_CATE: {
            state.lstCate = action.dataCate
            return { ...state }
        }
        case GET_DETAIL_CATE: {
            state.detailCate = action.dataDetail
            return { ...state }
        }


        default:
            return state
    }
}
