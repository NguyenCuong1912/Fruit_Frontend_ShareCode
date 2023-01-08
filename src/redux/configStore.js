import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ManageAccountReducers } from './Reducers/ManageAccoutReducers';
import { ManageCategoryReducers } from './Reducers/ManageCategoryReducers';
import { ManageProductReducers } from './Reducers/ManageProductReducers';
import { ManageCartReducers } from './Reducers/ManageCartReducers';


const rootReducers = combineReducers({
    ManageAccountReducers,
    ManageCategoryReducers,
    ManageProductReducers,
    ManageCartReducers,
});


export const store = createStore(rootReducers, applyMiddleware(thunk));
