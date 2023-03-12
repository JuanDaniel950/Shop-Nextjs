import { useEffect, useState } from "react";
import type { Product } from "../utils/type";

const useGetProducts = (API: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
};

export default useGetProducts;
