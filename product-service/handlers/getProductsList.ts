import { APIGatewayProxyHandler } from 'aws-lambda';
import { RESPONSE } from '../lib/constants/response';
import productsService from '../lib/product.service';
import Product from '../lib/product.model';
import 'source-map-support/register';

const handler: APIGatewayProxyHandler = async () => {
  try {
    const products: Product[] = await productsService.getAll();

    return RESPONSE._200(products);
  } catch (err) {
    console.error('Error while executing lambda ', err);

    return RESPONSE._500({ message: 'Internal Server Error' });
  }
};

export {
  handler
};