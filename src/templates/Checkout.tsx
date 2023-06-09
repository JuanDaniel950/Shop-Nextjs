import OrderItem from '@/components/orderItem';
import React from 'react';
import { Product } from '@/utils/type';

const Checkout = () => {
  const product: Product = {} as Product;
  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1 className="title">My Order</h1>
        <div className="checkout-content">
          <div className="checkout-content">
            <p>
              <span>03.25.21</span>
              <span>6 Articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem {...product} />
      </div>
    </div>
  );
};

export default Checkout;
