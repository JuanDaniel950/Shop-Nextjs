import { useState, useContext } from 'react';
import style from '@/styles/Headers.module.scss';
import Image from 'next/image';
import Menu from '@/components/Menu';
import MyOrder from '@/containers/MyOrder';
import AppContext from '@/context/AppContext';
import menu from '@/assets/icons/icon_menu.svg';
import logo from '@/assets/icons/logo_yard_sale.svg';
import shoppingCart from '@/assets/icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext<any>(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={style.nav}>
      <Image src={menu} alt="menu" className={style.menu} />
      <div className={style['navbar-left']}>
        <Image src={logo} alt="logo" className={style['nav-logo']} />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={style['navbar-right']}>
        <ul>
          <li className={style['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className={style['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
