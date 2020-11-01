import { products } from './products';
import Product from '../product.model';

const getAll = async (): Promise<Product[]> => products;

const getById = async (id: string): Promise<Product> => {
  return products.find(product => product.id === id);
}

export default {
  getAll,
  getById
};
