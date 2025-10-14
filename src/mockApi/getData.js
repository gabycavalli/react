import { dcProducts } from '../data/dcProd.js';

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dcProducts);
    }, 1000);
  });
};

export function getDataById(id) {
  return new Promise((resolve) => {
    const productId = dcProducts.find((product) => String(product.id) === id);
    setTimeout(() => {
      resolve(productId);
    }, 1000);
  });
}

export function getDataByCategory(catParam) {
  return new Promise((resolve) => {
    const itemResult = dcProducts.filter((item) => item.category === catParam);
    const category =
      itemResult.length === 0
        ? { error: 'No se encontraron productos' }
        : itemResult;
    setTimeout(() => {
      resolve(category);
    }, 1000);
  });
}
