import { Link } from 'react-router-dom';
import { Armchair } from 'lucide-react';
const Logo = () => {
  return (
    <Link
      to='/'
      className='hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white'
    >
      <Armchair className='h-8 w-8' />
    </Link>
  );
};

export default Logo;
