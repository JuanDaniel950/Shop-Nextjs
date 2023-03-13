import ProductItem from '@/components/productItem';
import useGetProducts from '@/hooks/useGetProducts';
import type { Product } from '@/utils/type';
import { API } from '@/api/API';
import styles from '@/styles/ProductList.module.scss';

const url: string = API.baseUrl;

const ProductList = () => {
  const products: Product[] = useGetProducts(url);
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((productItem: Product) => (
          <ProductItem {...productItem} key={productItem.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
