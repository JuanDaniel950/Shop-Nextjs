import ProductItem from '@/components/productItem';
import { useState, useEffect } from 'react';
import './../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
import type { Product } from '../utils/type';
import { API } from './../api/API';

const url: string = API.baseUrl;

const ProductList = () => {
  const products: Product[] = useGetProducts(url);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((productItem: Product) => (
          <ProductItem {...productItem} key={productItem.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
