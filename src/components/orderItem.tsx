import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@/context/AppContext';
import style from '@/styles/OrderItem.module.scss';
import close from '@/assets/icons/icon_close.png';
import { Product } from '@/utils/type';

const OrderItem = (product: Product) => {
  const { removeFromCart }: any = useContext(AppContext);

  const handleRemove = (product: Product) => {
    removeFromCart(product);
  };
  return (
    <div className={style.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>{product?.price}</p>
      <img src={close.toString()} className="btn-close" alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
