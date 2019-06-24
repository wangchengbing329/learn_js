import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart'
import WithLogin from './WithLogin';
import withLogin from './WithLogin';
// const WithLoginStatus = withLogin(LoginStatus)
// const WithShopCart = withLogin(ShopCart);
function App() {
  return (
    <>
     {/* <React.Fragment> */}
    <LoginStatus></LoginStatus>
    <ShopCart></ShopCart>
    {/* </React.Fragment> */}
    {/* <WithLoginStatus></WithLoginStatus>
    <WithShopCart a="1" b="2"></WithShopCart> */}
    </>
  );
}

export default App;
