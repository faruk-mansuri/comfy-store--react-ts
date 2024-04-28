import { useAppSelector } from '@/hooks';
import { links } from '@/utils';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const { user } = useAppSelector((store) => store.userState);
  return (
    <div className='hidden lg:flex justify-center items-center gap-x-4'>
      {links.map((link) => {
        const restrictedRoutes =
          link.href === 'orders' || link.href === 'checkout';
        if (restrictedRoutes && !user) return null;
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) =>
              `capitalize font-light tracking-wide ${
                isActive && 'text-primary'
              }`
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
