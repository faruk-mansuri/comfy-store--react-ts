import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import {
  customFetch,
  type ProductsResponse,
  ProductsResponseWithParams,
} from '@/utils';
import type { LoaderFunction } from 'react-router-dom';

const url = '/products';
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  // new URL(request.url).searchParams - return object containing query params values eg {size: 2}
  // [...new URL(request.url).searchParams] - create array of array (key value pair) eg- [['search','ab']]
  const params = Object.fromEntries([...new URL(request.url).searchParams]);
  console.log(params);

  const response = await customFetch.get<ProductsResponse>(url, { params });
  return { ...response.data, params };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
