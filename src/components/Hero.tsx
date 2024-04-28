import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'></h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A non
          dignissimos inventore. Nobis eaque ab illum officia molestias impedit
          odit facere! Commodi cumque alias ad, iste porro repudiandae in ab.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
};

export default Hero;
