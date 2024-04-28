import { useAppSelector } from '@/hooks';
import { CartItemsList, SectionTitle, CartTotals } from '@/components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { user } = useAppSelector((store) => store.userState);
  const { numItemsInCart } = useAppSelector((store) => store.cartState);

  if (numItemsInCart === 0) {
    return (
      <div>
        <SectionTitle text='Empty cart' />
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
      <SectionTitle text='Shopping Cart' />

      <div className='mt-8 grid grid-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          <Button asChild className='mt-8 w-full'>
            {user ? (
              <Link to={'/checkout'} className='uppercase'>
                Proceed To Checkout.
              </Link>
            ) : (
              <Link to={'/login'} className='uppercase'>
                please Login
              </Link>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
