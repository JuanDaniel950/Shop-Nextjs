import OrderItem from '@/components/orderItem';
import React from 'react';
import { Product } from '@/utils/type';
import styles from '@/styles/checkout.module.scss';

const Checkout = () => {
  const product: Product = {} as Product;
  return (
    <div className={styles.checkout}>
      <div className={styles['checkout-container']}>
        <h1 className={styles.title}>My Order</h1>
        <div className={styles['checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>6 Articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
