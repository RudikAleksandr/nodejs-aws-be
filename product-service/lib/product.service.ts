import productRepo from './repository/product.memory.repository';
import Product from './product.model';

const getAll = async (): Promise<Product[]> => productRepo.getAll();

const getById = async (id: string): Promise<Product> => productRepo.getById(id);

export default {
  getAll,
  getById
};