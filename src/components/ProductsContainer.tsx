import ProductsList from './ProductsList';
import ProductsGrid from './ProductsGrid';
import { useLoaderData } from 'react-router-dom';
import { ProductsResponse } from '@/utils';
import { useState } from 'react';
import { Button } from './ui/button';
import { LayoutGrid, List } from 'lucide-react';
import { Separator } from './ui/separator';

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <div>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center mt-8'>
          <h4 className='font-medium text-sm'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>

          <div className='flex gap-x-4'>
            <Button
              onClick={() => setLayout('grid')}
              variant={layout === 'grid' ? 'default' : 'outline'}
              size='icon'
            >
              <LayoutGrid />
            </Button>

            <Button
              onClick={() => setLayout('list')}
              variant={layout === 'list' ? 'default' : 'outline'}
              size='icon'
            >
              <List />
            </Button>
          </div>
        </div>

        <Separator className='mt-4' />
      </section>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
