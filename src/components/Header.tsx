import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from './ui/use-toast';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.userState);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    toast({ description: 'Logged Out.' });
    navigate('/');
  };

  return (
    <header>
      <div className='align-element flex justify-center sm:justify-end py-2'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello , {user.username}</p>
            <Button variant='link' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='gap-x-6 flex  justify-center items-center -mr-4'>
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Sign in / Guest</Link>
            </Button>

            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
