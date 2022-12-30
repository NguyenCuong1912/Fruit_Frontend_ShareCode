import React from 'react'
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { _home } from './utils/Utils/configPath';
import Home from './pages/Client/Home/Home';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        {/* <HomeTemplate path={_cart} exact Component={Cart} />
        <HomeTemplate path={`${_product}/:id`} exact Component={ProductList} />
        <HomeTemplate path={`${_detail}/:id`} exact Component={ProductDetail} />
        <HomeTemplate path={`${_account}${_edit}`} exact Component={UpdateAccount} />
        <HomeTemplate path={`${_order}/:id`} exact Component={OrderHistory} />



        <HomeTemplate path={_login} exact Component={Login} />
        <HomeTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={QuanLyAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={ThemAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={SuaAccount} />

        <AdminTemplate path={`${_admin}${_cate}`} exact Component={QuanLyCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_add}`} exact Component={AddCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_edit}/:id`} exact Component={UpdateCategory} />

        <AdminTemplate path={`${_admin}${_product}`} exact Component={QuanLyProduct} />
        <AdminTemplate path={`${_admin}${_product}${_add}`} exact Component={ThemProduct} />
        <AdminTemplate path={`${_admin}${_product}${_edit}/:id`} exact Component={SuaProduct} />

        <AdminTemplate path={`${_admin}${_bill}`} exact Component={QuanLyBill} />
        <AdminTemplate path={`${_admin}${_bill}${_detail}/:id`} exact Component={DetailBill} /> */}


      </Switch>
    </Router>
  )
}
