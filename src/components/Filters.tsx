import { Form, useLoaderData, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, order, price, shipping } = params;

  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        name='search'
        type='text'
        defaultValue={search}
        label='Search Product'
      />

      {/* CATEGORY */}
      <FormSelect
        label='select category'
        name='category'
        options={meta.categories}
        defaultValue={category}
      />

      {/* COMPANY */}
      <FormSelect
        label='select company'
        name='company'
        options={meta.companies}
        defaultValue={company}
      />

      {/* ORDER */}
      <FormSelect
        label='order by'
        name='order'
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />

      {/* RANGE */}
      <FormRange label='price' name='price' defaultValue={price} />

      {/* SHIPPING */}
      <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
      />

      <Button type='submit' size='sm' className='self-end mb-2'>
        Search
      </Button>

      <Button
        type='button'
        size='sm'
        variant='outline'
        className='self-end mb-2'
        asChild
      >
        <Link to='/products'>Reset</Link>
      </Button>
    </Form>
  );
};

export default Filters;
