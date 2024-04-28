import {
  Link,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { customFetch } from '@/utils';
import { OrdersList, ComplexPagination, SectionTitle } from '@/components';
import { ReduxStore } from '@/store';
import { type OrdersResponse } from '@/utils';
import { Button } from '@/components/ui/button';

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const { user } = store.getState().userState;

    if (!user) {
      toast({ description: 'Please login to continue.' });
      return redirect('/login');
    }

    const params = Object.fromEntries([...new URL(request.url).searchParams]);

    try {
      const response = await customFetch.get<OrdersResponse>('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      toast({ description: 'Failed to fetch orders.' });
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData() as OrdersResponse;

  if (meta.pagination.total < 1) {
    return (
      <div>
        <SectionTitle text='Please make an order' />
        <Button asChild size={'lg'} className='mt-4'>
          <Link to={'/products'} className='uppercase'>
            Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPagination />
    </>
  );
};

export default Orders;
