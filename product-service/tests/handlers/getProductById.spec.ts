import { handler } from '../../handlers/getProductById';
import { RESPONSE } from '../../lib/constants/response';
import Product from '../../lib/product.model';
import productsService from '../../lib/product.service';
import { event } from '../mockData';

describe('getProductById handler', () => {
  it('product is not found - without productId parameter ', async () => {
    const responce = await handler(null, null, null);

    expect(responce).toEqual(RESPONSE._404({ message: 'Not found' }));
  });

  it('product is not found - not in db', async () => {
    spyOn(productsService, 'getById').and.returnValue(Promise.resolve<Product>(null));

    const responce = await handler(event, null, null);

    expect(responce).toEqual(RESPONSE._404({ message: 'Not found' }));
  });

  it('get product is successfully', async () => {
    const product = {
      count: 4,
      description: "Short Product Description new book",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 2.4,
      title: "Book 1"
    };

    spyOn(productsService, 'getById').and.returnValue(Promise.resolve<Product>(product));

    const responce = await handler({
      ...event,
      pathParameters: {
        productId: '1'
      }
    }, null, null);

    expect(responce).toEqual(RESPONSE._200(product));
  });
});