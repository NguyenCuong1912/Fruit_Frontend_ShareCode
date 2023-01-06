import React from 'react'
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { _account, _add, _admin, _bill, _cart, _cate, _detail, _edit, _home, _login, _order, _product, _register } from './utils/Utils/configPath';
import Home from './pages/Client/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManageAccount from './pages/Admin/Account/ManageAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import UpdateAccount from './pages/Admin/Account/UpdateAccount';
import ManageCategory from './pages/Admin/Category/ManageCategory';
import AddCategory from './pages/Admin/Category/AddCategory';
import UpdateCategory from './pages/Admin/Category/UpdateCategory';
import ManageProduct from './pages/Admin/Product/ManageProduct';
import AddProduct from './pages/Admin/Product/AddProduct';
import UpdateProduct from './pages/Admin/Product/UpdateProduct';
import Cart from './pages/Client/Cart/Cart';
import ManageBill from './pages/Admin/Bill/ManageBill';
import DetailBill from './pages/Admin/Bill/DetailBill';
import OrderHistory from './pages/Client/User/OrderHistory';
import UpdateUser from './pages/Client/User/UpdateUser';
import ProductList from './pages/Client/Product/ProductList';
import ProductDetail from './pages/Client/Product/ProductDetail';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={_cart} exact Component={Cart} />
        <HomeTemplate path={`${_product}/:id`} exact Component={ProductList} />
        <HomeTemplate path={`${_detail}/:id`} exact Component={ProductDetail} />
        <HomeTemplate path={`${_account}${_edit}`} exact Component={UpdateUser} />
        <HomeTemplate path={`${_order}/:id`} exact Component={OrderHistory} />



        <HomeTemplate path={_login} exact Component={Login} />
        <HomeTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={ManageAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={UpdateAccount} />

        <AdminTemplate path={`${_admin}${_cate}`} exact Component={ManageCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_add}`} exact Component={AddCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_edit}/:id`} exact Component={UpdateCategory} />

        <AdminTemplate path={`${_admin}${_product}`} exact Component={ManageProduct} />
        <AdminTemplate path={`${_admin}${_product}${_add}`} exact Component={AddProduct} />
        <AdminTemplate path={`${_admin}${_product}${_edit}/:id`} exact Component={UpdateProduct} />

        <AdminTemplate path={`${_admin}${_bill}`} exact Component={ManageBill} />
        <AdminTemplate path={`${_admin}${_bill}${_detail}/:id`} exact Component={DetailBill} />


      </Switch>
    </Router>
  )
}
