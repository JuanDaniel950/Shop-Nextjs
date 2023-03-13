import React, { useContext } from 'react';
import Image from 'next/image';
import iconAddToCart from '@/assets/icons/bt_add_to_cart.svg';
import type { Product } from '@/utils/type';
import AppContext from '@/context/AppContext';
import styles from '@/styles/ProductItem.module.scss';

const ProductItem = (product: Product) => {
  const { addToCart } = useContext<any>(AppContext);
  const handleClick = (productSelected: Product) => {
    addToCart(productSelected);
  };
  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={50} height={50} />
      <div className={styles['product-info']}>
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={iconAddToCart} alt="Icon add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
