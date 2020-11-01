import { handler } from '../../handlers/getProductsList';
import { RESPONSE } from '../../lib/constants/response';
import Product from '../../lib/product.model';
import productsService from '../../lib/product.service';

describe('getProductList handler', () => {
  it('get product list is successfully', async () => {
    const productList = [{
      count: 4,
      description: "Short Product Description new book",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 2.4,
      title: "Book 1"
    }];

    spyOn(productsService, 'getAll').and.returnValue(Promise.resolve<Product[]>(productList));

    const responce = await handler(null, null, null);

    expect(responce).toEqual(RESPONSE._200(productList));
  });
});