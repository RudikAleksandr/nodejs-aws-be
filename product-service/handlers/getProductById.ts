import { APIGatewayProxyHandler } from 'aws-lambda';
import { RESPONSE } from '../lib/constants/response';
import productsService from '../lib/product.service';
import Product from '../lib/product.model';
import 'source-map-support/register';

const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { productId } = event?.pathParameters || {};
  if (!productId) {
    return RESPONSE._404({ message: 'Not found' });
  }

  try {
    const product: Product = await productsService.getById(productId);
    if (product) {
      return RESPONSE._200(product);
    }

    return RESPONSE._404({ message: 'Not found' });
  } catch (err) {
    console.error('Error while executing lambda', err);

    return RESPONSE._500({ message: 'Internal Server Error' });
  }
};

export {
  handler
};