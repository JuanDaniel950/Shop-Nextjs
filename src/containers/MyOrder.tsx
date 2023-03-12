import React from 'react';
import Image from 'next/image';
import style from '@/styles/MyOrders.module.scss';
import arrow from '@/assets/icons/flechita.svg';
import { useContext } from 'react';
import { Product } from '@/utils/type';
import OrderItem from '@/components/orderItem';
import AppContext from '@/context/AppContext';
const MyOrder = () => {
  const { state }: any = useContext(AppContext);
  const totalPrice = state.cart.reduce((acc: number, product: Product) => {
    return acc + product.price;
  }, 0);

  return (
    <aside className={style.MyOrder}>
      <div className={style['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={style.title}>My order</p>
      </div>
      <div className={style['my-order-content']}>
        {state.cart.map((product: Product, idx: number) => (
          <OrderItem {...product} key={`orderItem-${product.id}-idx`} />
        ))}
        <div className={style.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice}</p>
        </div>
        <button className={style['primary-button']}>Checkout</button>
      </div>
    </aside>
  );
};
export default MyOrder;
